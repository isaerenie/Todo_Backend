package net.tech.todo.controller.todo.Impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.tech.todo.business.dto.TodoDto;
import net.tech.todo.business.service.todo.ITodoGenericsService;
import net.tech.todo.controller.todo.ITodoGenericsApi;
import net.tech.todo.util.ResponseMap;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import net.tech.todo.util.ResponseStatus;


import java.util.Map;

@RequiredArgsConstructor //Injection
@Log4j2

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/todo/api/v1")
public class TodoApiImpl implements ITodoGenericsApi<TodoDto> {

    private final ITodoGenericsService iTodoGenericsService;



    //CREATE
    //http://localhost:3333/todo/api/v1/create
    @PostMapping("/create")
    @Transactional
    @Override
    public ResponseMap todoServiceCreate(@RequestBody TodoDto todoDto) {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("Todo created successfully").details(Map.of("todo", iTodoGenericsService.todoServiceCreate(todoDto))).build();
    }

    //LIST
    //http://localhost:3333/todo/api/v1/list
    @GetMapping("/list")
    @Override
    public ResponseMap todoServiceList() {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("All list retrieved successfully").details(Map.of("todo", iTodoGenericsService.todoServiceList())).build();
    }

    //FIND
    //http://localhost:3333/todo/api/v1/find/1
    @GetMapping({"/find", "/find/{id}"})
    @Override
    public ResponseMap todoServiceFindById(@PathVariable Long id) {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("Todo retrieved successfully").details(Map.of("todo", iTodoGenericsService.todoServiceFindById(id))).build();
    }

    //DELETE
    //http://localhost:3333/todo/api/v1/delete/1
    @Transactional
    @DeleteMapping({"/delete", "/delete/{id}"})
    @Override
    public ResponseMap todoServiceDeleteById(@PathVariable Long id) {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("Todo deleted successfully").details(Map.of("todo", iTodoGenericsService.todoServiceDeleteById(id))).build();
    }

    //UPDATE
    //http://localhost:3333/todo/api/v1/update/1
    @Transactional
    @PutMapping({"/update", "/update/{id}"})
    @Override
    public ResponseMap todoServiceUpdateById(@PathVariable Long id, @RequestBody TodoDto todoDto) {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("Todo updated successfully").details(Map.of("todo", iTodoGenericsService.todoServiceUpdateById(id, todoDto))).build();
    }

    //UPDATE CHECK
    //http://localhost:3333/todo/api/v1/updatecheck/1
    @Transactional
    @PutMapping({"updatechecked/{id}/{done}"})
    @Override
    public ResponseMap todoServiceUpdateByIdCheck(@PathVariable Long id, @PathVariable Boolean done) {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("Todo updated checked  successfully").details(Map.of("todo", iTodoGenericsService.todoServiceUpdateByIdCheck(id, done))).build();
    }

    //ALL DONE
    //http://localhost:3333/todo/api/v1/done
    @Override
    @Transactional
    @GetMapping({"/done"})
    public ResponseMap todoServiceAllDone() {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("Done list retrieved successfully").details(Map.of("todo", iTodoGenericsService.todoServiceDone())).build();
    }

    //ALL TODO
    //http://localhost:3333/todo/api/v1/todo
    @Override
    @Transactional
    @GetMapping({"/todo"})
    public ResponseMap todoServiceAllTodo() {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("Todo list retrieved successfully").details(Map.of("todo", iTodoGenericsService.todoServiceTodo())).build();
    }

    //DELETE ALL DONE
    //http://localhost:3333/todo/api/v1/deleteAllDone
    @Override
    @DeleteMapping({"/deleteAllDone"})
    public ResponseMap todoServiceDeleteAllDone() {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("All done deleted successfully").details(Map.of("done", iTodoGenericsService.todoServiceDeleteAllDone())).build();
    }



    //DELETE ALL
    //http://localhost:3333/todo/api/v1/all
    @Override
    @DeleteMapping({"/all"})
    public ResponseMap todoServiceDeleteAll() {
        return ResponseMap.builder().status(ResponseStatus.SUCCESS).message("All list deleted successfully").details(Map.of("todo", iTodoGenericsService.todoServiceDeleteAll())).build();
    }

}
