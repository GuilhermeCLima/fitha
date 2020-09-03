import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-put',
  templateUrl: './categoria-put.component.html',
  styleUrls: ['./categoria-put.component.css']
})
export class CategoriaPutComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0);
    let id: number = this.route.snapshot.params["id"];
    this.findByIdCategoria(id);
  }

  findByIdCategoria(id:number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }

  salvar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: CategoriaModel)=>{
      this.categoria = resp
      this.router.navigate(['/cadastrar-categoria'])
      alert ("Categoria modificada com sucesso")
    })
  }

}
