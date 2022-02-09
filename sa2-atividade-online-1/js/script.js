
$(document).ready(function() {
    /* Carrosel para exibição de imagens. */
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slides, 2000)    

    /* Faz o controle de mostrar ou não o menu de barras. */
    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
    })
})

/* Função que controla o carrosel de exibição de imagens. */
slides = () => {
    
    if ($(".banner-ativo").next().length) {
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    } else {
        $(".banner-ativo").removeClass().hide();
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    }
}

// function mostrarPopup(){
//     window.alert("Hello World")
// }

window.onresize = () => { 
    let menu = document.getElementById("menu");
    let comprimento = window.innerWidth

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
        imagem: "./images/Helena.png",
        nome: "Helena",
        cidade: "Teixeira de Freitas - BA",
        comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
    },
    {
        imagem: "./images/Julius.jpg",
        nome: "Julius",
        cidade: "Belo Horizonte - MG",
        comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
    },
    {
        imagem: "./images/chris.jpg",
        nome: "Chris",
        cidade: "Florianópolis - SC",
        comentario: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed."
    },
]

let listaPromocoes = [
    {
        imagem: "./images/ps4-pro.jpg",
        descricao: "Console PlayStation 4",
        preco: "R$ 2999,99"
    },
    {
        imagem: "./images/pes-2022.jpg",
        descricao: "PES 2022 - Super Lançamento",
        preco: "R$ 199,99"
    },
    {
        imagem: "./images/redmi-g-2021.jpg",
        descricao: "Notebook Gamer - XIAOMI G 2021",
        preco: "R$ 4999,99"
    }
    // {
    //     imagem: "./images/pes-2022.jpg",
    //     descricao: "PES 2022 - Super Lançamento",
    //     preco: "R$ 199,99"
    // },
    // {
    //     imagem: "./images/redmi-g-2021.jpg",
    //     descricao: "Notebook Gamer - XIAOMI G 2021",
    //     preco: "R$ 4999,99"
    // },
    // {
    //     imagem: "./images/ps4-pro.jpg",
    //     descricao: "Console PlayStation 4",
    //     preco: "R$ 2999,99"
    // }
]

renderizarSite = () => {
    let comentarios = document.getElementById("comments");
    let promocoes = document.getElementById("promos");

    let template = "";

    listaComentarios.forEach(c => {
        template += `
         <div class="container-comments col-md">
            <img src="${c.imagem}" alt="Cliente do comentário" />
            <p class="name-comment">${c.nome}</p>
            <p class="city-comment">${c.cidade}</p>
            <p class="desc-comment">${c.comentario}</p>
         </div>
        `;
    });

    comentarios.innerHTML = template;

    template = "";

    listaPromocoes.forEach(p => {
        template += `
        <div class="container-promo col-md">
            <img src="${p.imagem}" alt="Item em promoção" />
            <p class="item-description">${p.descricao}</p>
            <p class="item-price">${p.preco}</p>
            <a class="item-comprar">Comprar</a>    
        </div>
        `;
    });

    promocoes.innerHTML = template;
}
