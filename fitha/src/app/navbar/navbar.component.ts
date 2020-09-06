import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin: boolean = false
  carrinho:boolean = true

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }
  private usuario: UsuarioModel

  ngOnInit() {
    if (localStorage.getItem("admin") == 'true') {
      this.admin = true
      this.carrinho = false
    }
  }
  sair() {
    localStorage.clear();
    location.assign('/home')
  }

}
