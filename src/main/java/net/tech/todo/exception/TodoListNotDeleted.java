package net.tech.todo.exception;

import lombok.Getter;
import net.tech.todo.util.ResponseStatus;


@Getter
public class TodoListNotDeleted extends RuntimeException{
    private final String message="Todo list not deleted";
    private final ResponseStatus status=ResponseStatus.FAILURE;
    private final String code="500";
}
