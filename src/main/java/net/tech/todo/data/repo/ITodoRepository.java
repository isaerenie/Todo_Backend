package net.tech.todo.data.repo;


import net.tech.todo.data.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITodoRepository extends JpaRepository<Todo, Long> {

}
