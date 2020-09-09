import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriaModel } from '../model/Categoria';

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
    return this.http.get("http://172.26.0.1:9000/categoria")
  }

  getByIdCategoria(id: number) {
    return this.http.get(`http://172.26.0.1:9000/categoria/${id}`, this.token)
  }

  postCategoria(categoria: CategoriaModel) {
    return this.http.post("http://172.26.0.1:9000/categoria/cadastrar", categoria, this.token)
  }

  putCategoria(categoria: CategoriaModel) {
    return this.http.put('http://172.26.0.1:9000/categoria', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`http://172.26.0.1:9000/categoria/${id}`, this.token)
  }
}