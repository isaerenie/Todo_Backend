package net.tech.todo.exception;

import lombok.Getter;
import net.tech.todo.util.ResponseStatus;

@Getter
public class DoneListNotDeleted extends RuntimeException{
    private final String message="Done list not deleted";
    private ResponseStatus status=ResponseStatus.FAILURE;
    private final String code="500";
}
