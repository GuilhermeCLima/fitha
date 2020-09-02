import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaModel } from '../model/Categoria';
import { Router } from '@angular/router';

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
    if (this.categoria.nome == null) {
      alert("A categoria não pode estar vazia")
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
        this.categoria = resp
        this.categoria = new CategoriaModel()
        alert("Categoria cadastrada com sucesso")
      })
    }

  }
}