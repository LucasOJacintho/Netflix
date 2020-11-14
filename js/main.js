$('.owl-carousel').owlCarousel({
    loop:true, /* dar voltas infinitas caso true - caso false, bara na última imagem*/
    margin:10,
    nav:false, /* quando verdadeiro adiciona o navegador seta - false tira a seta de navegação */
    responsive:{
        0:{
            items:1 //zero até 600px 1 imagem apenas
        },
        600:{
            items:3 //quando tiver 600 até 100 px 3 itens por vez
        },
        1000:{
            items:5 //quando tiver 1000 ou mais px 5 itens por vez
        }
    }
})