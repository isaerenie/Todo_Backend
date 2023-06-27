package net.tech.todo.data.entity.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@Data
public class ProCutImageJoin {

    @Id

    private Integer pid;

    private Integer price;

    private String productTitle;

    private String categoryTitle;

    private String description;

    private boolean onSale;
    private String  file;
}

