import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { PoMenuModule } from '@po-ui/ng-components';
import { MenuResourcesService } from './services/menu-resources.service';
import { PoMenuItem } from '@po-ui/ng-components';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
    selector: 'app-root',
    imports: [PoMenuModule, PoToolbarModule, PoPageModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MenuResourcesService]
})
export class AppComponent {
  menuItemSelected: string = "";

  menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.getMenuAction('/'), icon: 'an an-house', shortLabel: 'Home' },
    {
      label: 'Acompanhamento',
      icon: 'an an-shopping-cart-simple',
      shortLabel: 'Acompanhamento',
      subItems: [
        { label: 'Cotações', action: this.getMenuAction('/cotacoes'), badge: { value: 12 } },
        { label: 'Negociações', action: this.getMenuAction('/'), badge: { value: 8 } }
      ]
    }, {
      label: 'Validação Inicial',
      action: this.getMenuAction('/validacaoInicial'),
      icon: 'an an-check',
      shortLabel: 'Validação Inicial',
      badge: { value: 4 }
    }, {
      label: 'Controle de Cotações',
      action: this.getMenuAction('/controleCotacao'),
      icon: 'an an-flag',
      shortLabel: 'Controle de Cotaçõe',
      badge: { value: 5 }
    }, /*{
      label: 'Parecer Técnico',
      action: this.getMenuAction('/parecerTecnico'),
      icon: 'an an-hard-hat',
      shortLabel: 'Parecer Técnico',
      badge: { value: 2 }
    },*/ {
      label: 'Avaliação de Propostas',
      action: this.getMenuAction('/avaliacaoPropostas'),
      icon: 'an an-currency-dollar',
      shortLabel: 'Avaliação de Propostas',
      badge: { value: 5 }
    }, {
      label: 'Definir Vencedor Cotação',
      action: this.getMenuAction('/propostaVencedora'),
      icon: 'an an-crown',
      shortLabel: 'Definir Vencedor Cotação',
      badge: { value: 6 }
    }
  ];

  constructor(public menuResourcesService: MenuResourcesService,
    private router: Router
  ) { }

  getMenuAction(link: string) {
    return (menu: PoMenuItem) => this.printMenuAction(menu, link);
  }

  printMenuAction(menu: PoMenuItem, link: string) {
    this.menuItemSelected = menu.label;
    this.router.navigate([link])
  }
}
