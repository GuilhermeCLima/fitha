import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from './../model/UserLogin';
import { UsuarioModel } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UsuarioLogin) {
    return this.http.post("http://localhost:9000/usuarios/logar", userLogin)
  }

  cadastro(user: UsuarioModel) {
    return this.http.post("http://localhost:9000/usuarios/cadastro", user)
  }
}
