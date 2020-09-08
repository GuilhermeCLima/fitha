import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/User';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  carrinho: boolean = true

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }
  private usuario: UsuarioModel

  ngOnInit() {
  }
  admin() {
    return environment.admin
  }
  sair() {
    localStorage.clear();
    location.assign('/home')
  }

}
