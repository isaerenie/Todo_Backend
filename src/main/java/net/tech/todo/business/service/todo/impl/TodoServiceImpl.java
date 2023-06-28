package net.tech.todo.business.service.todo.impl;

// importler
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.tech.todo.bean.ModelMapperBean;
import net.tech.todo.business.dto.TodoDto;
import net.tech.todo.business.service.todo.ITodoGenericsService;
import net.tech.todo.data.entity.Todo;
import net.tech.todo.data.repo.ITodoRepository;
import net.tech.todo.exception.DoneListIsEmpty;
import net.tech.todo.exception.TodoListNotDeleted;
import net.tech.todo.exception.TodoNotFound;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor // Injection için kullanılır.
@Log4j2 // Loglama için kullanılır.
@Service // Service katmanı olduğunu belirtir.

// ITodoGenericsService interface'ini implemente eden TodoServiceImpl classı.
public class TodoServiceImpl implements ITodoGenericsService<TodoDto, Todo> {
    private final ITodoRepository iTodoRepository;
    private final ModelMapperBean modelMapperBean;

    @Transactional
    @Override
    // TodoDto nesnesini Todo nesnesine dönüştürür.
    public TodoDto EntityToDto(Todo todo) {
        return modelMapperBean.modelMapperMethod().map(todo, TodoDto.class);
    }

    @Override
    // Todo nesnesini TodoDto nesnesine dönüştürür.
    public Todo DtoToEntity(TodoDto todoDto) {
        return modelMapperBean.modelMapperMethod().map(todoDto, Todo.class);
    }

    // CREATE
    @Override
    // Todo yerine TodoDto kullanılmasının sebebi bilgi güvenliğini sağlamaktır. Çünkü TodoDto nesnesi veritabanı ile iletişim kurar.
    // ve veritabanı ile iletişim kurarken Todo nesnesi kullanılmaz. Bu sayede veritabanı ile iletişim kurarken Todo nesnesinin bilgileri korunmuş olur.
    public TodoDto todoServiceCreate(TodoDto todoDto) {
        if (todoDto != null) {
            Todo todoModel = DtoToEntity(todoDto);
            Todo todoDb = iTodoRepository.save(todoModel);
            todoDto.setId(todoDb.getId());
            todoDto.setSystemDate(todoDb.getSystemDate());
        } else {
            throw new TodoNotFound();
        }
        return todoDto;

    }

    // LIST
    @Override
    public List<TodoDto> todoServiceList() {
        return iTodoRepository.findAll().stream().map(this::EntityToDto).collect(Collectors.toList());
    }

    // FINDBYID
    @Override
    public TodoDto todoServiceFindById(Long id) {
        Todo todo = null;
        if (id != null) {
            todo = iTodoRepository.findById(id).orElseThrow(TodoNotFound::new);
        } else {
            throw new TodoNotFound();
        }
        return EntityToDto(todo);
    }

    // DELETEBYID
    @Override
    public TodoDto todoServiceDeleteById(Long id) {
        TodoDto todoDtoDelete = todoServiceFindById(id);
        Todo todo = DtoToEntity(todoDtoDelete);
        iTodoRepository.delete(todo);
        return todoDtoDelete;
    }

    // UPDATEBYID
    @Override
    public TodoDto todoServiceUpdateById(Long id, TodoDto todoDto) {
        Todo todo = DtoToEntity(todoServiceFindById(id));
        if (todo != null) {
            todo.setId(id);
            todo.setSubject(todoDto.getSubject());
            todo.setDone(todoDto.isDone());
            iTodoRepository.save(todo);
            todoDto.setId(todo.getId());
            todoDto.setSystemDate(todoDto.getSystemDate());
        } else {
            throw new TodoNotFound();
        }
        return EntityToDto(todo);
    }

    // UPDATEBYIDCHECK
    @Override
    public TodoDto todoServiceUpdateByIdCheck(Long id, Boolean done) {
        Todo todo = DtoToEntity(todoServiceFindById(id));
        if (todo != null) {
            todo.setId(id);
            todo.setDone(done);
            iTodoRepository.save(todo);
            todo.setSystemDate(todo.getSystemDate());
        } else {
            throw new TodoNotFound();
        }
        return EntityToDto(todo);
    }

    // LISTDONE
    @Override
    public List<TodoDto> todoServiceDone() {
        return iTodoRepository.findAll()
                .stream().filter(Todo::isDone)
                .map(this::EntityToDto).toList();
    }

    // LISTTODO
    @Override
    public List<TodoDto> todoServiceTodo() {

        return iTodoRepository.findAll()
                .stream().filter(todo -> !todo.isDone())
                .map(this::EntityToDto).toList();
    }

    // DELETEALLDONE
    @Override

    public Boolean todoServiceDeleteAllDone() {
        /*
          Yapılacaklar listesi boş ise hata fırlatır.Değilse Bulunan liste streame dönüştürülür filtreleme işlemi yapılır.
           Filtreleme işlemi sonucunda yapılacaklar listesindeki tüm elemanlar done durumunda ise yapılacaklar listesi boş olur ve hata fırlatılır. Eğer yapılacaklar listesi boş değil ise yapılacaklar listesindeki
          tüm elemanlar silinir.*/
        if (iTodoRepository.findAll()
                .stream().filter(Todo::isDone)
                .toList().isEmpty()) {
            throw new DoneListIsEmpty();
        } else {
            iTodoRepository.findAll()
                    .stream().filter(Todo::isDone)
                    .forEach(todo -> iTodoRepository.delete(todo));
        }
        return iTodoRepository.findAll()
                .stream().filter(Todo::isDone)
                .toList().isEmpty();
    }


    // DELETEALL
    @Override
    public Boolean todoServiceDeleteAll() {
        iTodoRepository.deleteAll();
        if (iTodoRepository.findAll().isEmpty()) {
            return true;
        } else {
            throw new TodoListNotDeleted();
        }
    }
}
