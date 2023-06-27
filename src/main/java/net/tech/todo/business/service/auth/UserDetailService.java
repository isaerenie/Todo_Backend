package net.tech.todo.business.service.auth;

import net.tech.todo.data.entity.Role;
import net.tech.todo.data.entity.User;
import net.tech.todo.data.repo.UserRepository;
import net.tech.todo.data.repo.UserRolRepository;
import net.tech.todo.props.JWTLogin;
import net.tech.todo.util.ERest;
import net.tech.todo.util.JwtUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.*;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Service
public class UserDetailService implements UserDetailsService {

    final UserRepository userRepository;
    final JwtUtil jwtUtil;
    final AuthenticationManager authenticationManager;
    final UserRolRepository userRolRepository;

    public UserDetailService(UserRepository userRepository, JwtUtil jwtUtil, @Lazy AuthenticationManager authenticationManager, UserRolRepository userRolRepository) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.userRolRepository = userRolRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalJWTUser = userRepository.findByEmailEqualsIgnoreCase(username);
        if (optionalJWTUser.isPresent()) {
            User u = optionalJWTUser.get();
            UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                    u.getEmail(),
                    u.getPassword(),
                    u.isEnabled(),
                    u.isTokenExpired(),
                    true,
                    true,
                    roles(u.getRoles())
            );
            return userDetails;
        } else {
            throw new UsernameNotFoundException("Böyle bir kullanıcı yok");
        }
    }

    public Collection roles(List<Role> rolex) {
        List<GrantedAuthority> ls = new ArrayList<>();
        for (Role role : rolex) {
            ls.add(new SimpleGrantedAuthority(role.getName()));
        }
        return ls;
    }

    public ResponseEntity register(User jwtUser) {
        Optional<User> optionalJWTUser = userRepository.findByEmailEqualsIgnoreCase(jwtUser.getEmail());
        Map<ERest, Object> hm = new LinkedHashMap();
        if (!optionalJWTUser.isPresent()) {
            jwtUser.setPassword(encoder().encode(jwtUser.getPassword()));
            User user = userRepository.save(jwtUser);
            String jwtToken = jwtUtil.generateToken(loadUserByUsername(jwtUser.getEmail()));
           hm.put(ERest.jwt, jwtToken);
            hm.put(ERest.status, true);
            hm.put(ERest.result, user);

            return new ResponseEntity(hm, HttpStatus.OK);
        } else {
            hm.put(ERest.status, false);
            hm.put(ERest.message, "Bu mail daha kayıt edilmiş");
            hm.put(ERest.result, jwtUser);
            return new ResponseEntity(hm, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    public ResponseEntity auth(JWTLogin jwtLogin) {
        Map<ERest, Object> hm = new LinkedHashMap<>();
        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(jwtLogin.getUsername(), jwtLogin.getPassword()
            ));
            UserDetails userDetails = loadUserByUsername(jwtLogin.getUsername());
            String jwt = jwtUtil.generateToken(userDetails);
            hm.put(ERest.status, true);
            hm.put(ERest.jwt, jwt);
            hm.put(ERest.result, userDetails);
            return new ResponseEntity(hm, HttpStatus.OK);
        } catch (Exception ex) {
            hm.put(ERest.status, false);
            hm.put(ERest.error, ex.getMessage());
            return new ResponseEntity(hm, HttpStatus.NOT_ACCEPTABLE);
        }
    }


    public ResponseEntity list() {
        Map<ERest, Object> hm = new LinkedHashMap<>();
        try {
            List<User> ls = userRepository.findAll();
            hm.put(ERest.status, true);
            hm.put(ERest.result, ls);

        } catch (Exception e) {
            hm.put(ERest.status, false);
            hm.put(ERest.message, "Error:" + e);
        }
        return new ResponseEntity(hm, HttpStatus.OK);
    }
}
