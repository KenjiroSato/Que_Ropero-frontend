import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Catalogo } from './catalogo/catalogo';
import { RouterModule, Routes } from '@angular/router';
import { CarritoService } from '../servicios/carrito-service';

const router: Routes = [
  {
    path: '',
    component: Catalogo
  }
];

@NgModule({
  declarations: [
    Catalogo
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  providers: [CarritoService]
})
export class ProductosModule { }
