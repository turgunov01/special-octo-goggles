var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 100,
});


var swiper = new Swiper(".mySwiper3", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // autoplay: {
    //     delay: 5000,
    // },
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        0: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        600: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

var swiper4 = new Swiper(".mySwiper4", {
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: '.swiper-pagination2'
    },

    // autoplay: {
    //     delay: 5000,
    // },
    slidesPerView: 1,
    spaceBetween: 30,
    // initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
        0 : {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        600: {
            spaceBetween: 30,
            slidesPerView: 3,
            
        }
    }
});

let nav = document.querySelector('.nav')
nav.style.transition = '300ms'
window.addEventListener('scroll', function () {
    if (scrollY > 10) {
        nav.style.background = 'white'
        nav.style.padding = '2rem 0'
        nav.style.boxShadow = '0 2px 30px #000'
    } else {
        nav.style.background = 'unset'
        nav.style.padding = 'unset'
        nav.style.boxShadow = 'unset'
        nav.style.backdropFilter = '20px'
    }
})


let city = ['Алчевск',
    'Белая Церковь',
    'Бердянск',
    'Борисполь',
    'Боярка',
    'Бровары',
    'Васильков',
    'Винница',
    'Горловка',
    'Днепр',
    'Донецк',
    'Житомир',
    'Запорожье',
    'Ивано-Франковск',
    'Ирпень',
    'Каменское',
    'Киев',
]
let city2 = [
    'Краматорск',
    'Кременчуг',
    'Кривой Рог',
    'Кропивницкий',
    'Луганск',
    'Луцк',
    'Львов',
    'Макеевка',
    'Мариуполь',
    'Мелитополь',
    'Николаев',
    'Никополь',
    'Обухов',
    'Одесса',
    'Павлоград',
    'Полтава',
    'Ровно',
]
let city3 = [
    'Славянск',
    'Суммы',
    'Тернополь',
    'Ужгород',
    'Харьков',
    'Херсон',
    'Хмельницкий',
    'Черкассы',
    'Чернигов',
    'Черновцы',
]

let list = document.getElementById("myList");
let list2 = document.getElementById("myList2");
let list3 = document.getElementById("myList3");

city.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add('loc__link')
    li.innerText = item;
    list.appendChild(li);
})
city2.forEach((item2) => {
    let li = document.createElement("li");
    li.classList.add('loc__link')
    li.innerText = item2;
    list2.appendChild(li);
})
city3.forEach((item3) => {
    let li = document.createElement("li");
    li.classList.add('loc__link')
    li.innerText = item3;
    list3.appendChild(li);
})

const buttonCollapse = document.querySelectorAll('.accordion-button')
const itemNotCollapsed = document.querySelectorAll('.accordion-button.collapsed')
const itemActive = document.querySelectorAll('.accordion__check')

for (let i = 0; i < itemNotCollapsed.length; i++) {
    for (let a = 0; a < itemActive.length; a++) {
        itemActive.innerHTML = '+'
    }
}

for (let p = 0; p < buttonCollapse.length; p++) {

    if (buttonCollapse[p].classList.contains('.collapsed')) {
        itemActive.innerHTML = '-'
    }
    itemActive.classList.not.contains()
}


// // console.log(itemNotCollapsed)
// // console.log(itemCollapsed)

// for (let i = 0; i < itemNotCollapsed.length; i++) {
//     for (let collapse = 0; collapse < array.length; collapse++) {
//         if (itemNotCollapsed[i].classList.contains(itemCollapsed)) {
//             console.log('True');
//         }
//     }
// }