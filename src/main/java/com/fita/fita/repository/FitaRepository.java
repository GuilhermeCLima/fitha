package com.fita.fita.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fita.fita.model.CategoriaModel;
@Repository
	public interface FitaRepository extends JpaRepository<CategoriaModel, Long> {
		public List<CategoriaModel> findAllByNomeContainingIgnoreCase (String CategoriaModel);

}
