import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule,
  PoButtonModule, PoFieldModule,
  PoTableAction
} from '@po-ui/ng-components';

import { Produto } from '../../interfaces/produto';
import { Alerta } from '../../interfaces/alerta';

import { UtilsService } from '../../utils/utils.service';
import { FornecedorVencedor } from '../../interfaces/fornecedor-vencedor';

@Component({
  selector: 'app-card-propostas-produtos',
  standalone: true,
  imports: [CommonModule, PoListViewModule, PoInfoModule, PoTableModule,
    PoDividerModule, PoButtonModule, PoFieldModule],
  templateUrl: './card-propostas-produtos.component.html',
  styleUrls: ['./card-propostas-produtos.component.css']
})
export class CardPropostasProdutosComponent {

  constructor(private utilsService: UtilsService) {

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
      { property: 'dataProposta', label: 'Data Proposta' },
      { property: 'validadeProposta', label: 'Validade Proposta' },
      { property: 'qtdCot', label: 'Qt. Cotada' },
      { property: 'valUniCot', label: 'Val. Uni.' },
      { property: 'valorFrete', label: 'Valor Frete' },
      { property: 'valTotItem', label: 'Val. Total Item.' },
      { property: 'tipoFrete', label: 'Tipo de Frete' },
      { property: 'condPgto', label: 'Cond. Pgto' },
      { property: 'observacao', label: 'Observação' },
    ];
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


  get actionsProduto(): Array<PoTableAction> {
    return !this.definindoVencedor
      ? [
        {
          action: this.aprovarNegociacao.bind(this),
          icon: 'ph ph-check',
          label: 'Validar Proposta'
        },
        {
          action: this.enviarPNegociacao.bind(this),
          icon: 'ph ph-x',
          label: 'Negociar'
        }
      ]
      : [
        {
          action: this.definirQuantidade.bind(this),
          label: 'Definir Quantidade'
        }
      ];
  }



  private aprovarNegociacao(): void {
    this.utilsService.showSweetAlert(
      {
        title: "Sucesso!",
        message: "A cotação foi validada!",
        icon: "success"
      })
  }

  private async enviarPNegociacao(): Promise<void> {
    const alerta: Alerta = await this.utilsService.showSweetAlert(
      {
        title: "Atenção",
        message: "Você está devolvendo para negociação esse item e o restante da cotação!",
        icon: "warning",
      })

    if (alerta.isConfirmed) {
      const mensagemEnvio: Alerta = await this.utilsService.showSweetAlert(
        {
          title: "Justificativa",
          message: "Qual a justificativa para enviar para negociação?",
          icon: "info",
          input: true
        })

      if (mensagemEnvio.isConfirmed) {
        this.utilsService.showSweetAlert(
          {
            title: "Sucesso!",
            message: "A cotação foi enviada para o fornecedor!",
            icon: "success"
          })
      }
    }
  }

  private definirQuantidade(): void {
    this.utilsService.showSweetAlert(
      {
        title: "Quantidade",
        message: "Qual a quantidade desejada desse fornecedor?",
        icon: "info",
        input: true
      })
  }
}