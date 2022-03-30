import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})

export class HomeHeaderComponent implements OnInit {

  private menusSistema = [
    "Ofertas",
    "Jogos",
    "Consoles",
    "Acessórios",
    "Eletrônicos",
    "Login",
    "Pedidos"
  ]

  public menus: string[] = [];

  private userLogado!: IUsuario;
  public userName: string = "";
  public isMenuConta: boolean = false;

  constructor(
    private localStorage: LocalStorageService,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    this.userLogado = this.localStorage.get("userLogado");
    this.userName = "";

    if (!this.isEmptyObject(this.userLogado)) {
      Array.prototype.forEach.call(this.userLogado,  (i) => {
        this.userName = i.nome;
      })
    }

    this.loadMenus(window.innerWidth);

    /* Faz o controle de mostrar ou não o menu de barras. */
    $("#barras").click(function() {
      $("#menu").toggleClass("menu-ativo")
    })
  }

  loadMenus = (comprimento: number) => {
    this.menus = [];
    this.menusSistema.forEach(m => {
      if (comprimento <= 769 ||
        m.toLowerCase() != "login" &&
        m.toLowerCase() != "pedidos")
        this.menus.push(m);
    });
  }

  onClickConta = () => {
    this.isMenuConta = !this.isMenuConta;
  }

  onClickExcluir = () => {
    if (!this.isEmptyObject(this.userLogado)) {
      Array.prototype.forEach.call(this.userLogado,  (i) => {
        this.usuarioService.Excluir(i.id);
        this.onClickSair();
      });
    }
  }

  onClickSair = () => {
    this.localStorage.remove("userLogado");
    this.isMenuConta = false;
    this.ngOnInit();
  }

  onResize = (event: any) => {

    let comprimento = event.target.innerWidth;

    this.loadMenus(comprimento);

    if (comprimento > 769) {
      if (!$("#menu").hasClass("menu-ativo")) {
        $("#menu").addClass("menu-ativo")
      }
    } else {
      if ($("#menu").hasClass("menu-ativo")) {
        $("#menu").removeClass("menu-ativo")
      }
    }
  }

  onKeydown(event: any) {
    if (event.key === "Enter") {
      alert("Realizada pesquisa no site!");
    }
  }

  public isEmptyObject = (obj: object) =>
    Object.keys(obj).length === 0;
}
