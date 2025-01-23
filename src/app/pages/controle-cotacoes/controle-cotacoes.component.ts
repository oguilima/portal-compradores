import { Component } from '@angular/core';
import { CardControleCotacaoComponent } from "../../components/card-controle-cotacao/card-controle-cotacao.component";

@Component({
  selector: 'app-controle-cotacoes',
  standalone: true,
  imports: [CardControleCotacaoComponent],
  templateUrl: './controle-cotacoes.component.html',
  styleUrl: './controle-cotacoes.component.css'
})
export class ControleCotacoesComponent {

}
