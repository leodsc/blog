package com.leodsc.blog.repository;

import com.leodsc.blog.model.TemaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemaRepository extends JpaRepository<TemaModel, Long> {
  public List<TemaModel> findAllByDescricaoContainingIgnoreCase(String descricao);
}
