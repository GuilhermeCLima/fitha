import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoModel } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {


  produto: ProdutoModel = new ProdutoModel()
  listProduto: ProdutoModel[]
  idProduto: number

  contador: number = 1;

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    this.idProduto = this.route.snapshot.params['id']

    window.scroll(0, 0)
    this.findAllProduto()
    this.findByIdProduto()


  }


  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listProduto = resp
    })
  }
  findByIdProduto() {
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: ProdutoModel) => {
      this.produto = resp
    })
  }

  emiteEvento(contador: number) {
    this.contador.toFixed(2)
  }

  incrementa() {
    this.contador++;
    this.emiteEvento(this.contador);
    Math.round(this.contador * 100.0) / 100.0
  }

  decrementa() {
    if (this.contador == 1) {
      this.contador;
      this.emiteEvento(this.contador);
    } else {
      this.contador--;
      this.emiteEvento(this.contador);
    }
  }

  voltar() {
    this.router.navigate(["/produtos"])
  }
  comprado() {
    this.alert.showAlerSuccess("Produto comprado com sucesso!")
  }
}