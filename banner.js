  const swiper = new Swiper('.mainBanner', {
        loop: true,               // Infinito
        spaceBetween: 0,          // Sin espacio entre slides
        autoplay: {
            delay: 4000,          // Cambia cada 4 segundos
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Efecto de transición elegante
        speed: 800,
    });