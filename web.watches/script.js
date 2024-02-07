/* show menu */
const navMenu = document.getElementById('nav-menu')
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')

    /* ===== menu show ====== */
    /* validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    /* ======= menu hiden ===== */
    /* validate if constant exists */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }
    // ======== remove menu mobile =====
const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{ 
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

    // ========= swiper(brauktukas) wathes =========
    const swiperWatches = new Swiper('.home__swiper', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: [-100, 0, -500],
                rotate: [0, 0, 15],
                opacity: 0
            },
            next: {
                translate: [100, 0, -500],
                rotate: [0, 0, -15],
                opacity: 0
            },
        },
        pagination: {
          el: '.swiper-pagination',
          clickble: true,
        },
      })
    
