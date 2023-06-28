package net.tech.todo.config;


import org.springframework.context.annotation.Configuration;
import springfox.documentation.service.*;
import java.util.Arrays;
import java.util.List;

@Configuration // @Configuration anotasyonu ile bu sınıfın bir konfigürasyon sınıfı olduğunu belirtiyoruz.
public class AppConfig {
    private ApiKey apiKey() {
        return new ApiKey("JWT", "Authorization", "header");
    }

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Todo API",
                "Todo API",
                "1.0",
                "Terms of service",
                new Contact("TechNet", "www.technet.com", "abc.technet.com")
                , "License of API",
        "API license URL",
                Arrays.asList());
    }
    private List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
    }
}
