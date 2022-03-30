import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  userModel = new User();
  inclusao: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    const userLogado = this.localStorage.get("userLogado");

    if (!this.isEmptyObject(userLogado)) {
      this.inclusao = false;
      Array.prototype.forEach.call(userLogado,  (i) => {
        this.userModel.id = i.id;
        this.userModel.email = i.email;
        this.userModel.nome = i.nome;
        this.userModel.senha = i.senha;
      })
    }
  }

  onSubmit = () => {
    if (this.validFilds()) {
      if (!this.inclusao) {
        this.localStorage.remove("userLogado");
        this.usuarioService.Salvar(this.userModel);
        this.router.navigate([""]);
      }
      else {
        this.usuarioService.getUsuarioByEmail(this.userModel.email).subscribe( (user: IUsuario) => {
          if (this.isEmptyObject(user))
            this.usuarioService.Salvar(this.userModel);
          else
            alert("Já existe usuário cadastrado com o email informado. Caso tenha esquecido a senha, é necessário redefini-lá");

          this.router.navigate(["../login"]);
        });
      }
    }
  }

  isEmptyObject = (obj: object) =>
   Object.keys(obj).length === 0;

  validFilds = () => {
    if (this.userModel.email == "")
      alert("Digite o E-mail");
    else if (this.userModel.nome == "")
      alert("Digite o Nome");
    else if (this.userModel.senha == "")
      alert("Digite a Senha");
    else if (this.userModel.confsenha == "")
      alert("Digite a Confirmação de Senha");
    else if (this.userModel.senha != this.userModel.confsenha)
      alert("Senha diferente da confirmação de Senha");
    else
      return true;

    return false;
  }


}
