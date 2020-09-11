import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { CategoriaPutComponent } from './categoria-put/categoria-put.component';
import { CategoriaDelComponent } from './categoria-del/categoria-del.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    QuemsomosComponent,
    ProdutosComponent,
    ProdutoDetalheComponent,
    ContatoComponent,
    CadastroComponent,
    LoginComponent,
    CadastrarProdutoComponent,
    CadastrarCategoriaComponent,
    PutProdutoComponent,
    DeleteProdutoComponent,
    CategoriaPutComponent,
    CategoriaDelComponent,
    PedidoComponent,
    AlertasComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }