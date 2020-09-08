import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/Categoria'
import { CategoriaService } from '../service/categoria.service'
import { ProdutoModel } from '../model/Produto';
import { ProdutoService } from '../service/produto.service'


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listProduto: ProdutoModel[]
  nomeProduto: string

  listCategoria: CategoriaModel[]

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllProduto()
    this.findAllCategoria()
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listProduto = resp
    })
  }
  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listCategoria = resp
    })
  }
  findCategoria(categoria: string) {
    this.produtoService.getByProdutoCategoria(categoria).subscribe((resp: ProdutoModel[]) => {
      this.listProduto = resp
    })
  }
  findByNomeProduto() {
    if (this.nomeProduto =='') {
      this.findAllProduto()
    } else {
      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: ProdutoModel[]) => {
        this.listProduto = resp
      })
    }
  }
}