import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContatoModel } from '../model/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http:HttpClient) { }

  public enviarEmail(contato: ContatoModel){
    return this.http.post("http://localhost:8080/contato/contato", contato )
  }
  public getAllContato() {
    return this.http.get("http://localhost:8080/contato")
  }
}