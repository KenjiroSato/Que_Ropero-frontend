import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usr:string='';
  pwd:string='';

  constructor(private router: Router) {}

  login(){
    
     
    if (this.usr === 'admin' && this.pwd === '1234') {
      // Redirige al home
      this.router.navigate(['/']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}
