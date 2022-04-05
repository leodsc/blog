package com.leodsc.blog.service;

import com.leodsc.blog.model.UsuarioLogin;
import com.leodsc.blog.model.UsuarioModel;
import com.leodsc.blog.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Optional;

@Service
public class UsuarioService {

//  @Autowired
//  private BCryptPasswordEncoder passwordEncoder;

  @Autowired
  private UserDetailsServiceImpl userDetailsService;

  @Autowired
  private UsuarioRepository repo;

  public ResponseEntity<UsuarioLogin> login(UsuarioModel usuario) {
    UserDetails user = userDetailsService.loadUserByUsername(usuario.getUsuario());
    String token = generateToken(user);
    System.out.println(token);
    var dbUsuario = repo.findByUsuario(usuario.getUsuario());
    var usuarioLogin = new UsuarioLogin(dbUsuario.get());
    usuarioLogin.setToken(token);
    return ResponseEntity.ok().body(usuarioLogin);
  }

  public String generateToken(UserDetails user) {
    String userToken = user.getUsername() + ":" + user.getPassword();
    return Base64.getEncoder().encodeToString(userToken.getBytes(StandardCharsets.UTF_8));
  }

  public ResponseEntity<UsuarioModel> signup(UsuarioModel usuario) {
    repo.save(usuario);
    return ResponseEntity.ok().body(usuario);
  }
}
