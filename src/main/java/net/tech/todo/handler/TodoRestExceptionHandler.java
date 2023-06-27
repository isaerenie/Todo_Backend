package net.tech.todo.handler;


import net.tech.todo.exception.*;
import net.tech.todo.util.ResponseMap;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TodoRestExceptionHandler {

    @ExceptionHandler(TodoNotFound.class)
    public ResponseMap<?> todoNotFound(TodoNotFound todoNotFound){
         return ResponseMap.<TodoNotFound>builder()
                 .status(todoNotFound.getStatus())
                 .code(todoNotFound.getCode())
                 .message(todoNotFound.getMessage())
                 .build();
    }

    @ExceptionHandler(TodoListNotDeleted.class)
    public ResponseMap<?> todoListNotDeleted(TodoListNotDeleted todoListNotDeleted){
         return ResponseMap.<TodoListNotDeleted>builder()
                 .status(todoListNotDeleted.getStatus())
                 .code(todoListNotDeleted.getCode())
                 .message(todoListNotDeleted.getMessage())
                 .build();
    }

    @ExceptionHandler(DoneListNotDeleted.class)
    public ResponseMap<?> doneListNotDeleted(DoneListNotDeleted doneListNotDeleted){
         return ResponseMap.<DoneListNotDeleted>builder()
                 .status(doneListNotDeleted.getStatus())
                 .code(doneListNotDeleted.getCode())
                 .message(doneListNotDeleted.getMessage())
                 .build();
    }

    @ExceptionHandler(TodoListIsEmpty.class)
    public ResponseMap todoListIsEmpty(TodoListIsEmpty todoListIsEmpty){
         return ResponseMap.<TodoListIsEmpty>builder()
                 .status(todoListIsEmpty.getStatus())
                 .code(todoListIsEmpty.getCode())
                 .message(todoListIsEmpty.getMessage())
                 .build();
    }

    @ExceptionHandler(DoneListIsEmpty.class)
    public ResponseMap doneListIsEmpty(DoneListIsEmpty doneListIsEmpty){
         return ResponseMap.<DoneListIsEmpty>builder()
                 .status(doneListIsEmpty.getStatus())
                 .code(doneListIsEmpty.getCode())
                 .message(doneListIsEmpty.getMessage())
                 .build();
    }
}
