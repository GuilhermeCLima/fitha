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
import com.fita.fita.model.CategoriaModel;
import com.fita.fita.repository.CategoriaRepository;

@RestController
@RequestMapping("/categoria")
@CrossOrigin("*")
public class CategoriaController {
	
	@Autowired
	private CategoriaRepository repository;
	
	@GetMapping
	public ResponseEntity<List<CategoriaModel>> findAllCategoria (){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CategoriaModel> findByIDCategoria (@PathVariable long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<CategoriaModel>> getByNome(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByCategoriaContainingIgnoreCase(nome));
	}
	@PostMapping("/cadastrar")
	@PreAuthorize("hasRole(ADMIN)")
	public ResponseEntity<CategoriaModel> postCategoria (@RequestBody CategoriaModel categoriaProduto){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(categoriaProduto));
	}
	@PutMapping
	public ResponseEntity<CategoriaModel> putCategoria  (@RequestBody CategoriaModel categoriaProduto){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(categoriaProduto));
	}
	@DeleteMapping("/{id}")
	public void deleteCategoria (@PathVariable long id) {
		repository.deleteById(id);
	}
	
}
