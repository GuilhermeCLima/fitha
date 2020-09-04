import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }
  private usuario: UsuarioModel

  ngOnInit(): void {
  }
  sair() {
    this.router.navigate(['/home'])
    localStorage.clear();
  }
}
