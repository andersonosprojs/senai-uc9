import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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

  constructor() { }

  ngOnInit(): void {
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
}
