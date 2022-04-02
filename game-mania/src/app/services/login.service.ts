import { Observable } from 'rxjs';
import { Usuario } from './../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private url = "http://localhost:3000/login";

  constructor(
    private httpClient: HttpClient
  ) { }

  login = (usuario: Usuario): Observable<any> =>
    this.httpClient.post(
      this.url,
      JSON.stringify(usuario),
      {
        headers: new HttpHeaders( { 'Content-Type': 'application/json' } ),
        observe: 'response'
      });
}
