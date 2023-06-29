package net.tech.todo.props;

import lombok.Data;

@Data
// JWTLogin request bodyden gelen username ve password bilgilerini tutar.
public class JWTLogin {
    private String username;
    private String password;
}
