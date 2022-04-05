package com.leodsc.blog.controller;

import com.leodsc.blog.model.TemaModel;
import com.leodsc.blog.repository.TemaRepository;
import com.leodsc.blog.service.TemaService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpHeaders;
import java.net.http.HttpResponse;
import java.util.List;

@RestController
@RequestMapping("/tema")
@CrossOrigin("*")
public class TemaController {

  @Autowired
  private TemaService service;

  @GetMapping
  public List<TemaModel> getAll() {
    return service.getAll();
  }

  @PostMapping
  public ResponseEntity<TemaModel> criarTema(@RequestHeader("Authorization") String auth, @RequestBody TemaModel tema) {
    System.out.println(auth);
    return service.criar(tema);
  }

  @PutMapping("/atualizar")
  public ResponseEntity<TemaModel> atualizarTema(@RequestBody TemaModel tema) {
    return service.atualizar(tema);
  }

  @DeleteMapping("/deletar")
  public HttpStatus deletarTema(@RequestBody TemaModel tema) {
    service.deletar(tema);
    return HttpStatus.OK;
  }
}
