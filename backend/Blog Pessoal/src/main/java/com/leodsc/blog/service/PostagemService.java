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
}
