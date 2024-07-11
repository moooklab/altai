let productsThumbs = new Swiper('section.programs div.swiper.thumbs', {
    slidesPerView: 2,
    spaceBetween: 24,
    slideToClickedSlide: true,
    pagination: {
        el: 'section.programs div.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1280: {
            slidesPerView: 4
        },
        640: {
            slidesPerView: 3
        }
    }
})

let productsSwiper = new Swiper('section.programs div.swiper.programs', {
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    speed: 300,
    thumbs: {
        swiper: productsThumbs
    },
    navigation: {
        prevEl: 'section.programs div.swiper-navigation > *:first-child',
        nextEl: 'section.programs div.swiper-navigation > *:last-child',
    }
})

let reviewSwiper = new Swiper('section.reviews div.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        prevEl: 'section.reviews div.swiper-navigation > *:first-child',
        nextEl: 'section.reviews div.swiper-navigation > *:last-child',
    },
    breakpoints: {
        960: {
            slidesPerView: 3
        },
        480: {
            slidesPerView: 2
        }
    }
})

// ----------------------- Плавающая шапка

window.onscroll = function() { stickHeader() }

var header = document.getElementsByTagName('header')[0]
var sticky = header.offsetHeight

function stickHeader() {
    if (window.pageYOffset > 0) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}

// ----------------------- Плавающая шапка