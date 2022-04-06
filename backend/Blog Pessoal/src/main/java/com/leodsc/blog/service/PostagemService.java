package com.leodsc.blog.service;

import com.leodsc.blog.model.PostagemModel;
import com.leodsc.blog.repository.PostagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostagemService {

  @Autowired
  private PostagemRepository repo;

  public List<PostagemModel> getAll() {
    return repo.findAll();
  }

  public ResponseEntity<PostagemModel> criarPostagem(PostagemModel postagem) {
    repo.save(postagem);
    return ResponseEntity.ok().body(postagem);
  }

  public List<PostagemModel> atualizarPostagem(PostagemModel postagem) {
    var novaPostagem = repo.findById(postagem.getId());
    novaPostagem.get().setTema(postagem.getTema());
    novaPostagem.get().setTexto(postagem.getTexto());
    novaPostagem.get().setTitulo(postagem.getTitulo());
    repo.save(novaPostagem.get());
    return getAll();
  }

  public void deletar(Long id) {
    var postagem = repo.findById(id);
    repo.delete(postagem.get());
  }
}
