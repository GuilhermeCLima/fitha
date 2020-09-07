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
    return this.http.get("http://localhost:8080/produtos", this.token)
  }
  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`, this.token)
  }
  postProduto(produto: ProdutoModel) {
    return this.http.post('http://localhost:8080/produtos/cadastrar', produto, this.token)
  }
  putProduto(produto: ProdutoModel) {
    return this.http.put('http://localhost:8080/produtos', produto, this.token)
  }
  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`, this.token)
  }
  getByProdutoCategoria(categoria: string) {
    return this.http.get(`http://localhost:8080/produtos/categoria/${categoria}`, this.token)
  }
  getByNomeProduto(nome: string) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}`)
  }
}