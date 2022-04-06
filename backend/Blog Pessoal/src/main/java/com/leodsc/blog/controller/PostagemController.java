package com.leodsc.blog.controller;

import com.leodsc.blog.model.PostagemModel;
import com.leodsc.blog.repository.PostagemRepository;
import com.leodsc.blog.service.PostagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/postagem")
@CrossOrigin("*")
public class PostagemController {

  @Autowired
  private PostagemService service;

  @GetMapping
  public List<PostagemModel> getAll() {
    return service.getAll();
  }

  @PostMapping
  public ResponseEntity<PostagemModel> criarPostagem(@RequestBody PostagemModel postagem) {
    return service.criarPostagem(postagem);
  }
}
