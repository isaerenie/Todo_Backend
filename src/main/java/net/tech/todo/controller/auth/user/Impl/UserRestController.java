package net.tech.todo.controller.auth.user.Impl;

import net.tech.todo.business.service.auth.UserDetailService;
import net.tech.todo.data.entity.User;
import net.tech.todo.props.JWTLogin;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
public class UserRestController {

    final UserDetailService service;

    public UserRestController(UserDetailService service) {
        this.service = service;
    }

    // Register
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user) {
        return service.register(user);
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity auth(@RequestBody JWTLogin jwtLogin) {
        return service.login(jwtLogin);
    }

    //FindbyEmail
    @GetMapping("/find/{email}")
    public ResponseEntity findByEmail(@PathVariable String email) {
        return service.findByEmail(email);
    }
}
