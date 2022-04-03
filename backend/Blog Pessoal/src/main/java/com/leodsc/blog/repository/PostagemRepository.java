package com.leodsc.blog.repository;

import com.leodsc.blog.model.PostagemModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostagemRepository extends JpaRepository<PostagemModel, Long> {
  List<PostagemModel> findAllByTituloContainingIgnoreCase(String titulo);
}
