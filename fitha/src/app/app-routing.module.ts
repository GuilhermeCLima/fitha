


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { componentFactoryName } from '@angular/compiler';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { CategoriaDelComponent } from './categoria-del/categoria-del.component';
import { CategoriaPutComponent } from './categoria-put/categoria-put.component';
import { PedidoComponent } from './pedido/pedido.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "quemsomos", component: QuemsomosComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "produtos/:categoria", component: ProdutosComponent },
  { path: "produto-detalhe/:id", component: ProdutoDetalheComponent },
  { path: "contato", component: ContatoComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "login", component: LoginComponent },
  { path: "cadastrar-produto", component: CadastrarProdutoComponent },
  { path: "cadastrar-categoria", component: CadastrarCategoriaComponent },
  { path: "editar-produto/:id", component: PutProdutoComponent },
  { path: "delete-produto/:id", component: DeleteProdutoComponent },
  { path: "deletar-categoria/:id", component: CategoriaDelComponent },
  { path: "editar-categoria/:id", component: CategoriaPutComponent },
  { path: "carrinho", component: PedidoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }