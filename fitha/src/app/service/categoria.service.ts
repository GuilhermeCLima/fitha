import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllCategoria() {
    return this.http.get("http://localhost:8080/categoria")
  }

  getByIdCategoria(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`, this.token)
  }

}

