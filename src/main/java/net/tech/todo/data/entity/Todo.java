package net.tech.todo.data.entity;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name="todo")



public class Todo extends BaseEntity implements java.io.Serializable {
    public static final Long serialVersionUID = 1L;
    @Column(name = "subject",columnDefinition = "varchar(255) default 'Konu girmediniz'")
    private String subject;

    @Column(name = "isDone")
    private boolean isDone;

}

