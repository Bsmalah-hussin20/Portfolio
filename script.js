var swiper = new Swiper('.serviceSwiper',{
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView:3,
            spaceBetween:30,
        },
        900:{
            slidesPerView:2,
            spaceBetween:30,
        },
        500:{
            slidesPerView:1,
            spaceBetween:30,
        }
    }
});

var swiper = new Swiper('.testimomialSwiper',{
    slidesPerView:2,
    spaceBetween:10,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView:2,
            spaceBetween:10,
        },
        900:{
            slidesPerView:2,
            spaceBetween:10,
        },
        500:{
            slidesPerView:1,
            spaceBetween:10,
        },
        300:{
            slidesPerView:1,
            spaceBetween:10,
        }
    }
});

let bar = document.querySelector('.bars');
let side_bar = document.querySelector('.side_bar');

bar.addEventListener('click',() =>{
    side_bar.classList.toggle('show_side_bar');
})