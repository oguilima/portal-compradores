import { Component } from '@angular/core';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule,
  PoButtonModule 
} from '@po-ui/ng-components';


import { Produto } from '../../interfaces/produto';
import { InformacaoCotacao } from '../../interfaces/informacao-cotacao';

@Component({
  selector: 'app-card-cotacao',
  standalone: true,
  imports: [PoListViewModule, PoInfoModule, PoTableModule, PoDividerModule, PoButtonModule ],
  templateUrl: './card-cotacao.component.html',
  styleUrl: './card-cotacao.component.css'
})
export class CardCotacaoComponent {
  dados: InformacaoCotacao[] = [
    {
      name: 'Proposta 1',
      dataProposta: "22/01/2025",
      validadeProposta: "22/03/2025",
      valorFrete: 100,
      saving: "10%",
      tipoFrete: "CIF",
      condPgto: "50/50",
      observacao: "N/a",
      valTotal: 1500
    }
  ]

  columsItens = [
    { property: 'produto', label: "Produto" },
    { property: 'descricao', label: "Descrição" },
    { property: 'qtdSc', label: "Qtd. SC" },
    { property: 'qtdCot', label: "Qtd. Cotada" },
    { property: 'valRefSc', label: "Valor Referência SC" },
    { property: 'valUniCot', label: "Valor Un. Cotado" },
    { property: 'valFrete', label: "Valor do Frete" },
    { property: 'valTotItem', label: "Valor Total Item" },
    { property: 'dtNecessidade', label: "Necessidade" },
    { property: 'dtPrevEntrega', label: "Previsão de Entrega" },
    
  ];

  itensCotacao: Produto[] = [
    {
      produto: "001234",
      descricao: "Monitor LED 27'' Full HD",
      qtdSc: 10,
      qtdCot: 8,
      valRefSc: 1500.00,
      valUniCot: 1450.00,
      dtNecessidade: "20/02/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    },
    {
      produto: "002345",
      descricao: "Teclado Mecânico RGB",
      qtdSc: 15,
      qtdCot: 12,
      valRefSc: 500.00,
      valUniCot: 480.00,
      dtNecessidade: "30/02/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    },
    {
      produto: "003456",
      descricao: "Mouse Sem Fio Logitech",
      qtdSc: 20,
      qtdCot: 18,
      valRefSc: 200.00,
      valUniCot: 190.00,
      dtNecessidade: "12/03/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    },
    {
      produto: "004567",
      descricao: "Cadeira Ergonômica Executiva",
      qtdSc: 5,
      qtdCot: 4,
      valRefSc: 1200.00,
      valUniCot: 1150.00,
      dtNecessidade: "05/02/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    },
    {
      produto: "005678",
      descricao: "Notebook Dell i7 16GB RAM",
      qtdSc: 7,
      qtdCot: 6,
      valRefSc: 8000.00,
      valUniCot: 7800.00,
      dtNecessidade: "23/05/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    },
    {
      produto: "006789",
      descricao: "Impressora Multifuncional HP",
      qtdSc: 10,
      qtdCot: 9,
      valRefSc: 1500.00,
      valUniCot: 1450.00,
      dtNecessidade: "11/04/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    },
    {
      produto: "007890",
      descricao: "Switch de Rede 24 Portas",
      qtdSc: 12,
      qtdCot: 10,
      valRefSc: 1200.00,
      valUniCot: 1150.00,
      dtNecessidade: "01/05/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    }
  ];

}
