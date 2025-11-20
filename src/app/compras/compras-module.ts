import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrito } from './carrito/carrito';
import { Router, RouterModule, Routes } from '@angular/router';

const router: Routes =[
  {
    path: '',
    component: Carrito
  }
]

@NgModule({
  declarations: [
    Carrito
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class ComprasModule { }
