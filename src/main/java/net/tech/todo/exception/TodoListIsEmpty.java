package net.tech.todo.exception;

import lombok.Getter;
import net.tech.todo.util.ResponseStatus;


@Getter
public class TodoListIsEmpty extends RuntimeException{
    private final String message="Todo list is empty";
    private final ResponseStatus status=ResponseStatus.FAILURE;
    private final String code="404";
}
