package net.tech.todo.data.entity.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class OrderDetails {
    @Id
    private Integer oid;
    private Integer pid;
    private String firstName;
    private String lastName;
    private String email;
    private String productTitle;
    private String description;
    private Integer price;
    private String file;

}
