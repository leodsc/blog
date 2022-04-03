package com.leodsc.blog.model;

import javax.persistence.Entity;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UsuarioLogin extends UsuarioModel {

  private String nome = "";

  private String usuario = "";

  private String senha = "";

  private String foto = "";

  private String tipo = "";

  private String token;

  private String message;

  public UsuarioLogin() { };

  public UsuarioLogin(UsuarioModel usuario) {
    this.nome = usuario.getNome();
    this.senha = usuario.getSenha();
    this.usuario = usuario.getUsuario();
    this.foto = usuario.getFoto();
    this.tipo = usuario.getTipo();
  }

  @Override
  public String getNome() {
    return nome;
  }

  @Override
  public String getUsuario() {
    return usuario;
  }

  @Override
  public String getSenha() {
    return senha;
  }

  @Override
  public String getFoto() {
    return foto;
  }

  @Override
  public String getTipo() {
    return tipo;
  }

  public String getToken(String token) {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public String getToken() {
    return token;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
