package com.fita.fita.service;

import java.nio.charset.Charset;
import java.util.Optional;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.fita.fita.model.UsuarioLogin;
import com.fita.fita.model.UsuarioModel;
import com.fita.fita.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repository;
	
	

	public Optional<UsuarioModel> CadastrarUsuario(UsuarioModel usuario) {
		
		Optional<UsuarioModel> userIsPresent = repository.findByEmail(usuario.getEmail());
		Optional<UsuarioModel> userIsPresent1 = repository.findByCpf(usuario.getCpf());
		
		if(!userIsPresent.isPresent()&& !userIsPresent1.isPresent()) {		
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
			String senhaEncoder = encoder.encode(usuario.getSenha());
			usuario.setSenha(senhaEncoder);
			
			Optional<UsuarioModel> user = Optional.of(repository.save(usuario));
			
			return user;
		
		}
		
		return null;
	}

	public Optional<UsuarioLogin> Logar(Optional<UsuarioLogin> user) {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<UsuarioModel> usuario = repository.findByEmail(user.get().getEmail());

		if (usuario.isPresent()) {
			if (encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {

				String auth = user.get().getEmail() + ":" + user.get().getSenha();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodedAuth);

				user.get().setToken(authHeader);		
				user.get().setAdmin(usuario.get().isAdmin());
				user.get().setNome(usuario.get().getNome());

				return user;

			}
		}
		return null;
	}

}

