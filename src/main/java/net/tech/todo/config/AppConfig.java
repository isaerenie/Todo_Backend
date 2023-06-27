package net.tech.todo.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.context.SecurityContext;
import springfox.documentation.service.*;
import java.util.Arrays;
import java.util.List;

@Configuration
public class AppConfig {
    private ApiKey apiKey() {
        return new ApiKey("JWT", "Authorization", "header");
    }



    private List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
    }
}
