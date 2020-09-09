import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/Categoria';
import { ProdutoModel } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listCategoria: CategoriaModel[]



  produto: ProdutoModel = new ProdutoModel()
  listProduto: ProdutoModel[]
  idCategoria: number
  idProduto: number

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.idProduto = this.route.snapshot.params['id']

    window.scroll(0, 0)
    this.findAllCategorias()
    this.findAllProduto()
    this.findByIdProduto()


  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listCategoria = resp
    })
  }
  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listProduto = resp
    })
  }
  findByIdProduto() {
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: ProdutoModel) => {
      this.produto = resp
    })
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }

}