import { Component } from '@angular/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoDividerModule } from '@po-ui/ng-components';


@Component({
    selector: 'app-itens-compras',
    imports: [PoFieldModule, PoDividerModule],
    templateUrl: './itens-compras.component.html',
    styleUrl: './itens-compras.component.css'
})
export class ItensComprasComponent {

}
