import { Component, OnInit } from '@angular/core';
import{CategoriaModel} from '../model/Categoria'
import{CategoriaService} from '../service/categoria.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  categoria:CategoriaModel = new CategoriaModel
  listCategoria: CategoriaModel[]


  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit()
   {  
     this.getAllCategorias()
  }
 
  getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp:CategoriaModel[]) => {
      this.listCategoria = resp
    })
  }

}
