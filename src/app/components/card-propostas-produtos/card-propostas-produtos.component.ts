import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoListViewModule, PoInfoModule,
  PoTableModule, PoDividerModule,
  PoButtonModule, PoFieldModule,
  PoTableAction
} from '@po-ui/ng-components';
import { Fornecedor } from '../../interfaces/fornecedor';
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-card-propostas-produtos',
  standalone: true,
  imports: [CommonModule, PoListViewModule, PoInfoModule, PoTableModule, PoDividerModule, PoButtonModule, PoFieldModule],
  templateUrl: './card-propostas-produtos.component.html',
  styleUrls: ['./card-propostas-produtos.component.css']
})
export class CardPropostasProdutosComponent {
  produto: Produto =
    {
      produto: "123456",
      descricao: "Monitor Lcd..",
      qtdSc: 10,
      valRefSc: 15,
      um: "UN",
      dtNecessidade: "10/02/2025",
    }


  columsFornecedores = [
    { property: 'codigo', label: "Código" },
    { property: 'loja', label: "Loja" },
    { property: 'descricao', label: "Descrição" },
    { property: "dataProposta", label: "Data Proposta" },
    { property: "validadeProposta", label: "Validade Proposta" },
    { property: "qtdCot", label: "Qt. Cotada" },
    { property: "valUniCot", label: "Val. Uni." },
    { property: "valorFrete", label: "Valor Frete" },
    { property: "valTotItem", label: "Val. Total Item." },
    { property: "tipoFrete", label: "Tipo de Frete" },
    { property: "condPgto", label: "Cond. Pgto" },
    { property: "observacao", label: "Observação" },
  ]

  itensFornecedores: Fornecedor[] = [
    {
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
    }, {
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
    }, {
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
    }
  ];


  actionsProduto: Array<PoTableAction> = [
    { action: this.aprovarNegociacao.bind(this), icon: 'ph ph-check', label: 'Validar Proposta' },
    { action: this.enviarPNegociacao.bind(this), icon: 'ph ph-x', label: 'Negociar' },
    
  ]

  private aprovarNegociacao(): void{

  }

  private enviarPNegociacao(): void{

  }

}
