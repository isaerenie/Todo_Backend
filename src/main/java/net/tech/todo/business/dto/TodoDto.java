package net.tech.todo.business.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.tech.todo.audit.AuditingAwareBaseDto;


import javax.persistence.Column;
import java.io.Serializable;

//@Data annotationı ile getter ve setter metodları oluşturuldu.
@Data

//@AllArgsConstructor annotationı ile bütün fieldlarını kullanan bir constructor oluşturuldu.
@AllArgsConstructor

//@NoArgsConstructor annotationı ile boş bir constructor oluşturuldu.
@NoArgsConstructor

// @Builder annotationı ile builder pattern kullanılarak nesne oluşturuldu.
@Builder

// @Log4j2 annotationı ile loglama işlemi için gerekli olan nesne oluşturuldu.
@Log4j2

// TodoDto classı  entitylerde oluşturulma ve güncellenme tarihlerini tutmak için oluşturuldu.
// AuditingAwareBaseDto classından extend edilerek oluşturuldu.
// Serializable interfaceinden implement edildi. Bunun sebebi ise nesnelerin byte dizilerine dönüştürülmesini sağlamak.
// Böylece nesnelerin network üzerinden transferi sağlanır.
public class TodoDto extends AuditingAwareBaseDto implements Serializable {

    // serialVersionUID değişkeni nesnelerin byte dizilerine dönüştürülmesini sağlamak için kullanılır.
    public static final Long serialVersionUID = 1L;

    // @Column annotationı ile veritabanında hangi kolona karşılık geldiği belirtildi.
    @Column(name = "subject",columnDefinition = "varchar(255) default 'Konu girmediniz'")
    private String subject;

    @Column(name = "isDone")
    private boolean isDone;
}

