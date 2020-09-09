import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaModel } from '../model/Categoria';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listCategoria: CategoriaModel[]
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit() {
    this.findAllCategorias()

    //if (environment.admin == false) {
    ///  alert("SEM PERMISSÃO!!")
    //  this.router.navigate(["/home"])
    // }
  }
  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listCategoria = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }

  cadastrar() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      alert("Categoria cadastrada com sucesso!")
    })


  }
}