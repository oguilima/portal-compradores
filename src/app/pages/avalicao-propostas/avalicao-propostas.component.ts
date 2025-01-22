import { Component, ViewChild } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import {
  PoModalModule, PoFieldModule,
  PoTableModule, PoTableAction,
  PoButtonModule, PoSearchModule,
  PoModalAction, PoModalComponent,
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
  @ViewChild('modalPropostasProdutos') modalPropostasProdutos!: PoModalComponent;
  @ViewChild('modalCotacoes') modalCotacoes!: PoModalComponent;
  @ViewChild('modalEditCotacao') modalEditCotacao!: PoModalComponent;

  
  constructor(private utilsService: UtilsService) {
  }

  //Visao Fornecedor
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

  actions: Array<PoTableAction> = [
    { action: this.details.bind(this), label: 'Detalhes' },
  ]

  actionsCotacao: Array<PoTableAction> = [
    { action: this.editCotacao.bind(this), icon: 'ph ph-pencil', label: 'Editar' },
    { action: this.detailsCotacao.bind(this), icon: 'ph ph-eye', label: 'Detalhes' },
  ]

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

  columsItens = [
    { property: 'produto', label: "Produto" },
    { property: 'descricao', label: "Descrição" },
    { property: 'um', label: "UM" },
    { property: 'dtNescessidade', label: "Necessidade" }
  ];

  itens = [
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

  columsPropostas = [
    { property: 'quantidadeCotada', label: "Quantidade Cotada" },
    { property: 'valorRef', label: "Valor Ref SC" },
    { property: 'valorUn', label: "Valor Un Cotada" },
    { property: 'valorT', label: "Valor Total" },
    { property: 'dtPrevista', label: "Previsão de Entrega" },
    { property: 'valorF', label: "Valor Frete" },
    { property: 'saving', label: "Saving" },
    { property: 'condPag', label: "Condição de pagamento" },
    { property: 'obsFornec', label: "Observação do Fornec." }
  ];

  propostas = [
    {
      quantidadeCotada: 10,
      valorRef: "R$ 1.200,00",
      valorUn: "R$ 1.150,00",
      valorT: "R$ 11.500,00",
      dtPrevista: "25/02/2025",
      valorF: "R$ 150,00",
      saving: "4.17%",
      condPag: "30/60/90 dias",
      obsFornec: "Prazo de entrega conforme especificação."
    },
    {
      quantidadeCotada: 15,
      valorRef: "R$ 500,00",
      valorUn: "R$ 480,00",
      valorT: "R$ 7.200,00",
      dtPrevista: "05/03/2025",
      valorF: "R$ 120,00",
      saving: "3.85%",
      condPag: "À vista com 5% de desconto",
      obsFornec: "Desconto aplicado para pagamento antecipado."
    },
    {
      quantidadeCotada: 20,
      valorRef: "R$ 200,00",
      valorUn: "R$ 195,00",
      valorT: "R$ 3.900,00",
      dtPrevista: "15/03/2025",
      valorF: "R$ 80,00",
      saving: "2.50%",
      condPag: "Parcelado em 3x sem juros",
      obsFornec: "Entrega sujeita à disponibilidade de estoque."
    },
    {
      quantidadeCotada: 8,
      valorRef: "R$ 2.000,00",
      valorUn: "R$ 1.950,00",
      valorT: "R$ 15.600,00",
      dtPrevista: "20/02/2025",
      valorF: "R$ 200,00",
      saving: "2.50%",
      condPag: "45/60 dias",
      obsFornec: "Embalagem reforçada para transporte seguro."
    },
    {
      quantidadeCotada: 5,
      valorRef: "R$ 5.000,00",
      valorUn: "R$ 4.800,00",
      valorT: "R$ 24.000,00",
      dtPrevista: "30/05/2025",
      valorF: "R$ 300,00",
      saving: "4.00%",
      condPag: "Financiado em 6x",
      obsFornec: "Inclui garantia estendida de 1 ano."
    },
    {
      quantidadeCotada: 3,
      valorRef: "R$ 2.500,00",
      valorUn: "R$ 2.450,00",
      valorT: "R$ 7.350,00",
      dtPrevista: "15/04/2025",
      valorF: "R$ 100,00",
      saving: "2.00%",
      condPag: "À vista",
      obsFornec: "Prazo de entrega reduzido para 10 dias úteis."
    },
    {
      quantidadeCotada: 2,
      valorRef: "R$ 2.200,00",
      valorUn: "R$ 2.150,00",
      valorT: "R$ 4.300,00",
      dtPrevista: "10/05/2025",
      valorF: "R$ 150,00",
      saving: "2.27%",
      condPag: "30 dias após entrega",
      obsFornec: "Inclui suporte técnico gratuito por 6 meses."
    }
  ];

  //Visao Produto
  columsProdutos = [
    { property: 'codProduto', label: "Código" },
    { property: 'nameProduto', label: "Produto" },
    { property: 'unMedida', label: "Unid Medida" },
    { property: 'grupo', label: "Grupo" }
  ]

  produtos = [
    {
      codProduto: '00000003',
      nameProduto: 'AR CONDICIONADO DE JANELA',
      unMedida: 'UN',
      grupo: '3000'
    },
    {
      codProduto: '00000007',
      nameProduto: 'MESA DE ESCRITÓRIO',
      unMedida: 'UN',
      grupo: '5000'

    },
    {
      codProduto: '00000012',
      nameProduto: 'CADEIRA GIRATÓRIA',
      unMedida: 'UN',
      grupo: '7000'
    },
    {
      codProduto: '00000018',
      nameProduto: 'MONITOR LED 24',
      unMedida: 'UN',
      grupo: '9000'
    }
  ]

  columsItensFornecedores = [
    { property: 'codFornec', label: "Código" },
    { property: 'nameFornec', label: "Fornecedor" },
    { property: 'proposta', label: "Nº Proposta" },
    { property: 'qntEntregue', label: "Qtd. entregue" },
    { property: 'valorUnit', label: "Valor unit." },
    { property: 'valorTotal', label: "Valor total" },
    { property: 'dataPrevEntrega', label: "Data prev. entrega" },
    { property: 'tipoFrete', label: "Tipo frete" },
    { property: 'valorFrete', label: "Valor frete" }
  ]

  itensFornecedores = [
    {
      codFornec: '04046917',
      nameFornec: 'TTG EQUIPAMENTOS COM. E SERVICOS LTTTG COMERCIO E SERVICOS',
      proposta: '001',
      qntEntregue: 100,
      valorUnit: 'R$ 500,00',
      valorTotal: 'R$ 50.000,00',
      dataPrevEntrega: '20/02/2024',
      tipoFrete: 'CIF',
      valorFrete: 'R$ 1.200,00'
    },
    {
      codFornec: '00138376',
      nameFornec: 'WELLINGTON MACIEL COUTO',
      proposta: '002',
      qntEntregue: 50,
      valorUnit: 'R$ 450,00',
      valorTotal: 'R$ 22.500,00',
      dataPrevEntrega: '22/02/2024',
      tipoFrete: 'FOB',
      valorFrete: 'R$ 800,00'
    },
    {
      codFornec: '05378935',
      nameFornec: 'ROSANA MARIA NOVAES FARACO SOBRADO',
      proposta: '003',
      qntEntregue: 75,
      valorUnit: 'R$ 480,00',
      valorTotal: 'R$ 36.000,00',
      dataPrevEntrega: '25/02/2024',
      tipoFrete: 'CIF',
      valorFrete: 'R$ 1.000,00'
    },
    {
      codFornec: '01215897',
      nameFornec: 'IDEALINE TECNOLOGIA E SEGURANCA LTDIDEALINE TECNOLOGIA E SEG',
      proposta: '004',
      qntEntregue: 200,
      valorUnit: 'R$ 400,00',
      valorTotal: 'R$ 80.000,00',
      dataPrevEntrega: '28/02/2024',
      tipoFrete: 'FOB',
      valorFrete: 'R$ 1.500,00'
    }
  ];

  //Vencedores
  columsItensPropVenc = [
    {
      property: 'icon', label: "Vencedora", type: 'icon', icons: [
        {
          icon: 'ph-fill ph-star',
          color: 'color-08',
          tooltip: 'Proposta Vencedora',
          value: 'winner'
        }
      ]
    },
    { property: 'codFornec', label: "Código" },
    { property: 'nameFornec', label: "Fornecedor" },
    { property: 'proposta', label: "Nº Proposta" },
    { property: 'qntEntregue', label: "Qtd. entregue" },
    { property: 'valorUnit', label: "Valor unit." },
    { property: 'valorTotal', label: "Valor total" },
    { property: 'dataPrevEntrega', label: "Data prev. entrega" },
    { property: 'tipoFrete', label: "Tipo frete" },
    { property: 'valorFrete', label: "Valor frete" },
    { property: 'saving', label: "Saving" },
  ]

  itensPropVenc = [
    {
      icon: 'winner',
      codFornec: '04046917',
      nameFornec: 'TTG EQUIPAMENTOS COM. E SERVICOS LTTTG COMERCIO E SERVICOS',
      proposta: '001',
      qntEntregue: 100,
      valorUnit: 'R$ 500,00',
      valorTotal: 'R$ 50.000,00',
      dataPrevEntrega: '20/02/2024',
      tipoFrete: 'CIF',
      valorFrete: 'R$ 1.200,00',
      saving: '8.11%'
    },
    {
      icon: 'winner',
      codFornec: '00138376',
      nameFornec: 'WELLINGTON MACIEL COUTO',
      proposta: '002',
      qntEntregue: 50,
      valorUnit: 'R$ 450,00',
      valorTotal: 'R$ 22.500,00',
      dataPrevEntrega: '22/02/2024',
      tipoFrete: 'FOB',
      valorFrete: 'R$ 800,00',
      saving: '7.41%'
    },
    {
      icon: 'winner',
      codFornec: '05378935',
      nameFornec: 'ROSANA MARIA NOVAES FARACO SOBRADO',
      proposta: '003',
      qntEntregue: 75,
      valorUnit: 'R$ 480,00',
      valorTotal: 'R$ 36.000,00',
      dataPrevEntrega: '25/02/2024',
      tipoFrete: 'CIF',
      valorFrete: 'R$ 1.000,00',
      saving: '7.50%'
    },
    {
      icon: 'winner',
      codFornec: '01215897',
      nameFornec: 'IDEALINE TECNOLOGIA E SEGURANCA LTDIDEALINE TECNOLOGIA E SEG',
      proposta: '004',
      qntEntregue: 200,
      valorUnit: 'R$ 400,00',
      valorTotal: 'R$ 80.000,00',
      dataPrevEntrega: '28/02/2024',
      tipoFrete: 'FOB',
      valorFrete: 'R$ 1.500,00',
      saving: '7.32%'
    }
  ];




  //Parecer
  columsParecer = [
    { property: 'nSolicitacao', label: "N° Solic" },
    { property: 'nParecer', label: "N° Parecer" },
    { property: 'dataParecer', label: "Data" },
    { property: 'nSolicitacaoCompra', label: "N° Solic Compra" },
    { property: 'justificativa', label: "Justificativa" },
    { property: 'aprovador', label: "Aprovador" },
    {
      property: 'status', type: 'label', labels: [
        { value: 'aprovado', color: 'rgb(65, 214, 85)', label: 'Aprovado', icon: "ph ph-check" },
        { value: 'pendente', color: 'rgb(253, 129, 28)', label: 'Pendente', icon: "ph ph-timer" },
        { value: 'rejeitado', color: 'rgb(240, 56, 56)', label: 'Rejeitado', icon: 'ph ph-x' }
      ]
    }
  ]

  itensParecer = [
    {
      nSolicitacao: 1001,
      nParecer: 2001,
      dataParecer: "15/01/2024",
      nSolicitacaoCompra: 3001,
      justificativa: "Aquisição de materiais de escritório.",
      aprovador: "Carlos Pereira",
      status: "aprovado"
    },
    {
      nSolicitacao: 1002,
      nParecer: 2002,
      dataParecer: "16/01/2024",
      nSolicitacaoCompra: 3002,
      justificativa: "Compra de equipamentos de informática.",
      aprovador: "Maria Souza",
      status: "pendente"
    },
    {
      nSolicitacao: 1003,
      nParecer: 2003,
      dataParecer: "17/01/2024",
      nSolicitacaoCompra: 3003,
      justificativa: "Reposição de estoque de suprimentos médicos.",
      aprovador: "João Santos",
      status: "rejeitado"
    },
    {
      nSolicitacao: 1004,
      nParecer: 2004,
      dataParecer: "18/01/2024",
      nSolicitacaoCompra: 3004,
      justificativa: "Aquisição de cadeiras para o escritório.",
      aprovador: "Ana Lima",
      status: "aprovado"
    },
    {
      nSolicitacao: 1005,
      nParecer: 2005,
      dataParecer: "19/01/2024",
      nSolicitacaoCompra: 3005,
      justificativa: "Contratação de serviços de manutenção predial.",
      aprovador: "Pedro Henrique",
      status: "pendente"
    }
  ];

  //Anexos
  columsAnexos = [
    {
      property: 'anexo',
      label: 'Download',
      type: 'icon',
      sortable: false,
      icons: [
        {
          icon: 'ph ph-download',
          tooltip: 'Downloado',
          value: 'download'
        }
      ]
    },
    { property: 'doc', label: "Documento" }
  ];

  itensAnexos = [
    {
      doc: 'Anexo 1',
      anexo: ['download']
    },
    {
      doc: 'Anexo 2',
      anexo: ['download']
    },
    {
      doc: 'Anexo 3',
      anexo: ['download']
    }
  ]




  details(){

  }

  confirmCotacao(){

  }

  editCotacao() {
    this.modalEditCotacao.open()
  }

  detailsCotacao() {
    this.modalCotacoes.open()
  }

}