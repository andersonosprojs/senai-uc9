
$(document).ready(function() {
  /* Carrosel para exibição de promoções. */
  $("#promos .promo-slide:eq(0)").addClass("promo-on").show()

  /* Carrosel para exibição de comentários. */
  $("#comments .comment-slide:eq(0)").addClass("comment-on").show()

  setInterval(slides, 5000)

  /* Faz o controle de mostrar ou não o menu de barras. */
  $("#barras").click(function() {
      $("#menu").toggleClass("menu-ativo")
  })
})

/* Função que controla o carrosel de exibição de promoçoes e comentários. */
slides = () => {

  if ($(".promo-on").next().length) {
      $(".promo-on").removeClass("promo-on").hide().next().addClass("promo-on").show()
  } else {
      $(".promo-on").removeClass().hide();
      $("#promos .promo-slide:eq(0)").addClass("promo-on").show()
  }

  if ($(".comment-on").next().length) {
      $(".comment-on").removeClass("comment-on").hide().next().addClass("comment-on").show()
  } else {
      $(".comment-on").removeClass().hide();
      $("#comments .comment-slide:eq(0)").addClass("comment-on").show()
  }

}

window.onresize = () => {
  let comprimento = window.innerWidth;

  renderizarSite();

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

document.getElementById("pesquisar").addEventListener('keydown', function(event) {

var tecla = event.keyCode;

if(tecla == 13) {
 alert("Realizada pesquisa no site!");
}
});

let listaComentarios = [
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
  },
  {
      imagem: "../../assets/img/Helena.png",
      nome: "Helena",
      cidade: "Teixeira de Freitas - BA",
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
  },
  {
      imagem: "../../assets/img/Julius.jpg",
      nome: "Julius",
      cidade: "Belo Horizonte - MG",
      comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
  }
]

let listaPromocoes = [
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
  },
  {
      imagem: "../../assets/img/ps4-pro.jpg",
      descricao: "Console PlayStation 4",
      preco: "R$ 2999,99"
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
  },
  {
      imagem: "../../assets/img/pes-2022.jpg",
      descricao: "PES 2022 - Super Lançamento",
      preco: "R$ 199,99"
  }
]

renderizarSite = () => {
  let comentarios = document.getElementById("comments");
  let promocoes = document.getElementById("promos");

  let template = "";
  let strAux = "";
  let contador = 0;
  let comprimento = window.innerWidth;
  let qtdItens = 0;

  alert("renderizarSite()");

  qtdItens = 1;
  if (comprimento > 769) {
      qtdItens = 3;
  }

  listaComentarios.forEach(c => {
      contador++
      strAux += `
       <div class="container-comments col-md">
          <img src="${c.imagem}" alt="Cliente do comentário" />
          <p class="name-comment">${c.nome}</p>
          <p class="city-comment">${c.cidade}</p>
          <p class="desc-comment">${c.comentario}</p>
       </div>
      `;

      if (contador == qtdItens) {
          template += `<div class="row comment-slide">${strAux}</div>`;
          contador = 0;
          strAux = "";
       }
   });

  comentarios.innerHTML = template;

  template = "";
  strAux = "";

  listaPromocoes.forEach(p => {
      contador++
      strAux += `
      <div class="container-promo col-md">
          <img src="${p.imagem}" alt="Item em promoção" />
          <p class="item-description">${p.descricao}</p>
          <p class="item-price">${p.preco}</p>
          <a href="#" class="item-comprar">Comprar</a>
      </div>
      `;

      if (contador == qtdItens) {
         template += `<div class="row promo-slide">${strAux}</div>`;
         contador = 0;
         strAux = "";
      }
  });

  promocoes.innerHTML = template;
  slides()
}

function Login() {
  let email = document.getElementById("campo-email");
  let senha = document.getElementById("campo-senha");
  console.log(email.value + ":" + senha.value);
  alert(`E-mail digitado: ${email.value}`);
}
