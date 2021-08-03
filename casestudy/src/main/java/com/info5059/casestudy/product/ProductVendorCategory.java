package com.info5059.casestudy.product;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Entity class to keep track of Product vendor types
 */
    @Entity
    @Data
    public class ProductVendorCategory {
    @Id
    private String id;
    private String name;
    public ProductVendorCategory() {}
}

