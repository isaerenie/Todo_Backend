package net.tech.todo.data.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class UserRol {
    @Id
    private Integer uid;
    private String firstName;
    private String lastName;
    private String email;
}
