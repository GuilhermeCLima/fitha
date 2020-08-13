package com.fita.fita.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fita.fita.model.ProdutoModel;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoModel, Long> {

	public List<ProdutoModel> findAllByNomeContainingIgnoreCase(String ProdutoModel);

}
