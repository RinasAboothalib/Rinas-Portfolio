package com.techloom.pos;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private Integer availableStock;
    private Integer reservedStock = 0;

    @Version
    private Long version;

    public Product() {}
    public Product(String name, Double price, Integer availableStock) {
        this.name = name;
        this.price = price;
        this.availableStock = availableStock;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public Double getPrice() { return price; }
    public Integer getAvailableStock() { return availableStock; }
    public void setAvailableStock(Integer availableStock) { this.availableStock = availableStock; }
    public Integer getReservedStock() { return reservedStock; }
    public void setReservedStock(Integer reservedStock) { this.reservedStock = reservedStock; }
}