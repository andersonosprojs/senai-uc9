import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userModel = new User();

  constructor(private usuarioService: UsuarioService,
    private localStorage: LocalStorageService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.localStorage.remove("userLogado");
    this.usuarioService.getUsuarioByEmail(this.userModel.email).subscribe( (user: IUsuario) => {
      this.validDataUser(user);
    });
  }

  validDataUser = (data: IUsuario) => {
    let isSaveData = false;

    if (this.isEmptyObject(data))
      alert("E-mail não localizado");
    else {
      Array.prototype.forEach.call(data,  (i) => {
        if (this.userModel.senha !== i.senha)
          alert("Senha inválida");
        else {
          isSaveData = true;
        }
      })
    };

    if (isSaveData) {
      this.localStorage.set("userLogado", data)
      this.router.navigate([""]); // volta para: home
    }
  }

  isEmptyObject = (obj: object) =>
   Object.keys(obj).length === 0;
}
