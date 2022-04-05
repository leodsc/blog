package com.leodsc.blog.service;

import com.leodsc.blog.model.TemaModel;
import com.leodsc.blog.repository.TemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.http.HttpResponse;
import java.util.List;

@Service
public class TemaService {

  @Autowired
  private TemaRepository repo;

  public List<TemaModel> getAll() {
    return repo.findAll();
  }

  public ResponseEntity<TemaModel> criar(TemaModel tema) {
    repo.save(tema);
    return ResponseEntity.ok().body(tema);
  }

  public ResponseEntity<TemaModel> atualizar(TemaModel tema) {
    System.out.println(tema.getNome());
    var novoTema = repo.findById(tema.getId()).get();
    novoTema.setNome(tema.getNome());
    novoTema.setDescricao(tema.getDescricao());
    repo.save(novoTema);
    return ResponseEntity.ok().body(tema);
  }

  public void deletar(TemaModel tema) {
    var temaDeletar = repo.findById(tema.getId());
    repo.delete(temaDeletar.get());
  }
}
