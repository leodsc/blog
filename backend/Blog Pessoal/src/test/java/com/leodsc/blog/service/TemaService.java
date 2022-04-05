package com.leodsc.blog.service;

import com.leodsc.blog.model.TemaModel;
import com.leodsc.blog.repository.TemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.http.HttpResponse;

@Service
public class TemaService {

  @Autowired
  private TemaRepository repo;

  public ResponseEntity<TemaModel> criar(TemaModel tema) {
    repo.save(tema);
    return ResponseEntity.ok().body(tema);
  }
}
