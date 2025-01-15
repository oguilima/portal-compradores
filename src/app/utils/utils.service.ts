import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  async showSweetAlert({ title, message, icon = 'success', reload }: { title: string, message: string, icon?: 'success' | 'error' | 'warning' | 'info', reload: boolean }) {
    return Swal.fire({
      title: title,
      html: message,
      icon: icon,
      showCloseButton: true,
    }).then((result) => {
      if(reload){
        window.location.reload()
      }
    });
  }   
}