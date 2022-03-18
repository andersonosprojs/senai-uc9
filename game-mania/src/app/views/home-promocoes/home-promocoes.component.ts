import { Component, OnInit } from '@angular/core';
import { PROMOCOES } from '../../mocks/promocoes.mock';
import { Promocao } from '../../models/promocao';


@Component({
  selector: 'app-home-promocoes',
  templateUrl: './home-promocoes.component.html',
  styleUrls: ['./home-promocoes.component.css']
})
export class HomePromocoesComponent implements OnInit {

  public listaPromocoes = [
    {
      Id: 0,
      Produtos: [
        {
          id: 0,
          imagem: "",
          descricao: "",
          preco: ""
        }]
    }
  ];

  constructor() {
    this.loadPromocoes(window.innerWidth);
  }

  ngOnInit(): void {
    this.slides();
  }

  loadPromocoes = (comprimento: number) => {
    let contador = 0;
    let id = 0;
    let qtdItens = 1;
    let auxPromos: Promocao[] = [];

    if (comprimento > 769)
      qtdItens = 3;

    this.listaPromocoes = [];

    Array.prototype.forEach.call(PROMOCOES,  (i) => {
      contador++;
      auxPromos.push(
        new Promocao(id, i.descricao, i.preco, i.imagem)
      );

      if (contador == qtdItens) {
        id++
        this.listaPromocoes.push({
          Id: id,
          Produtos: auxPromos
        });
        contador = 0;
        auxPromos = [];
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

  /* Função que controla o carrosel de exibição de promoçoes. */
  slides = () => {

    let timeOut = 0;

    if (this.loadSlides(".promo-slide","promo-on"))
      timeOut = 5000;

    setTimeout(this.slides, timeOut);
  }

  onResize = (event: any) => {

    let comprimento = event.target.innerWidth;

    this.loadPromocoes(comprimento);

    this.slides();
  }
}
