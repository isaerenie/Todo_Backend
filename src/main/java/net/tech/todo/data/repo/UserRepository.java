package net.tech.todo.data.repo;

 ;
 import net.tech.todo.data.entity.User;
 import org.springframework.data.jpa.repository.JpaRepository;
 import org.springframework.data.jpa.repository.Query;
 import org.springframework.stereotype.Repository;

 import java.util.List;
 import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "select count(*) from user", nativeQuery = true)
    long count();

    @Query(value = "select u.id,u.email,u.enabled,u.first_name,u.last_name,u.password,u.token_expired from user as u", nativeQuery = true)
    List<User> allUser();

    Optional<User> findByEmailEqualsIgnoreCase(String email);
    Optional<User> findByEmail(String username);

}
