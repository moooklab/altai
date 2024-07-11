new Swiper('section.reviews div.swiper', {
    slidesPerView: 1,
    spaceBetween: '10px',
    pagination: {
        el: document.querySelector('section.reviews div.swiper-pagination')
    },
    navigation: {
        prevEl: document.querySelector('section.reviews div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.reviews div.swiper-navigation > *:last-child')
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: '20px',
        }
    }
})

new Swiper('section.service div.swiper', {
    slidesPerView: 1,
    spaceBetween: '20px',
    pagination: {
        el: document.querySelector('section.service div.swiper-pagination')
    },
    navigation: {
        prevEl: document.querySelector('section.service div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.service div.swiper-navigation > *:last-child')
    }
})

new Swiper('section.programs div.swiper.line', {
    slidesPerView: 1.1,
    spaceBetween: '10px',
    breakpoints: {
        640: {
            slidesPerView: 2.2,
            spaceBetween: '20px',
        },
        960: {
            slidesPerView: 3,
            spaceBetween: '20px',
        }
    }
})

new Swiper('section.programs div.swiper.grid', {
    slidesPerView: 1.1,
    spaceBetween: '10px',
    grid: {
        rows: 1,
        fill: 'row'
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: '20px',
            grid: {
                rows: 3,
                fill: 'row'
            }
        },
        960: {
            slidesPerView: 3,
            spaceBetween: '40px',
            grid: {
                rows: 2,
                fill: 'row'
            }
        }
    }
})

new Swiper('section.therapy div.swiper', {
    slidesPerView: 1.1,
    spaceBetween: '10px',
    breakpoints: {
        640: {
            slidesPerView: 2.2,
            spaceBetween: '20px',
        },
        960: {
            slidesPerView: 3,
            spaceBetween: '20px',
        }
    }
})

new Swiper('section.advantages div.swiper', {
    slidesPerView: 1.1,
    spaceBetween: '10px',
    breakpoints: {
        640: {
            slidesPerView: 2.2,
            spaceBetween: '20px',
        },
        960: {
            slidesPerView: 3,
            spaceBetween: '20px',
        }
    }
})

new Swiper('section.additions div.swiper', {
    slidesPerView: 1.5,
    spaceBetween: '10px',
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: '10px',
        },
        640: {
            slidesPerView: 3,
            spaceBetween: '16px',
        },
        960: {
            slidesPerView: 4,
            spaceBetween: '16px',
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: '16px',
        }
    }
})

new Swiper('section.bonuses div.swiper', {
    slidesPerView: 1.1,
    spaceBetween: '10px',
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: '10px',
        },
        960: {
            slidesPerView: 2,
            spaceBetween: '40px',
        },
    }
})