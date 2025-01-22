import { Component } from '@angular/core';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule
} from '@po-ui/ng-components';

@Component({
  selector: 'app-card-propostas-produtos',
  standalone: true,
  imports: [PoListViewModule, PoInfoModule, PoTableModule, PoDividerModule],
  templateUrl: './card-propostas-produtos.component.html',
  styleUrl: './card-propostas-produtos.component.css'
})
export class CardPropostasProdutosComponent {
  itens = [
    { name: 'Proposta 1', dataProposta: '22/01/2025' },
    { name: 'Proposta 2', dataProposta: "22/01/2025" },
    { name: 'Proposta 3', dataProposta: "22/01/2025" },
  ]

  columsItens = [
    { property: 'produto', label: "Produto" },
    { property: 'descricao', label: "Descrição" },
    { property: 'um', label: "UM" },
    { property: 'dtNescessidade', label: "Necessidade" }
  ];


  itensCotacao = [
    {
      produto: "001234",
      descricao: "Monitor LED 27'' Full HD",
      um: "UN",
      dtNescessidade: "20/02/2025"
    },
    {
      produto: "002345",
      descricao: "Teclado Mecânico RGB",
      um: "UN",
      dtNescessidade: "30/02/2025"
    },
    {
      produto: "003456",
      descricao: "Mouse Sem Fio Logitech",
      um: "UN",
      dtNescessidade: "12/03/2025"
    },
    {
      produto: "004567",
      descricao: "Cadeira Ergonômica Executiva",
      um: "UN",
      dtNescessidade: "05/02/2025"
    },
    {
      produto: "005678",
      descricao: "Notebook Dell i7 16GB RAM",
      um: "UN",
      dtNescessidade: "23/05/2025"
    },
    {
      produto: "006789",
      descricao: "Impressora Multifuncional HP",
      um: "UN",
      dtNescessidade: "11/04/2025"
    },
    {
      produto: "007890",
      descricao: "Switch de Rede 24 Portas",
      um: "UN",
      dtNescessidade: "01/05/2025"
    }
  ];
}
