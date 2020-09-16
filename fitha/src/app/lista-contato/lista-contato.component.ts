import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../model/Contato';
import { ContatoService } from '../service/contato.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.css']
})
export class ListaContatoComponent implements OnInit {

  contato: ContatoModel = new ContatoModel()
  listContato: ContatoModel[]
  constructor(private contatoService: ContatoService, private router: Router, private alert: AlertasService) { }

  ngOnInit() {
    this.findAllContato()

    if (environment.admin == false) {
      this.alert.showAlertDanger("SEM PERMISSÃO!!")
      this.router.navigate(["/home"])
    }
  }
  findAllContato() {
    this.contatoService.getAllContato().subscribe((resp: ContatoModel[]) => {
      this.listContato = resp

    })
  }

}
