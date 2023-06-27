package net.tech.todo.exception;

import lombok.Getter;
import net.tech.todo.util.ResponseStatus;

import static net.tech.todo.util.ResponseStatus.FAILURE;

@Getter
public class TodoNotFound extends RuntimeException{
    private final String message="Todo not found";
    private final ResponseStatus status=FAILURE;
    private final String code="404";
}
