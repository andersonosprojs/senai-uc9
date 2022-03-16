import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public listaPromocoes = [
    {
      Id: 1,
      Produtos: [
        {
          imagem: "../../assets/img/ps4-pro.jpg",
          descricao: "Console PlayStation 4",
          preco: "R$ 2999,99"
        },
        {
          imagem: "../../assets/img/pes-2022.jpg",
          descricao: "PES 2022 - Super Lançamento",
          preco: "R$ 199,99"
        },
        {
          imagem: "../../assets/img/redmi-g-2021.jpg",
          descricao: "Notebook Gamer - XIAOMI G 2021",
          preco: "R$ 4999,99"
        }
      ]
    },
    {
      Id: 2,
      Produtos: [
        {
          imagem: "../../assets/img/pes-2022.jpg",
          descricao: "PES 2022 - Super Lançamento",
          preco: "R$ 199,99"
        },
        {
          imagem: "../../assets/img/redmi-g-2021.jpg",
          descricao: "Notebook Gamer - XIAOMI G 2021",
          preco: "R$ 4999,99"
        },
        {
          imagem: "../../assets/img/ps4-pro.jpg",
          descricao: "Console PlayStation 4",
          preco: "R$ 2999,99"
        }
      ]
    },
    {
      Id: 3,
      Produtos: [
        {
          imagem: "../../assets/img/redmi-g-2021.jpg",
          descricao: "Notebook Gamer - XIAOMI G 2021",
          preco: "R$ 4999,99"
        },
        {
          imagem: "../../assets/img/ps4-pro.jpg",
          descricao: "Console PlayStation 4",
          preco: "R$ 2999,99"
        },
        {
          imagem: "../../assets/img/pes-2022.jpg",
          descricao: "PES 2022 - Super Lançamento",
          preco: "R$ 199,99"
        }
      ]
    }
  ];

  public listaComentarios = [
    {
      id: 1,
      comentarios: [
        {
          imagem: "../../assets/img/Helena.png",
          nome: "Helena",
          cidade: "Teixeira de Freitas - BA",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        },
        {
          imagem: "../../assets/img/Julius.jpg",
          nome: "Julius",
          cidade: "Belo Horizonte - MG",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        },
        {
          imagem: "../../assets/img/chris.jpg",
          nome: "Chris",
          cidade: "Florianópolis - SC",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        }
      ],
    },
    {
      id: 2,
      comentarios: [
        {
          imagem: "../../assets/img/Julius.jpg",
          nome: "Julius",
          cidade: "Belo Horizonte - MG",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        },
        {
          imagem: "../../assets/img/chris.jpg",
          nome: "Chris",
          cidade: "Florianópolis - SC",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        },
        {
          imagem: "../../assets/img/Helena.png",
          nome: "Helena",
          cidade: "Teixeira de Freitas - BA",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        }
      ],
    },
    {
      id: 3,
      comentarios: [
        {
          imagem: "../../assets/img/chris.jpg",
          nome: "Chris",
          cidade: "Florianópolis - SC",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        },
        {
          imagem: "../../assets/img/Helena.png",
          nome: "Helena",
          cidade: "Teixeira de Freitas - BA",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        },
        {
          imagem: "../../assets/img/Julius.jpg",
          nome: "Julius",
          cidade: "Belo Horizonte - MG",
          comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {

    this.slides();

    /* Faz o controle de mostrar ou não o menu de barras. */
    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
    })
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

  /* Função que controla o carrosel de exibição de promoçoes e comentários. */
  slides = () => {

    let timeOut = 0;

    if (this.loadSlides(".promo-slide","promo-on"))
      timeOut = 5000;

    if (this.loadSlides(".comment-slide","comment-on"))
      timeOut = 5000;

    setTimeout(this.slides, timeOut);
  }

  onResize = (event: any) => {

    let comprimento = event.target.innerWidth;
    let menu = document.querySelector("menu");

    this.slides();

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
