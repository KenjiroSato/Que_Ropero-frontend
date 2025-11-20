import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: any[] = [];

  agregarProducto(nombre: string, precio: number, imagen: string) {
    this.productos.push({ nombre, precio, imagen })
  }

  obtenerProductos(): any[] {
    return this.productos
  }

  vaciarCarrito():void {
    this.productos = [];
  }

}
