import { Component, signal } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {

  }

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }
  protected readonly title = signal('Que_Ropero');

}