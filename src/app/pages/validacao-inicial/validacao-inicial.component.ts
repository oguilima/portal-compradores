import { Component, ViewChild  } from '@angular/core';
import { ItensComprasComponent } from "../../components/itens-compras/itens-compras.component";
import { UtilsService } from '../../utils/utils.service';
import {
  PoModalModule, PoFieldModule,
  PoTableModule, PoTableAction,
  PoButtonModule, PoSearchModule,
  PoModalAction , PoModalComponent,
  PoMultiselectOption 
} from '@po-ui/ng-components';




@Component({
  selector: 'app-validacao-inicial',
  standalone: true,
  imports: [PoTableModule, PoButtonModule, PoSearchModule, ItensComprasComponent, PoModalModule,
    PoFieldModule
  ],
  templateUrl: './validacao-inicial.component.html',
  styleUrl: './validacao-inicial.component.css'
})
export class ValidacaoInicialComponent {
  @ViewChild('modalAprovacao') modalAprovacao!: PoModalComponent;


  constructor(private utilsService: UtilsService) {

  }

  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];

  columns = [
    { property: 'nSolic', type: 'number', label: "Nº Solic" },
    { property: 'solicitante', label: "Solicitante" },
    { property: 'dataSolic', label: "Data Solicitação" },
    { property: 'codFilial', label: "Cod. Filial" },
    { property: 'descFilial', label: "Filial" },
    { property: 'dataEmissao', label: "Nº Solic" },
    { property: 'nSolicERP', type: 'number', label: "Nº Solicitação ERP" },
    { property: 'nCotERP', type: 'number', label: "Nº Cotação ERP" },
    { property: 'justificativa', label: "Justificativa" },
    {
      property: 'etapa',
      type: 'label',
      labels: [
        { value: 'validGestor', color: 'blue', label: 'Validação do Gestor', icon: "ph ph-user-check" },
        { value: 'validOrc', color: ' #745678', label: 'Validação Orçamentária', icon: "ph ph-money-wavy" },
        { value: 'validCompr', color: 'rgb(186, 79, 95)', label: 'Validação do Comprador', icon: 'ph ph-shopping-cart' }
      ]
    },
    {
      property: 'status',
      type: 'label',
      labels: [
        { value: 'andamento', color: 'rgb(190, 199, 58)', label: 'Em Andamento', icon: 'ph ph-minus' },
        { value: 'pronto', color: 'green', label: 'Pronto p/ Validação', icon: 'ph ph-check' }
      ]
    }
  ]

  itens = [
    {
      status: 'andamento',
      etapa: 'validGestor',
      nSolic: 100,
      solicitante: 'João Silva',
      dataSolic: '01/10/2024',
      codFilial: 'F01',
      descFilial: 'Matriz',
      dataEmissao: '02/10/2024',
      nSolicERP: 2001,
      nCotERP: 3001,
      justificativa: 'Pedido urgente'
    },
    {
      status: 'pronto',
      etapa: 'validCompr',
      nSolic: 101,
      solicitante: 'Maria Santos',
      dataSolic: '03/10/2024',
      codFilial: 'F02',
      descFilial: 'Filial Norte',
      dataEmissao: '04/10/2024',
      nSolicERP: 2002,
      nCotERP: 3002,
      justificativa: 'Reposição de estoque'
    },
    {
      status: 'pronto',
      etapa: 'validCompr',
      nSolic: 102,
      solicitante: 'Carlos Pereira',
      dataSolic: '05/10/2024',
      codFilial: 'F03',
      descFilial: 'Filial Sul',
      dataEmissao: '06/10/2024',
      nSolicERP: 2003,
      nCotERP: 3003,
      justificativa: 'Nova demanda'
    },
    {
      status: 'andamento',
      etapa: 'validOrc',
      nSolic: 103,
      solicitante: 'Ana Lima',
      dataSolic: '07/10/2024',
      codFilial: 'F04',
      descFilial: 'Filial Leste',
      dataEmissao: '08/10/2024',
      nSolicERP: 2004,
      nCotERP: 3004,
      justificativa: 'Expansão de vendas'
    }
  ]

  actions: Array<PoTableAction> = [
    { action: this.aprovar.bind(this), icon: 'ph ph-check', label: 'Aprovar' },
    { action: this.reprovar.bind(this), icon: 'po-icon ph ph-minus', label: 'Reprovar' }
  ]

  aprovar() {
    this.modalAprovacao.open();
  }

  reprovar() {

  }

  verifyItens(modal: any){
    modal.open()
    //this.utilsService.showSweetAlert({ title: "Ops!", icon: "error", message: "Não é possível centralizar solicitações que ainda não foram aprovadas previamente.", reload: false });
  }
  

  confirm: PoModalAction = {
    action: () => {
      //this.proccessOrder();
      this.utilsService.showSweetAlert({ title: "Sucesso!", icon: "success", message: "As solicitações foram centralizadas", reload: false });
    },
    label: 'Centralizar'
  };

  close: PoModalAction = {
    action: () => {
      //this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  confirmAprovacao: PoModalAction = {
    action: () => {
      //this.proccessOrder();
      this.utilsService.showSweetAlert({ title: "Sucesso!", icon: "success", message: "A solicitação foi aprovada.", reload: false });
    },
    label: 'Aprovar'
  };

}