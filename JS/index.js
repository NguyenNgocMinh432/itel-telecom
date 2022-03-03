// xử lý toggle
document.querySelector('.header__toggle').addEventListener('click', function () { 
  document.querySelector(".mobile").style.display = 'block';
  document.querySelector(".mobile").style.transform = 'translateX(0)';
  document.querySelector(".mobile").style.opacity = '1';
  document.querySelector(".overlay").style.display = 'block';
  document.querySelector(".overlay").style.transition = 'all 2s';
});
document.querySelector('.mobile__close').addEventListener('click', function () {
  document.querySelector(".mobile").style.transform = 'translateX(500%)';
  document.querySelector(".overlay").style.display = 'none';
});
document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector(".mobile").style.transform = 'translateX(500%)';
  document.querySelector(".overlay").style.display = 'none';
});
var elms = document.getElementsByClassName( 'splide' );

var splide = new Splide( '.splide', {
    perPage: 2,
    rewind : true,
    pagination : false,
    type   : 'loop',
    perMove: 1,
    breakpoints: {
    940: {
      perPage: 1,
            arrows: false,
    },
  }
  } );
splide.mount();

AOS.init();

$(document).ready(function(){
  $('.product__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinity: true,
    autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      ],
  dots: false,
  });
});
// slide partner
$(document).ready(function(){
  $('.partner__card').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinity: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
      {
          breakpoint: 1470,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
          }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      ],
  dots: false,
  });
});
window.addEventListener('scroll', function(e) {
  if(window.scrollY >= 500){
    document.querySelector('.contact__icon').style.display = 'block';
    document.querySelector('#phonering-alo-phoneIcon').style.display = 'block';
  }else{
    document.querySelector('#phonering-alo-phoneIcon').style.display = 'none';
    document.querySelector('.contact__icon').style.display = 'none';
    document.querySelector('.header').classList.remove('active-header');
  }
  if(window.scrollY >= 500 && window.innerWidth >= 1400){
    document.querySelector('.header').classList.add('active-header');
  }else{
    document.querySelector('.header').classList.remove('active-header');
  }
})
// Xử lý khi click vào icon tìm kiếm sẽ focus vào input tìm kiếm
document.querySelector('.header__search--form>label').addEventListener('click', function () {
    document.querySelector('.header__search--form>input').focus();
})
// Xử lý phần chọn tin tức
function handleNew(type){
  console.log(type.className);
  switch(type.className){
    case '':
        document.querySelector('.active-news').classList.remove('active-news');
        type.classList.add('active-news');
        break;
    default:
  }
};

function handleLanguage(type){
  console.log(type.className);
  switch(type.className){
    case '':
        document.querySelector('.active-language').classList.remove('active-language');
        type.classList.add('active-language');
        break;
    default:
  }
}


