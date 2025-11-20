import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Usuario {

  apiBase='';
  
  constructor(private _http: HttpClient) { 
    this.apiBase= environment.urlApiBase + 'usuarios';
  }
  
  getUsuarios() : Observable<Usuario[]>{
    return this._http.get<Usuario[]>(this.apiBase + '/');
  }
}
