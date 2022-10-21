// import '../../node_modules/bootstrap/js/dist/dropdown';
// import '../../node_modules/bootstrap/js/dist/collapse';
// import '../../node_modules/bootstrap/js/dist/tab';

import Collapse from '../../node_modules/bootstrap/js/dist/collapse';
import Scrollspy from '../../node_modules/bootstrap/js/dist/scrollspy';

import Swiper, { FreeMode, Mousewheel } from 'swiper';


const swiper = new Swiper('.swiper', {
    modules: [FreeMode, Mousewheel],
    slidesPerView: "auto",
    grabCursor: true,
    mousewheel: true,
    spaceBetween: 30,
    FreeMode: true,
});

//BURGER

const navbarToggler = document.querySelector('.navbar-toggler')

    navbarToggler.addEventListener("click", function() {
        navbarToggler.classList.toggle('active');
    });

  


//YMAP
ymaps.ready(init);
function init() {
    let map = new ymaps.Map("map", {
        center: [55.765485233839624,37.2308183835449],
        zoom: 15
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    
    let placemark = new ymaps.Placemark([55.76082356895991,37.23085649999999],{}, {
       iconLayout: 'default#image',
       iconImageHref: '../img/placemark.svg',
       iconImageSize: [98,112],
       iconImageOffset: [-49,-112]
    });

    map.geoObjects.add(placemark)
    
}



