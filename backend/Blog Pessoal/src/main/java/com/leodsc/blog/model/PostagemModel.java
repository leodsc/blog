package com.leodsc.blog.model;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "tb_postagens")
public class PostagemModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "O atributo título é Obrigatório!")
  @Size(min = 5, max = 100, message = "O atributo título deve conter no mínimo 05 e no máximo 100 caracteres")
  private String titulo;

  @NotBlank(message = "O atributo texto é Obrigatório!")
  @Size(min = 10, max = 1000, message = "O atributo texto deve conter no mínimo 10 e no máximo 1000 caracteres")
  private String texto;

  @UpdateTimestamp
  private LocalDateTime data;

  @ManyToOne
  @JsonIgnoreProperties("postagem")
  private TemaModel tema;

  @ManyToOne
  @JsonIgnoreProperties("postagem")
  private UsuarioModel usuario;

  /*Insira os Getters and Setters*/

  public UsuarioModel getUsuario() {
    return usuario;
  }

  public void setUsuario(UsuarioModel usuario) {
    this.usuario = usuario;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitulo() {
    return this.titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getTexto() {
    return this.texto;
  }

  public void setTexto(String texto) {
    this.texto = texto;
  }

  public LocalDateTime getData() {
    return this.data;
  }

  public void setData(LocalDateTime data) {
    this.data = data;
  }

  public TemaModel getTema() {
    return this.tema;
  }

  public void setTema(TemaModel tema) {
    this.tema = tema;
  }

}