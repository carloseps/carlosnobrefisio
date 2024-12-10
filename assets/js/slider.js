$('.feedbacks-container').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 12,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items: 1,
            nav:false
        },
        600:{
            items: 1,
            nav:true
        },
        768:{
            items: 2
        },
        1266:{
            items: 3
        },
    }
})

