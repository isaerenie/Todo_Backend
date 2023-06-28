package net.tech.todo;


import net.tech.todo.data.entity.Role;
import net.tech.todo.data.repo.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class TodoApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
    }
    @Bean
    public CommandLineRunner initRoles(RoleRepository roleRepository) {
        return args -> {
            // ROLE_Admin rolünü kaydet
            Role adminRole = new Role();
            adminRole.setName("ROLE_Admin");
            roleRepository.save(adminRole);

            // ROLE_User rolünü kaydet
            Role userRole = new Role();
            userRole.setName("ROLE_User");
            roleRepository.save(userRole);
        };
    }
}
