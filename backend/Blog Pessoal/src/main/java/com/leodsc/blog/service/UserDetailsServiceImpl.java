package com.leodsc.blog.service;

import com.leodsc.blog.model.UsuarioModel;
import com.leodsc.blog.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  @Autowired
  private UsuarioRepository repo;

  private List<GrantedAuthority> authorities;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    var user = repo.findByUsuario(username);

    if (user.isPresent()) {
      return User.builder()
        .username(username)
        .password(user.get().getSenha())
        .roles("ADMIN")
        .build();
    }

    throw new UsernameNotFoundException(String.format("Usuário %s não foi encontrado.", username));
  }
}
