import { Injectable } from '@angular/core';
import { Alerta } from '../interfaces/alerta';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  async showSweetAlert({
    title,
    message,
    icon = 'success',
    reload,
    input
  }: {
    title: string;
    message: string;
    icon?: 'success' | 'error' | 'warning' | 'info';
    reload?: boolean;
    input?: boolean
  }): Promise<Alerta> {
    const appRoot = document.querySelector('app-root');

    if (appRoot) {
      appRoot.setAttribute('inert', '');
    }

    try {
      const result = await Swal.fire({
        title: title,
        html: message,
        icon: icon,
        showCloseButton: true,
        input: input ? 'text' : undefined,
        inputAttributes: {
          autocapitalize: 'off',
        },
        didOpen: () => {
          const input = document.querySelector<HTMLInputElement>('.swal2-input');
          input?.focus();
        },
      });

      if (reload) {
        window.location.reload();
      }

      return result;

    } catch (error) {
      console.error('Erro ao exibir o SweetAlert:', error);

      return { isConfirmed: false, error: true, message: error }

    } finally {
      if (appRoot) {
        appRoot.removeAttribute('inert');
      }
    }
  }

}