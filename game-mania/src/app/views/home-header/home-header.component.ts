import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* Faz o controle de mostrar ou não o menu de barras. */
    $("#barras").click(function() {
      $("#menu").toggleClass("menu-ativo")
    })
  }

  onResize = (event: any) => {

    let comprimento = event.target.innerWidth;

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
