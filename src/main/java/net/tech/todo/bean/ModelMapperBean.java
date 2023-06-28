package net.tech.todo.bean;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// @Configuration anotasyonu ile bu sınıfın bir konfigürasyon sınıfı olduğunu belirtiyoruz.
@Configuration

// ModelMapperBean classı modelmapper beanini oluşturmak için oluşturuldu.
public class ModelMapperBean {

    @Bean
    public ModelMapper modelMapperMethod(){
        return new ModelMapper();
    }
}
