package com.fita.fita.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fita.fita.email.EnviaEmailTLS;
import com.fita.fita.email.Mensagem;

@RequestMapping("/contato")
@RestController
@CrossOrigin("*")
public class EmailController {
	
	@PostMapping("/email")
	public ResponseEntity<Mensagem> enviaEmail(@RequestBody Mensagem msg){
		if (EnviaEmailTLS.sendEmail(msg)) {
			return ResponseEntity.ok(msg);
		}
		return ResponseEntity.badRequest().build();
	}
}