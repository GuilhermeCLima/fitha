import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/Categoria'
import { CategoriaService } from '../service/categoria.service'
import { ProdutoModel } from '../model/Produto';
import { ProdutoService } from '../service/produto.service'
import { ActivatedRoute } from '@angular/router';


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
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllProduto()
    this.findAllCategoria()
    let nomeCategoria = this.route.snapshot.params['categoria']
    this.findCategoria(nomeCategoria)
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
    if (this.nomeProduto === '') {
      this.findAllProduto()
    } else {
      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: ProdutoModel[]) => {
        this.listProduto = resp
      })
    }
  }
}