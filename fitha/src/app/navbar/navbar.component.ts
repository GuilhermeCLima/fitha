import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ChildActivationStart } from '@angular/router';
import { UsuarioModel } from '../model/User';
import { environment } from '../../environments/environment.prod';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { style } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  carrinho: boolean = true
  menuOpen: boolean = false

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
 
  admin() {
    return environment.admin
  }
  sair() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }

}
