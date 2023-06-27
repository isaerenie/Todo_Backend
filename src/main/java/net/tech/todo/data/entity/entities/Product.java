package net.tech.todo.data.entity.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Product {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer pid;

    private Integer cid;

    private String productTitle;

    private String description;

    private Integer price;

    private boolean onSale;
}
