package net.tech.todo.business.service.todo;




import java.util.List;

public interface ITodoGenericsService<D, E> {

    // ### Model Mapper ###############################
    public D EntityToDto(E e);

    public E DtoToEntity(D d);

    // ### CRUD ###############################
    // CREATE
    public D todoServiceCreate(D d);

    // LIST
    public List<D> todoServiceList();

    // FIND
    public D todoServiceFindById(Long id);

    // DELETE
    public D todoServiceDeleteById(Long id);

    // UPDATE
    public D todoServiceUpdateById(Long id, D d);

    public D todoServiceUpdateByIdCheck(Long id, Boolean done);

    public List<D> todoServiceDone();

    //TODO
    public List<D> todoServiceTodo();

    //DELETE DONE
    public Boolean todoServiceDeleteAllDone();


    //  DELETE ALL
    public Boolean todoServiceDeleteAll();

}

