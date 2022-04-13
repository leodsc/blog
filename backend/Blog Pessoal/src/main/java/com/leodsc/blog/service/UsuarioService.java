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

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;

  @Autowired
  private UserDetailsServiceImpl userDetailsService;

  @Autowired
  private UsuarioRepository repo;

  public ResponseEntity<UsuarioLogin> login(UsuarioModel usuario) throws Exception {
    var dbUsuario = repo.findByUsuario((usuario.getUsuario()));
    if (dbUsuario.isPresent()) {
      boolean comp = passwordEncoder.matches(usuario.getSenha(), dbUsuario.get().getSenha());
      if (!comp) {
        throw new Exception("Senha invalida");
      }
    }
    UserDetails user = userDetailsService.loadUserByUsername(usuario.getUsuario());
    String token = generateToken(usuario);
    var usuarioLogin = new UsuarioLogin(dbUsuario.get());
    usuarioLogin.setToken(token);
    return ResponseEntity.ok().body(usuarioLogin);
  }

  public String generateToken(UsuarioModel user) {
    String userToken = user.getUsuario() + ":" + user.getSenha();
    return Base64.getEncoder().encodeToString(userToken.getBytes(StandardCharsets.UTF_8));
  }

  public ResponseEntity<UsuarioModel> signup(UsuarioModel usuario) {
    repo.save(usuario);
    return ResponseEntity.ok().body(usuario);
  }

  public ResponseEntity<UsuarioLogin> atualizar(UsuarioLogin usuario) {
    var user = this.repo.findByUsuario(usuario.getUsuario());

    if (user.isPresent()) {
      user.get().setUsuario(usuario.getUsuario());
      user.get().setFoto(usuario.getUsuario());
      user.get().setNome(usuario.getNome());
      user.get().setTipo(usuario.getTipo());
      repo.save(user.get());
      return ResponseEntity.ok(usuario);
    }
    throw new UsernameNotFoundException("nao achado");
  }
}
