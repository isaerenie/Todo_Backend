package net.tech.todo.business.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.tech.todo.audit.AuditingAwareBaseDto;


import javax.persistence.Column;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Log4j2
public class TodoDto extends AuditingAwareBaseDto implements Serializable {
    public static final Long serialVersionUID = 1L;
    @Column(name = "subject",columnDefinition = "varchar(255) default 'Konu girmediniz'")
    private String subject;

    @Column(name = "isDone")
    private boolean isDone;
}

