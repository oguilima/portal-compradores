import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { PoMenuModule } from '@po-ui/ng-components';
import { SamplePoMenuHumanResourcesService } from './sample-po-menu-human-resources.service';
import { PoMenuItem } from '@po-ui/ng-components';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PoMenuModule, PoToolbarModule, PoPageModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SamplePoMenuHumanResourcesService] // Adicione o serviço aqui
})
export class AppComponent {
  menuItemSelected: string = "";

  menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.getMenuAction('/'), icon: 'ph ph-house', shortLabel: 'Home' },
    {
      label: 'Validação Inicial',
      action: this.getMenuAction('/validacaoInicial'),
      icon: 'ph ph-check',
      shortLabel: 'Validação Inicial',
      badge: { value: 4 }
    },
    {
      label: 'Acompanhamento',
      icon: 'ph ph-shopping-cart-simple',
      shortLabel: 'Aquisições',
      subItems: [
        { label: 'Cotações', action: this.getMenuAction('/'), badge: { value: 12 } },
        { label: 'Negociações', action: this.getMenuAction('/'), badge: { value: 8 } }
      ]
    },
    {
      label: 'Avaliação de Propostas',
      action: this.getMenuAction('/'),
      icon: 'ph ph-currency-dollar',
      shortLabel: 'Avaliação de Propostas',
      badge: { value: 5 }
    }
  ];

  constructor(public samplePoMenuHumanResourcesService: SamplePoMenuHumanResourcesService,
    private router: Router
  ) {}

  getMenuAction(link: string) {
    return (menu: PoMenuItem) => this.printMenuAction(menu, link);
  }

  printMenuAction(menu: PoMenuItem, link: string) {
    this.menuItemSelected = menu.label;
    this.router.navigate([link])
  }
}
