import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito-service';
@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  carrito: any;
  productos: any[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.productos = this.carritoService.obtenerProductos();
  }
vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.productos = [];
  }

}


