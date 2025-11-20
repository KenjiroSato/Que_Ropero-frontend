import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-usuario',
  standalone: false,
  templateUrl: './cu-usuario.html',
  styleUrl: './cu-usuario.css'
})
export class CuUsuario {
  @Input() usuario: Usuario | undefined;
  formatdatetimelocal(fecha: Date){
    let fechaLocal = format(new Date(fecha), 'yyyy-MM-dd HH:mm:ss', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
    return fechaLocal;
  }

  updateDate(valor: string) {

    this.usuario!.fechaRegistro = new Date(valor);
}
}
