import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule,
  PoButtonModule, PoFieldModule,
  PoTableAction
} from '@po-ui/ng-components';

import { Produto } from '../../interfaces/produto';
import { FornecedorVencedor } from '../../interfaces/fornecedor-vencedor';

import { ActionsProposeService } from '../../services/actions-propose.service';

@Component({
  selector: 'app-card-propostas-produtos',
  standalone: true,
  imports: [CommonModule, PoListViewModule, PoInfoModule, PoTableModule,
    PoDividerModule, PoButtonModule, PoFieldModule],
  templateUrl: './card-propostas-produtos.component.html',
  styleUrls: ['./card-propostas-produtos.component.css']
})
export class CardPropostasProdutosComponent implements OnInit {

  constructor(private actionsPropose: ActionsProposeService) {

  }

  @Input() definindoVencedor = false

  produto: Produto =
    {
      produto: "123456",
      descricao: "Monitor Lcd..",
      qtdSc: 10,
      valRefSc: 15,
      um: "UN",
      dtNecessidade: "10/02/2025",
    }


  get columsFornecedores() {
    return [
      ...(this.definindoVencedor
        ? [
          {
            property: 'winnerIcon',
            label: 'Definir Vencedor',
            type: 'icon',
            sortable: false,
            icons: [
              {
                action: this.defineVencedor.bind(this),
                color: this.isFavorite.bind(this),
                icon: 'ph ph-crown',
                tooltip: 'Vencedor',
                value: 'winnerIcon',
              },
            ],
          },
        ]
        : []),
      { property: 'codigo', label: 'Código' },
      { property: 'loja', label: 'Loja' },
      { property: 'descricao', label: 'Descrição' },
      { property: 'nProposta', label: 'Nº Proposta' },
      { property: 'dataProposta', label: 'Data Proposta' },
      { property: 'validadeProposta', label: 'Validade Proposta' },
      { property: 'qtdCot', label: 'Qt. Cotada' },
      { property: 'valUniCot', label: 'Val. Uni.' },
      { property: 'valorFrete', label: 'Valor Frete' },
      { property: 'valTotItem', label: 'Val. Total Item.' },
      { property: 'tipoFrete', label: 'Tipo de Frete' },
      { property: 'condPgto', label: 'Cond. Pgto' }
    ];
  }

  actionsProduto: Array<PoTableAction> = [];

  ngOnInit(): void {
    this.actionsProduto = this.definindoVencedor
      ? this.getAcoesDefinindoVencedor()
      : this.getAcoesPadrao();
  }


  private defineVencedor(row: any) {
    row.vencedor = !row.vencedor;
  }

  private isFavorite(row: any) {
    return row?.vencedor ? 'color-08' : '';
  }

  itensFornecedores: FornecedorVencedor[] = [
    {
      winnerIcon: ['winnerIcon'],
      codigo: "001234",
      descricao: "Fornecedor 1",
      loja: "001",
      filial: "5305",
      nProposta: 1,
      dataProposta: "24/01/2025",
      validadeProposta: "01/10/2025",
      valorFrete: 0,
      tipoFrete: "CIF",
      condPgto: "50/50",
      observacao: "n/a",
      valUniCot: 100,
      valTotItem: 100,
      qtdCot: 1,
      vencedor: false
    }, {
      winnerIcon: ['winnerIcon'],
      codigo: "001234",
      descricao: "Fornecedor 2",
      loja: "001",
      filial: "5305",
      nProposta: 1,
      dataProposta: "24/01/2025",
      validadeProposta: "01/10/2025",
      valorFrete: 0,
      tipoFrete: "CIF",
      condPgto: "50/50",
      observacao: "n/a",
      valUniCot: 100,
      valTotItem: 100,
      qtdCot: 1,
      vencedor: false
    }, {
      winnerIcon: ['winnerIcon'],
      codigo: "001234",
      descricao: "Fornecedor 3",
      loja: "001",
      filial: "5305",
      nProposta: 1,
      dataProposta: "24/01/2025",
      validadeProposta: "01/10/2025",
      valorFrete: 0,
      tipoFrete: "CIF",
      condPgto: "50/50",
      observacao: "n/a",
      valUniCot: 100,
      valTotItem: 100,
      qtdCot: 1,
      vencedor: false
    }
  ];



  private getAcoesPadrao(): Array<PoTableAction> {
    return [
      {
        action: () => this.actionsPropose.aprovarNegociacao(), 
        icon: 'ph ph-check',
        label: 'Validar Proposta',
      },
      {
        action: () => this.actionsPropose.enviarPNegociacao(), 
        icon: 'ph ph-x',
        label: 'Negociar',
      },
      {
        action: () => {}, 
        icon: 'ph ph-hard-hat',
        label: 'Verificar Parecer',
      }
    ];
  }

  private getAcoesDefinindoVencedor(): Array<PoTableAction> {
    return [
      {
        action: () => this.actionsPropose.definirQuantidade(), 
        label: 'Definir Quantidade',
      },
    ];
  }




}