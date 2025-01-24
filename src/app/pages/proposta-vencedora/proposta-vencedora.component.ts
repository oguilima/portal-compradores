import { Component } from '@angular/core';
import { AvalicaoPropostasComponent } from "../avalicao-propostas/avalicao-propostas.component";

@Component({
  selector: 'app-proposta-vencedora',
  standalone: true,
  imports: [AvalicaoPropostasComponent],
  templateUrl: './proposta-vencedora.component.html',
  styleUrl: './proposta-vencedora.component.css'
})
export class PropostaVencedoraComponent {

}
