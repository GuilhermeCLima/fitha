package com.fita.fita.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fita.fita.model.ContatoModel;
import com.fita.fita.model.ProdutoModel;

@Repository
public interface ContatoRepository extends JpaRepository<ContatoModel, Long> {

	public List<ContatoModel> findAllByNomeContainingIgnoreCase(String ContatoModel);
	
	
}