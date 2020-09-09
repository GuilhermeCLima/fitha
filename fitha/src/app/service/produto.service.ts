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
    return this.http.get("http://172.26.0.1:9000/produtos")
  }
  getByIdProduto(id: number) {
    return this.http.get(`http://172.26.0.1:9000/produtos/${id}`, this.token)
  }
  postProduto(produto: ProdutoModel) {
    return this.http.post('http://172.26.0.1:9000/produtos/cadastrar', produto, this.token)
  }
  putProduto(produto: ProdutoModel) {
    return this.http.put('http://172.26.0.1:9000/produtos', produto, this.token)
  }
  deleteProduto(id: number) {
    return this.http.delete(`http://172.26.0.1:9000/produtos/${id}`, this.token)
  }
  getByProdutoCategoria(categoria: string) {
    return this.http.get(`http://172.26.0.1:9000/produtos/categoria/${categoria}`, this.token)
  }
  getByNomeProduto(nome: string) {
    return this.http.get(`http://172.26.0.1:9000/produtos/nome/${nome}`)
  }
}