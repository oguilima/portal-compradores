import { Injectable } from '@angular/core';
import { UtilsService } from '../utils/utils.service'
import { Alerta } from '../interfaces/alerta';

@Injectable({
  providedIn: 'root'
})
export class ActionsProposeService {

  constructor(private utilsService: UtilsService) {

  }

  aprovarNegociacao(): void {
    console.log('aprovar negociacao')

    this.utilsService.showSweetAlert(
      {
        title: "Sucesso!",
        message: "A cotação foi validada!",
        icon: "success"
      })
  }

  async enviarPNegociacao(): Promise<void> {
    console.log('enviar para negociacao')

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


  definirQuantidade(): void {
    this.utilsService.showSweetAlert(
      {
        title: "Quantidade",
        message: "Qual a quantidade desejada desse fornecedor?",
        icon: "info",
        input: true
      })
  }
}
