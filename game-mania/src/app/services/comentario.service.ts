import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComentario } from '../interfaces/icomentario';


@Injectable({
  providedIn: 'root'
})

export class ComentarioService {

  private _url = "http://localhost:3000/comentarios";

  constructor(private httpClient: HttpClient) { }

  getComentarios(): Observable<IComentario[]> {
    return this.httpClient.get<IComentario[]>(this._url)
  }
}
