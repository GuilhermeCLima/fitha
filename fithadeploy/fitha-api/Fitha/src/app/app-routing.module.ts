import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';

import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "quemsomos", component: QuemsomosComponent },
  { path: "produtos", component: ProdutosComponent},
  {
path: 'produto-detalhe/:id',
    component: ProdutoDetalheComponent,
    data: { title: 'Detalhe do Produto' }
  },
  { path: "contato", component: ContatoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
