import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _url = "http://localhost:3000/usuarios";

  constructor(
    private httpClient: HttpClient
  ) { }


  getUsuarioByEmail = (email: string) =>
    this.httpClient.get<IUsuario>(`${this._url}?email=${email}`);

  getById = (id: number) =>
    this.httpClient.get<IUsuario>(`${this._url}/${id}`);

  Excluir = (id: number) =>
    this.httpClient.delete(`${this._url}/${id}`).subscribe(
      resultado => true,
      erro => false
    );


  Salvar = (user: User) => {
    if (user.id == 0)
      this.httpClient.post(this._url, user).subscribe(
        resultado => true,
        erro => false
      );
    else
      this.httpClient.put(`${this._url}/${user.id}`, user).subscribe(
        resultado => true,
        erro => false
      );
  }

  // getUsuarioByEmail(email: string) {
  //   return this.httpClient.get<IUsuario>(`${this._url}?email=${email}`);
  // }

  // getById(id: number) {
  //   return this.httpClient.get<IUsuario>(`${this._url}/${id}`);
  // }

  // Salvar(user: User) {
  //   this.getById(user.id).subscribe(
  //     response => {
  //       if (response.id == user.id) // Alteração
  //         return this.httpClient.put(`${this._url}/${response.id}`, user).subscribe(
  //           resultado => alert("Usuário Atualizado"),
  //           erro => {
  //             if(erro.status == 400)
  //               alert(`Não foi possível cadastrar usuário: ${erro}`);
  //           }
  //         );
  //       else // Inclusão
  //         return this.httpClient.post(this._url, user).subscribe(
  //           resultado => alert("Usuário cadastrado"),
  //           erro => {
  //             if(erro.status == 400)
  //               alert(`Não foi possível cadastrar usuário: ${erro}`);
  //           }
  //         );
  //     },
  //     erro => {
  //       if(erro.status == 400)
  //         alert(`Não foi possível cadastrar usuário: ${erro}`);
  //     }
  //   )
  // }

  // Excluir(id: number) {
  //   return this.httpClient.delete(`${this._url}/${id}`).subscribe(
  //     resultado => alert("Usuário excluído"),
  //     erro => {
  //       if(erro.status == 400)
  //         alert(`Não foi possível excluir usuário: ${erro}`);
  //     }
  //   );
  // }
}
