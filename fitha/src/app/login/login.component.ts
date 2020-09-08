import { Component, OnInit, Input } from '@angular/core';
import { UsuarioLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/User';
import { environment } from '../../environments/environment.prod'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0, 200)
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UsuarioLogin) => {
      this.userLogin = resp
      localStorage.setItem("token", this.userLogin.token)
      if (resp.admin == true) {
        environment.admin = this.userLogin.admin
      }
      this.router.navigate(["/home"])
    })
  }
}
