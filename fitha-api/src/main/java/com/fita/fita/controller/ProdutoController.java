package com.fita.fita.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fita.fita.model.ProdutoModel;
import com.fita.fita.repository.ProdutoRepository;

@RequestMapping("/produtos")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*") 
public class ProdutoController {

	@Autowired
	public ProdutoRepository repository;

	@GetMapping
	public ResponseEntity<List<ProdutoModel>> findAllProduto() {
		return ResponseEntity.ok(repository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<ProdutoModel> findByIDProduto(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<ProdutoModel>> getByNome(@PathVariable String nome) {
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@GetMapping("/categoria/{categoria}")
	public ResponseEntity<List<ProdutoModel>> getByCategoria(@PathVariable String categoria) {
		return ResponseEntity.ok(repository.findAllProdutoModelByCategoria_categoriaNome(categoria));
	}
	

	@PostMapping("/cadastrar")
	@PreAuthorize("hasRole(ADMIN)")
	public ResponseEntity<ProdutoModel> postProduto(@RequestBody ProdutoModel nomeProduto) {

		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(nomeProduto));
	}

	@PutMapping
	public ResponseEntity<ProdutoModel> putProduto(@RequestBody ProdutoModel nomeProduto) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(nomeProduto));
	}

	@DeleteMapping("/{id}")
	public void deleteProduto(@PathVariable long id) {
		repository.deleteById(id);
	}
}
