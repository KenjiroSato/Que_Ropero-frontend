import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuario } from './lista-usuario/lista-usuario';
import { Route, RouteConfigLoadEnd, RouterModule, Routes } from '@angular/router';
import { CuUsuario } from './cu-usuario/cu-usuario';
import { FormsModule as formsmodule } from '@angular/forms';
const router: Routes =[
  {
    path: '',
    component: ListaUsuario
  }
]

@NgModule({
  declarations: [
    ListaUsuario,
    CuUsuario
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    formsmodule
  ]
})
export class UsuarioModule { }
