import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProdutoModel } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProduto() {
    return this.http.get("http://localhost:9000/produtos")
  }
  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:9000/produtos/${id}`,this.token)
  }
  postProduto(produto: ProdutoModel) {
    return this.http.post('http://localhost:9000/produtos/cadastrar', produto, this.token)
  }
  putProduto(produto: ProdutoModel) {
    return this.http.put('http://localhost:9000/produtos', produto, this.token)
  }

}