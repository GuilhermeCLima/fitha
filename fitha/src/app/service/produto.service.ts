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
    return this.http.get(`http://localhost:9000/produtos/${id}`)
  }
  postProduto(produtos: ProdutoModel) {
    return this.http.post('http://localhost:9000/produtos/cadastrar', produtos, this.token)
  }
 
}