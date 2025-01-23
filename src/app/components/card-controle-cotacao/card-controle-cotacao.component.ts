import { Component } from '@angular/core';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule,
  PoWidgetModule
} from '@po-ui/ng-components';

import { InformacaoCotacao } from '../../interfaces/informacao-cotacao';
import { ItemCotacao } from '../../interfaces/item-cotacao';
import { Fornecedor } from '../../interfaces/fornecedor';

@Component({
  selector: 'app-card-controle-cotacao',
  standalone: true,
  imports: [PoListViewModule, PoInfoModule, PoTableModule, PoDividerModule,
    PoWidgetModule
  ],
  templateUrl: './card-controle-cotacao.component.html',
  styleUrl: './card-controle-cotacao.component.css'
})
export class CardControleCotacaoComponent {
  dados: Partial<InformacaoCotacao>[] = [
    {
      numCot: "00001",
      filial: "5305",
      name: 'Cotação 1',
      validadeProposta: "22/03/2025",
      numSc: "0001",
      dataSolic: "20/01/2025"
    }
  ]

  columsItens = [
    { property: 'produto', label: "Produto" },
    { property: 'descricao', label: "Descrição" },
    { property: 'qtdSc', label: "Qtd. SC" },
    { property: 'valRefSc', label: "Valor Referência SC" },
    { property: 'dtNescessidade', label: "Necessidade" },
  ];

  itensCotacao: Partial<ItemCotacao>[] = [
    {
      produto: "001234",
      descricao: "Monitor LED 27'' Full HD",
      qtdSc: 10,
      valRefSc: 1500.00,
      dtNescessidade: "20/02/2025"
    }, {
      produto: "002345",
      descricao: "Teclado Mecânico RGB",
      qtdSc: 15,
      valRefSc: 500.00,
      dtNescessidade: "30/02/2025"
    }, {
      produto: "003456",
      descricao: "Mouse Sem Fio Logitech",
      qtdSc: 20,
      valRefSc: 200.00,
      dtNescessidade: "12/03/2025"
    }, {
      produto: "004567",
      descricao: "Cadeira Ergonômica Executiva",
      qtdSc: 5,
      valRefSc: 1200.00,
      dtNescessidade: "05/02/2025"
    }];



  columsFornecedores = [
    { property: 'codigo', label: "Código" },
    { property: 'loja', label: "Loja" },
    { property: 'descricao', label: "Descrição" },
    { property: 'filial', label: "Filial" },
    { property: 'valTotal', label: "Valor Total Cotação" },
  ];


  itensFornecedores: Fornecedor[] = [
    {
      codigo: "001234",
      loja: "0001",
      descricao: "Fornecedor 1",
      filial: "5305",
      valTotal: 1000
    }, {
      codigo: "002345",
      loja: "0001",
      descricao: "Fornecedor 2",
      filial: "5305",
      valTotal: 1000
    }];
}
