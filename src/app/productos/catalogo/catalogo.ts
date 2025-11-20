import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito-service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  constructor(private carritoService: CarritoService) { }

  agregarAlCarrito(nombre: string, precio: number, imagen: string) {
    this.carritoService.agregarProducto(nombre, precio, imagen);
    alert(`Producto "${nombre}" agregado al carrito.`); //toatstr
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Catalogo } from './catalogo/catalogo';
import { CarritoService } from '../../servicios/carrito-service';

@NgModule({
  declarations: [Catalogo],
  imports: [CommonModule],
  providers: [CarritoService]  // <-- Add this
})
export class ProductosModule { }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // <-- Makes it available app-wide
})
export class CarritoService {
  // ...service code...
}
