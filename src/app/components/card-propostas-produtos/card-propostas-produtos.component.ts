import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule,
  PoButtonModule, PoFieldModule
} from '@po-ui/ng-components';
import { Proposta } from '../../interfaces/proposta';
import { ItemCotacao } from '../../interfaces/item-cotacao';

@Component({
  selector: 'app-card-propostas-produtos',
  standalone: true,
  imports: [CommonModule, PoListViewModule, PoInfoModule, PoTableModule, PoDividerModule, PoButtonModule, PoFieldModule],
  templateUrl: './card-propostas-produtos.component.html',
  styleUrls: ['./card-propostas-produtos.component.css']
})
export class CardPropostasProdutosComponent implements OnInit {
  @Input() vencedor: boolean = false;
  dados: Proposta[] = [];

  private todasPropostas: Proposta[] = [
    {
      fornecedor: 'ALFA COMÉRCIO E SERVIÇOS LTDA',
      nProposta: 'PRO-001',
      condPag: 'No 5° dia do mês subsequente',
      valorTotalFrete: 50.00,
      valorFinal: 5000.00,
      dtPrevEntrega: '21/03/2025',
      tipoFrete: 'CIF',
      vencedora: true
    },
    {
      fornecedor: 'JOÃO PEREIRA DA SILVA',
      nProposta: 'PRO-002',
      condPag: 'No 5° dia do mês subsequente',
      valorTotalFrete: 80.00,
      valorFinal: 4000.00,
      dtPrevEntrega: '10/03/2025',
      tipoFrete: 'FOB',
      vencedora: false
    },
    {
      fornecedor: 'LUCAS FERREIRA MELO',
      nProposta: 'PRO-003',
      condPag: 'No 5° dia do mês subsequente',
      valorTotalFrete: 70.00,
      valorFinal: 5250.00,
      dtPrevEntrega: '18/02/2025',
      tipoFrete: 'CIF',
      vencedora: false
    },
    {
      fornecedor: 'BETA SOLUÇÕES TECNOLÓGICAS LTDA',
      nProposta: 'PRO-004',
      condPag: 'No 5° dia do mês subsequente',
      valorTotalFrete: 40.00,
      valorFinal: 8000.00,
      dtPrevEntrega: '25/02/2025',
      tipoFrete: 'FOB',
      vencedora: true
    }
  ];

  columsItens = [
    { property: 'produto', label: "Produto" },
    { property: 'descricao', label: "Descrição" },
    { property: 'qtdSc', label: "Qtd. SC" },
    { property: 'qtdCot', label: "Qtd. Cotada" },
    { property: 'valRefSc', label: "Valor Ref. SC" },
    { property: 'valUniCot', label: "Valor Un. Cotado" },
    { property: 'valFrete', label: "Valor do Frete" },
    { property: 'valTotItem', label: "Valor Total Item" },
    { property: 'dtNescessidade', label: "Necessidade" },
    { property: 'dtPrevEntrega', label: "Previsão de Entrega" },

  ];

  itensCotacao: ItemCotacao[] = [
    {
      produto: "001234",
      descricao: "Monitor LED 27'' Full HD",
      qtdSc: 10,
      qtdCot: 8,
      valRefSc: 1500.00,
      valUniCot: 1450.00,
      dtNescessidade: "20/02/2025",
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
      dtNescessidade: "30/02/2025",
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
      dtNescessidade: "12/03/2025",
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
      dtNescessidade: "05/02/2025",
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
      dtNescessidade: "23/05/2025",
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
      dtNescessidade: "11/04/2025",
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
      dtNescessidade: "01/05/2025",
      dtPrevEntrega: "20/02/2025",
      valFrete: 0,
      valTotItem: 0
    }
  ];

  ngOnInit(): void {
    this.filtrarPropostas();
    console.log(this.vencedor)
  }

  private filtrarPropostas(): void {
    if (this.vencedor) {
      // Filtra apenas as propostas vencedoras
      this.dados = this.todasPropostas.filter(proposta => proposta.vencedora);
    } else {
      // Exibe todas as propostas
      this.dados = [...this.todasPropostas];
    }
  }
}
