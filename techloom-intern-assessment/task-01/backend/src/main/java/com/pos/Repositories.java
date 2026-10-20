package com.techloom.pos;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

interface ProductRepository extends JpaRepository<Product, Long> {}

interface OrderRepository extends JpaRepository<Order, Long> {
    boolean existsByIdempotencyKey(String key);
    List<Order> findByStatusAndExpiresAtBefore(String status, LocalDateTime time);
}