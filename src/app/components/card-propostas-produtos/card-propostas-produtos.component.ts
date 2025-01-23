import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule,
  PoButtonModule, PoFieldModule
} from '@po-ui/ng-components';
import { Proposta } from '../../interfaces/proposta';

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
      qtdEntregueFornec: 100,
      valorUn: 50.00,
      valorT: 5000.00,
      dtPrevEntrega: '21/03/2025',
      tipoFrete: 'CIF',
      valorFrete: 300.00,
      vencedora: true
    },
    {
      fornecedor: 'JOÃO PEREIRA DA SILVA',
      nProposta: 'PRO-002',
      condPag: 'No 5° dia do mês subsequente',
      qtdEntregueFornec: 50,
      valorUn: 80.00,
      valorT: 4000.00,
      dtPrevEntrega: '10/03/2025',
      tipoFrete: 'FOB',
      valorFrete: 150.00,
      vencedora: false
    },
    {
      fornecedor: 'LUCAS FERREIRA MELO',
      nProposta: 'PRO-003',
      condPag: 'No 5° dia do mês subsequente',
      qtdEntregueFornec: 75,
      valorUn: 70.00,
      valorT: 5250.00,
      dtPrevEntrega: '18/02/2025',
      tipoFrete: 'CIF',
      valorFrete: 200.00,
      vencedora: false
    },
    {
      fornecedor: 'BETA SOLUÇÕES TECNOLÓGICAS LTDA',
      nProposta: 'PRO-004',
      condPag: 'No 5° dia do mês subsequente',
      qtdEntregueFornec: 200,
      valorUn: 40.00,
      valorT: 8000.00,
      dtPrevEntrega: '25/02/2025',
      tipoFrete: 'FOB',
      valorFrete: 500.00,
      vencedora: true
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
