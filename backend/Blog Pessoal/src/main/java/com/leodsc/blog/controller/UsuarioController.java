package com.leodsc.blog.controller;

import com.leodsc.blog.model.UsuarioLogin;
import com.leodsc.blog.model.UsuarioModel;
import com.leodsc.blog.repository.UsuarioRepository;
import com.leodsc.blog.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

  @Autowired
  private UsuarioRepository repo;

  @Autowired
  private UsuarioService service;

  @GetMapping("/all")
  public List<UsuarioModel> getAll() {
    return repo.findAll();
  }

  @PostMapping("/signup")
  public ResponseEntity<UsuarioModel> signup(@RequestBody UsuarioModel usuario) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    usuario.setSenha(encoder.encode(usuario.getSenha()));
    return service.signup(usuario);
  }

  @PostMapping("/login")
  public ResponseEntity<UsuarioLogin> login(@RequestBody UsuarioModel usuario) {
    try {
      return service.login(usuario);
    } catch (UsernameNotFoundException e) {
      var usuarioLogin = new UsuarioLogin();
      usuarioLogin.setMessage(e.getMessage());
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(usuarioLogin);
    } catch (Exception e) {
      System.out.println(e.getMessage());
      var usuarioLogin = new UsuarioLogin();
      usuarioLogin.setMessage(e.getMessage());
      return ResponseEntity.status(HttpStatus.FORBIDDEN).body(usuarioLogin);
    }
  }
}
