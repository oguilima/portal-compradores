import { Component, ViewChild } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import {
  PoModalModule, PoFieldModule,
  PoTableModule, PoTableAction,
  PoButtonModule, PoSearchModule,
  PoModalComponent,
  PoTabsModule, PoDividerModule,
  PoWidgetModule

} from '@po-ui/ng-components';
import { CardCotacaoComponent } from "../../components/card-cotacao/card-cotacao.component";
import { CardPropostasProdutosComponent } from '../../components/card-propostas-produtos/card-propostas-produtos.component';

@Component({
  selector: 'app-avalicao-propostas',
  standalone: true,
  imports: [PoTableModule, PoButtonModule, PoSearchModule, PoModalModule, PoFieldModule, PoTabsModule, PoDividerModule,
    PoWidgetModule, CardCotacaoComponent, CardPropostasProdutosComponent],
  templateUrl: './avalicao-propostas.component.html',
  styleUrl: './avalicao-propostas.component.css'
})
export class AvalicaoPropostasComponent {
  @ViewChild('modalAnalises') modalAnalises!: PoModalComponent;
  @ViewChild('modalPropostasFornecedores') modalPropostasFornecedores!: PoModalComponent;
  @ViewChild('modalEditCotacao') modalEditCotacao!: PoModalComponent; 

  constructor(private utilsService: UtilsService) {
  }

  columsCotacoes = [
    { property: 'nSC', label: "N° SC" },
    { property: 'filial', label: "Filial" },
    { property: 'nC', label: "N° Cotação" },
    { property: 'tipoDoc', label: "Tipo de Documento" },
    { property: 'dtValidade', label: "Data de Validade" },
    { property: 'valorF', label: "Valor Final" }
  ];

  cotacoes = [
    {
      nSC: 1001,
      filial: "São Paulo",
      nC: 5001,
      tipoDoc: "Orçamento",
      dtValidade: "25/01/2024",
      valorF: "R$ 35.000,00"
    },
    {
      nSC: 1002,
      filial: "Rio de Janeiro",
      nC: 5002,
      tipoDoc: "Pedido",
      dtValidade: "30/01/2024",
      valorF: "R$ 6.000,00"
    },
    {
      nSC: 1003,
      filial: "Belo Horizonte",
      nC: 5003,
      tipoDoc: "Nota Fiscal",
      dtValidade: "10/02/2024",
      valorF: "R$ 8.000,00"
    },
    {
      nSC: 1004,
      filial: "Curitiba",
      nC: 5004,
      tipoDoc: "Orçamento",
      dtValidade: "05/02/2024",
      valorF: "R$ 3.750,00"
    },
    {
      nSC: 1005,
      filial: "Salvador",
      nC: 5005,
      tipoDoc: "Pedido",
      dtValidade: "15/03/2024",
      valorF: "R$ 10.000,00"
    }
  ];



  columsFornecedores = [
    { property: 'codFornec', label: "Código" },
    { property: 'nameFornec', label: "Fornecedor" },
    { property: 'cgcFornec', label: "CGC" },
    {
      property: 'TipoFornec', type: 'label', labels: [
        { value: 'F', color: 'blue', label: 'Fisico', icon: "ph ph-user" },
        { value: 'J', color: ' #745678', label: 'Juridico', icon: "ph ph-building-apartment" },
        { value: 'X', color: 'rgb(186, 79, 95)', label: 'Outros', icon: 'ph ph-dots-three' }
      ]
    }
  ];

  fornecedores = [
    {
      codFornec: '12345678',
      nameFornec: 'ALFA COMÉRCIO E SERVIÇOS LTDA',
      cgcFornec: '12345678000199',
      TipoFornec: 'J'
    },
    {
      codFornec: '87654321',
      nameFornec: 'JOÃO PEREIRA DA SILVA',
      cgcFornec: '87654321023',
      TipoFornec: 'F'
    },
    {
      codFornec: '11223344',
      nameFornec: 'LUCAS FERREIRA MELO',
      cgcFornec: '11223344056',
      TipoFornec: 'F'
    },
    {
      codFornec: '44332211',
      nameFornec: 'BETA SOLUÇÕES TECNOLÓGICAS LTDA',
      cgcFornec: '44332211000188',
      TipoFornec: 'J'
    }
  ];


  actionsCotacao: Array<PoTableAction> = [
    { action: this.editCotacao.bind(this), icon: 'ph ph-pencil', label: 'Editar' },
    { action: this.detailsCotacao.bind(this), icon: 'ph ph-eye', label: 'Detalhes' },
  ]

  actionsPorFornecedor: Array<PoTableAction> = [
    { action: this.detailsPropose.bind(this), label: 'Ver Propostas' },
  ]


  private detailsCotacao() {
    this.modalAnalises.open();
  }


  private detailsPropose() {
    this.modalPropostasFornecedores.open();
  }

  confirmCotacao() {

  }

  editCotacao() {
    this.modalEditCotacao.open()
  }
}