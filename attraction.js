const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    breakpoints:{
        0:{
            slidesPerView:2
        },
        620:{
            slidesPerView:3
        },
        1024:{
            slidesPerView:4
        }

    }
  });
  document.querySelector(".slider-wrapper").addEventListener("mouseenter",()=>{
    swiper.slideNext();
  });
  document.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowRight")
      swiper.slideNext();
    if(e.key === "ArrowLeft")
      swiper.slidePrev();
  });
