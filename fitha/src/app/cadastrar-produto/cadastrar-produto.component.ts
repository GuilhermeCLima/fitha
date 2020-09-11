import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from './../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { CategoriaModel } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listCategoria: CategoriaModel[]
  idCategoria: number

  produto: ProdutoModel = new ProdutoModel()
  listProduto: ProdutoModel[]
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private alert: AlertasService) { }

  ngOnInit() {

    this.findAllCategorias()
    this.findAllProduto()

    if (environment.admin == false) {
      this.alert.showAlertDanger("SEM PERMISSÃO!!")
      this.router.navigate(["/home"])
    }


  }

  cadastrar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria


    if (this.produto.cor == null || this.produto.descricao == null || this.produto.material == null || this.produto.nome == null ||
      this.produto.preco == null || this.produto.quantidade == null || this.produto.categoria == null || this.produto.disponibilidade == null || this.produto.produtoImagem == null) {
      this.alert.showAlertWarning("Preencha todos os campos")
    }
    else {
      this.produtoService.postProduto(this.produto).subscribe((resp: ProdutoModel) => {
        this.produto = resp
        this.produto = new ProdutoModel()
        this.findAllProduto()
        this.alert.showAlerSuccess('Produto cadastrado com sucesso!')
      })
    }
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
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
}