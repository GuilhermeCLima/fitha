import { Component, OnInit } from '@angular/core';
import{CategoriaModel} from '../model/Categoria'
import{CategoriaService} from '../service/categoria.service'
import { ProdutoModel } from '../model/Produto';
import{ProdutoService} from '../service/produto.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  categoria:CategoriaModel = new CategoriaModel()
  listCategoria: CategoriaModel[]

  produto: ProdutoModel = new ProdutoModel()
  listProduto:ProdutoModel[]
  idCategoria:number
  idProduto:number

  constructor(
    private categoriaService: CategoriaService,
    private produtoService : ProdutoService
  ) { }

  ngOnInit()
   {  
     window.scroll(0,0)
     this.findAllCategorias()
     this.findAllProduto()
  }
 
  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp:CategoriaModel[]) => {
      this.listCategoria = resp
    })
  }
  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp:ProdutoModel[]) => {
      this.listProduto = resp
    })
  }
    findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }

}
