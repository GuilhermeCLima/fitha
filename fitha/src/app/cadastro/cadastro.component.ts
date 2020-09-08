import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/User';
import { AuthService } from "../service/auth.service"
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastro() {

    if (this.senha === this.user.senha) {
      this.authService.cadastro(this.user).subscribe((resp: UsuarioModel) => {
        this.user = resp
        this.router.navigate(['/home'])
        alert('usuário cadastrado com sucesso!')
      })
    }
    else {
      alert('suas senhas não conferem')
    }


  }
}
