import { Component, OnInit } from '@angular/core';

import { COMENTARIOS } from '../../mocks/comentarios.mock';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-home-comentarios',
  templateUrl: './home-comentarios.component.html',
  styleUrls: ['./home-comentarios.component.css']
})
export class HomeComentariosComponent implements OnInit {

  public listaComentarios = [
    {
      id: 0,
      comentarios: [
        {
          id: 0,
          imagem: "",
          nome: "",
          cidade: "",
          comentario: ""
        }]
    }
  ];

  constructor() {
    this.loadComentarios(window.innerWidth);
  }

  ngOnInit(): void {
    this.slides();
  }

  loadComentarios = (comprimento: number) => {
    let contador = 0;
    let id = 0;
    let qtdItens = 1;
    let auxComents: Comentario[] = [];

    if (comprimento > 769)
      qtdItens = 3;

    this.listaComentarios = [];

    Array.prototype.forEach.call(COMENTARIOS,  (i) => {
      contador++;
      auxComents.push(
        new Comentario(id, i.imagem, i.nome, i.cidade, i.comentario)
      );

      if (contador == qtdItens) {
        id++
        this.listaComentarios.push({
          id: id,
          comentarios: auxComents
        });
        contador = 0;
        auxComents = [];
      }
    });
  }

  loadSlides = (classSlide: string, classOn: string) => {
    let list = document.querySelectorAll(classSlide);
    let count = 0;
    let result = false;
    let positionElement = 0;

    Array.prototype.forEach.call(list, function (i) {
      count++;
      if (i.classList.contains(classOn))
        positionElement = count;
    });

    if (positionElement === 0 || positionElement === list.length)
      positionElement = 0;

    positionElement++;

    Array.prototype.forEach.call(list, function (i) {
      i.classList.remove(classOn);
    });

    count = 0;
    Array.prototype.forEach.call(list, function (i) {
      count++
      if (count == positionElement) {
        i.classList.add(classOn);
        result = true;
      }
    });

    return result;
  }

  /* Função que controla o carrosel de exibição de comentários. */
  slides = () => {
    let timeOut = 0;
    if (this.loadSlides(".comment-slide","comment-on"))
      timeOut = 5000;

    setTimeout(this.slides, timeOut);
  }

  onResize = (event: any) => {
    this.loadComentarios(event.target.innerWidth);
    this.slides();
  }
}
