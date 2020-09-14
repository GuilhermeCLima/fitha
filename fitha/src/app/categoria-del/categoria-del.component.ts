import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-categoria-del',
  templateUrl: './categoria-del.component.html',
  styleUrls: ['./categoria-del.component.css']
})
export class CategoriaDelComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    let id: number = this.route.snapshot.params["id"];
    this.findByIdCategoria(id);
    if (environment.admin == false) {
      this.alert.showAlertDanger("SEM PERMISSÃO!!")
      this.router.navigate(["/home"])
    }
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }
  btnSim() {
    this.categoriaService.deleteCategoria(this.categoria.id).subscribe(() => {
      this.router.navigate(['/cadastrar-categoria'])
      this.alert.showAlerSuccess('Categoria deletada com sucesso')
    })
  }

  bntNao() {
    this.router.navigate(['/cadastrar-categoria'])
  }

}
