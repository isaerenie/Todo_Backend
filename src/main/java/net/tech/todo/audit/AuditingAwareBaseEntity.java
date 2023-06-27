package net.tech.todo.audit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;


@Data


@MappedSuperclass
@JsonIgnoreProperties(value = {"created_date,updated_date"},allowGetters = true)
abstract public class AuditingAwareBaseEntity {

    @CreatedBy
    @Column(name="created_user")
    protected String createdUser;


    @CreatedDate
    @Column(name="created_date")
    protected Date createdDate;


    @LastModifiedBy
    @Column(name="updated_user")
    protected String updatedUser;


    @LastModifiedDate
    @Column(name="updated_date")
    protected Date updatedDate;
}
