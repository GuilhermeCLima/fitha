import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';
import { CategoriaModel } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProduto: ProdutoModel[]
  listCategoria: CategoriaModel[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
    this.findAllCategoria()
    this.findAllProduto()
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listProduto = resp.slice(20, 28)
    })
  }

  findCategoria(categoria: string) {

    this.produtoService.getByProdutoCategoria(categoria).subscribe((resp: ProdutoModel[]) => {
      this.listProduto = resp

    })
  }
  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listCategoria = resp.slice(0, 6)
    })
  }

}



