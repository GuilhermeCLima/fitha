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

  nome: string;
  telefone: string;
  email: string;
  senha: string;
  confirmaSenha: string;
  cep: string;
  bairro: string;
  complemento: string;
  cpf: string;
  usuario: string;

  msgnome: string;
  msgTelefone: string;
  msgEmail: string;
  msgSenha: string;
  msgConfirmaSenha: string;
  msgusuario: string;

  user: UsuarioModel = new UsuarioModel()


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
    this.msgnome = this.verificaNome(this.nome);
    this.msgusuario = this.verificaUsuario(this.usuario);
    this.msgEmail = this.verificaEmail();
    this.msgTelefone = this.verificaTelefone(this.telefone);
    this.msgSenha = this.verificaSenha(this.senha);
    this.verificaConfirmaSenha();

    if (this.msgnome == "" &&
      this.msgEmail == "" &&
      this.msgTelefone == "" &&
      this.msgSenha == "Senha Forte" &&
      this.msgConfirmaSenha == "") {

      var cliente: UsuarioModel;
      cliente = new UsuarioModel();
      cliente.id = null;
      cliente.nome = this.nome;
      cliente.email = this.email;
      cliente.telefone = this.telefone;
      cliente.senha = this.senha;
      cliente.cep = this.cep;
      cliente.bairro = this.bairro;
      cliente.complemento = this.complemento;
      cliente.cpf = this.cpf;
      cliente.usuario = this.usuario;


      this.authService.cadastro(cliente).subscribe(
        res => {
          alert("Cadastro realizado com sucesso!!!")
          this.nome = "";
          this.email = "";
          this.telefone = "";
          this.senha = "";
          this.confirmaSenha = "";
          this.cep = "";
          this.usuario = "";
          this.complemento = "";
          this.bairro = "";
          this.cpf = "";

          this.msgnome = "";
          this.msgEmail = "";
          this.msgTelefone = "";
          this.msgSenha = "";
          this.msgConfirmaSenha = "";
        },
        err => {
          alert("Erro ao realizar o cadastro");
        }
      )
    } else {
      alert("Por favor, preencha os campos destacados")
      this.verificanumero();
    }
  }

  public verificaNome(nome: string): string {
    var filtro: any = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if (nome != null || nome == "") { // Verifica se nome é nulo
      if (nome.length >= 3) {

        if (!filtro.test(nome)) {
          return "Não pode haver números";
        } else {
          return "";
        }
      } else {
        return "Digite pelo menos 3 letras";
      }
    } else {
      return "Não pode ser vazio";
    }
  }
  public verificaUsuario(nome: string): string {
    var filtro: any = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if (nome != null || nome == "") { // Verifica se nome é nulo
      if (nome.length >= 3) {

        if (!filtro.test(nome)) {
          return "Não pode haver números";
        } else {
          return "";
        }
      } else {
        return "Digite pelo menos 3 letras";
      }
    } else {
      return "Não pode ser vazio";
    }
  }
  public verificaEmail() {
    if (this.email != null) {
      if (this.email.indexOf("@") == -1 && this.email.indexOf(".com") == -1) {
        return "Digite um email válido";
      }
    } else {
      return "Digite seu email";
    }
    return "";
  }
  public verificaTelefone(tel: string): string {
    if (tel != null) {
      if (tel.length < 14) {
        return "Complete o número";
      } else {
        for (var i = 0; i < this.telefone.length; i++) {
        }
      }
    } else {
      return "Digite seu número";
    }
    return "";
  }
  public formataTelefone(event) {
    if (this.telefone == null || this.telefone.length == 0 || this.telefone == " ") {
      this.telefone = "("
    } else if (this.telefone.length == 3) {
      this.telefone += ") ";
    } else if (this.telefone.length == 10) {
      this.telefone += "-";
    } else {
      this.verificanumero();
    }
  }


  public verificanumero() {
    if (this.telefone != null) {
      var uc: string = this.telefone.charAt(this.telefone.length - 1);
      if (this.telefone.length != 1 && this.telefone != "(") {
        if (uc != "0" && uc != "1" && uc != "2" && uc != "3" && uc != "4"
          && uc != "5" && uc != "6" && uc != "7" && uc != "8" && uc != "9") {
          this.telefone = this.telefone.substring(0, this.telefone.length - 1);
        }
      }
    }
  }
  public vs() {
    this.msgSenha = this.verificaSenha(this.senha);
  }
  public verificaSenha(senha: string): string {

    if (this.senha != null || this.senha == "") {
      if (this.senha.length >= 10) {
        if (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 ||
          this.senha.indexOf("%") != -1 || this.senha.indexOf("&") != -1) {
          return "Senha Forte";
        } else {
          return "Senha Fraca";
        }
      } else {
        return "Senha muito curta"
      }
    } else {
      return "Digite uma senha"
    }
  }
  public verificaConfirmaSenha() {
    if (this.confirmaSenha != null || this.confirmaSenha == "") {

      if (this.senha != this.confirmaSenha) {
        this.msgConfirmaSenha = "Senhas não conferem";
      } else {
        this.msgConfirmaSenha = "";
      }
    } else {
      this.msgConfirmaSenha = "Senhas não conferem";
    }
  }
}