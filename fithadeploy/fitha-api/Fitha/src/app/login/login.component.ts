import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


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
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UsuarioLogin) => {
      this.userLogin = resp
      localStorage.setItem("token", this.userLogin.token)
      this.router.navigate(['/home'])
    })
  }
}
