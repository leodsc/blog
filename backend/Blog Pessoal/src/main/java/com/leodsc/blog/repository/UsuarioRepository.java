package com.leodsc.blog.repository;

import com.leodsc.blog.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
  public Optional<UsuarioModel> findByUsuario(String usuario);
}
