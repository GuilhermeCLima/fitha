import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProduto() {
    return this.http.get("http://localhost:8080/produtos",)
  }
  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`, this.token)
  }
}
