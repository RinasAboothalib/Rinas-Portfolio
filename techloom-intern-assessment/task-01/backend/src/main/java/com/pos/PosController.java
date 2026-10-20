package com.techloom.pos;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PosController {
    private final ProductRepository productRepo;
    private final OrderRepository orderRepo;

    public PosController(ProductRepository productRepo, OrderRepository orderRepo) {
        this.productRepo = productRepo;
        this.orderRepo = orderRepo;
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product p) {
        return productRepo.save(p);
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productRepo.findAll();
    }

    @PostMapping("/reserve")
    @Transactional
    public Order reserve(@RequestBody Map<String, Object> body) {
        Long productId = Long.valueOf(body.get("productId").toString());
        Integer quantity = Integer.parseInt(body.get("quantity").toString());
        String key = body.get("idempotencyKey").toString();

        if (orderRepo.existsByIdempotencyKey(key)) {
            throw new RuntimeException("Duplicate request");
        }

        Product p = productRepo.findById(productId).orElseThrow();
        if (p.getAvailableStock() < quantity) {
            throw new RuntimeException("Out of stock");
        }

        p.setAvailableStock(p.getAvailableStock() - quantity);
        p.setReservedStock(p.getReservedStock() + quantity);
        productRepo.save(p);

        Order order = new Order();
        order.setProductId(productId);
        order.setQuantity(quantity);
        order.setStatus("RESERVED");
        order.setIdempotencyKey(key);
        order.setExpiresAt(LocalDateTime.now().plusMinutes(5));
        return orderRepo.save(order);
    }

    @Scheduled(fixedRate = 10000)
    @Transactional
    public void checkExpiry() {
        List<Order> expired = orderRepo.findByStatusAndExpiresAtBefore("RESERVED", LocalDateTime.now());
        for (Order o : expired) {
            o.setStatus("EXPIRED");
            orderRepo.save(o);
            Product p = productRepo.findById(o.getProductId()).orElse(null);
            if (p != null) {
                p.setAvailableStock(p.getAvailableStock() + o.getQuantity());
                p.setReservedStock(p.getReservedStock() - o.getQuantity());
                productRepo.save(p);
            }
        }
    }

    @PostMapping("/pay")
    @Transactional
    public Order pay(@RequestBody Map<String, Object> body) {
        Long orderId = Long.valueOf(body.get("orderId").toString());
        String outcome = body.get("outcome").toString();

        Order order = orderRepo.findById(orderId).orElseThrow();
        if (!"RESERVED".equals(order.getStatus())) {
            throw new RuntimeException("Invalid order state");
        }

        Product p = productRepo.findById(order.getProductId()).orElseThrow();
        if ("SUCCESS".equalsIgnoreCase(outcome)) {
            order.setStatus("PAID");
            p.setReservedStock(p.getReservedStock() - order.getQuantity());
        } else {
            order.setStatus("SUCCESS".equalsIgnoreCase(outcome) ? "PAID" : ("TIMEOUT".equalsIgnoreCase(outcome) ? "EXPIRED" : "FAILED"));
            p.setAvailableStock(p.getAvailableStock() + order.getQuantity());
            p.setReservedStock(p.getReservedStock() - order.getQuantity());
        }
        productRepo.save(p);
        return orderRepo.save(order);
    }
}