package net.tech.todo.controller.todo;


import net.tech.todo.util.ResponseMap;

public interface ITodoGenericsApi<D> {


    // ### CRUD ###############################
    // CREATE
    public ResponseMap todoServiceCreate(D d);

    // LIST
    public ResponseMap todoServiceList();

    // FIND
    public ResponseMap todoServiceFindById(Long id);

    // DELETE
    public ResponseMap todoServiceDeleteById(Long id);


    // UPDATE
    public ResponseMap todoServiceUpdateById(Long id, D d);

    //UPDATE CHECK
    public ResponseMap todoServiceUpdateByIdCheck(Long id, Boolean done);
    //DONE
    public ResponseMap todoServiceAllDone();

    //TODO
    public ResponseMap todoServiceAllTodo();

    //DELETE DONE
    public ResponseMap todoServiceDeleteAllDone();


    //  DELETE ALL
    public ResponseMap todoServiceDeleteAll();


}
