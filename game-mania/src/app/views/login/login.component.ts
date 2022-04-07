import { Usuario } from './../../models/usuario';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginModel = new Usuario();
  mensagem = "";

  constructor(
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mensagem = "";
    if (this.existeNaBlackList(this.loginModel.email))
      this.mensagem = "E-mail inválido";
    else {
      this.loginService.login(this.loginModel).subscribe(
        response =>this.router.navigateByUrl(""), // volta para: home
        error => this.mensagem = error.error
      );
    }
  }

  blackList = [
    "delete",
    "insert",
    "create",
    "''",
    ";"
  ];

  existeNaBlackList(login: string) {
    let encontrouPalavra = false;
    this.blackList.map( p => {
      if (login.toLowerCase().includes(p))
        encontrouPalavra = true;
    })
    return encontrouPalavra;
  }
}
