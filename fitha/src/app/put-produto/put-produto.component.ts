import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../model/Produto';
import { CategoriaModel } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel()
  idProduto: number

  categoria: CategoriaModel = new CategoriaModel()
  listCategoria: CategoriaModel[]
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.idProduto = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idProduto)

    this.findAllCategoria()
  }
  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutoModel) => {
      this.produto = resp
    })
  }
  salvar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: ProdutoModel) => {
      this.produto = resp
      this.router.navigate(['/cadastrar-categoria'])
      alert('Produto alterado com sucesso!')
    }, err => {
      if (err.status == '500') {
        alert('Preencha todos os campos corretamente antes de enviar!')
      }
    })

  }
  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listCategoria = resp
    })
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }
}
