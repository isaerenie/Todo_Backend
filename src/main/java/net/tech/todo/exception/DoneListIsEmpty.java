package net.tech.todo.exception;

import lombok.Getter;
import net.tech.todo.util.ResponseStatus;


@Getter
// DoneListIsEmpty sınıfı RuntimeException sınıfından türetilmiştir. Bu sınıfın amacı Done listesinin boş olması durumunda
// bir hata mesajı döndürmektir.
public class DoneListIsEmpty extends RuntimeException{
    private final String message="Done list is empty";
    private final ResponseStatus status=ResponseStatus.FAILURE;
    private final String code="404";
}
