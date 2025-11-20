import { Component, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuario',
  standalone: false,
  templateUrl: './lista-usuario.html',
  styleUrls: ['./lista-usuario.css']
})
export class ListaUsuario {
  @ViewChild('modalUsuario') modal: ElementRef | undefined;
  vectorUsuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Perez', fechaRegistro: new Date('2023-01-15') },
    { id: 2, nombre: 'Maria Gomez', fechaRegistro: new Date('2023-02-20') },
    { id: 3, nombre: 'Carlos Sanchez', fechaRegistro: new Date('2023-03-10') }
  ];


  usuarioSeleccionado: Usuario | undefined = undefined;
  isnew: boolean = false;



  editarUsuario(usuario: Usuario) { 
    this.isnew = false;
    this.usuarioSeleccionado = usuario;
  }

  NuevoUsuario() {
    this.isnew = true;
    this.usuarioSeleccionado = { id: 0, nombre: '', fechaRegistro: new Date() };
  }

  guardarUsuario() {
    if (this.isnew) {
      this.vectorUsuarios.push(this.usuarioSeleccionado!);
      this.usuarioSeleccionado = undefined;
      this.cerrarModal(this.modal);
    } else {
      this.usuarioSeleccionado = undefined;
      this.cerrarModal(this.modal);
    }
    Swal.fire({title: 'cambios guardados', icon: 'success'});
  }

  EliminarUsuario(us: Usuario) {
    Swal.fire({
      icon: 'question',
      title: `¿Está seguro de eliminar el usuario ${us.nombre}?`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-secondary'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.vectorUsuarios.findIndex(u => u.id === us.id);
        if (index > -1) {
          this.vectorUsuarios.splice(index, 1);
          Swal.fire('Eliminado', 'El usuario ha sido eliminado', 'success');
        }
      }
    });
  }

  cerrarModal(modal: ElementRef | undefined) {
    if (modal) {
      const bsmodal = Modal.getInstance(modal.nativeElement);
      bsmodal?.hide();

      const backdrop = document.querySelector('.modal-backdrop.fade.show');
      if (backdrop) {
        backdrop.parentNode?.removeChild(backdrop);
      }
      document.body.removeAttribute('style');
      document.body.removeAttribute('class');
    }
  }
}
