setTimeout(function(){
    new Swiper('section.reviews div.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        // autoHeight: true,
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
                spaceBetween: 20,
                // autoHeight: false,
            }
        }
    })
    
    new Swiper('section.service div.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
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
        spaceBetween: 10,
        navigation: {
            prevEl: document.querySelector('section.programs div.swiper-navigation > *:first-child'),
            nextEl: document.querySelector('section.programs div.swiper-navigation > *:last-child')
        },
        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    })
    
    new Swiper('section.programs div.swiper.grid', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        grid: {
            rows: 1,
            fill: 'row'
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: 'row'
                }
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 40,
                grid: {
                    rows: 2,
                    fill: 'row'
                }
            }
        }
    })
    
    new Swiper('section.therapy div.swiper', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        navigation: {
            prevEl: document.querySelector('section.therapy div.swiper-navigation > *:first-child'),
            nextEl: document.querySelector('section.therapy div.swiper-navigation > *:last-child')
        },
        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    })
    
    new Swiper('section.advantages div.swiper', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    })
    
    new Swiper('section.additions div.swiper', {
        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 16,
            }
        }
    })
    
    new Swiper('section.bonuses div.swiper', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            960: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        }
    })

    new Swiper('section.dishes div.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        freeMode: {
            enabled: true,
            sticky: true,
        },
        navigation: {
            prevEl: document.querySelector('section.dishes div.swiper-navigation > *:first-child'),
            nextEl: document.querySelector('section.dishes div.swiper-navigation > *:last-child')
        }
    })

    new Swiper('section.gallery div.swiper', {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: document.querySelector('section.gallery div.swiper-pagination')
        }
    })

    new Swiper('section.season div.tabs div.swiper', {
        slidesPerView: 1.1,
        spaceBetween: 10
    })
    new Swiper('section.season div.cards div.swiper', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    })
    new Swiper('section.also div.swiper', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    })
}, 100)
