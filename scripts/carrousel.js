// EF'RIDE - scripts/carrousel.js
//

const pictures = {
    'Roller': [
        'img/sports/roller (1).png',
        'img/sports/roller (2).png',
        'img/sports/roller (3).png',
        'img/sports/roller (4).png',
        'img/sports/roller (5).png',
    ],
    'Cyclisme': [
        'img/sports/cyclisme (7).png',
        'img/sports/cyclisme (10).png',
        'img/sports/cyclisme (11).png',
        'img/sports/cyclisme (12).png',
        'img/sports/cyclisme (13).png',
        'img/sports/roller (1).png',
    ],
    'Skateboard': [
        'img/sports/skateboard (1).png',
        'img/sports/skateboard (2).png',
        'img/sports/skateboard (3).png',
        'img/sports/skateboard (4).png',
        'img/sports/skateboard (5).png',
    ],
}
const sport = document.getElementsByTagName('h1')[0].textContent;
const sportPictures = pictures[sport];
const sportPicturesLength = sportPictures.length;
const PicturesContainer = document.querySelector('.sport-slides');
const DotContainer = document.querySelector('.dots');

const carroussel = document.querySelector('.sp-carroussel');
let slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let dots = document.querySelectorAll('.dot');
let index = 0;

function loadSlides() {
    for (let i = 0; i < sportPicturesLength; i++) {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (i === 0) { slide.classList.add('active'); }
        //add image to slide
        const img = document.createElement('img');
        img.src = sportPictures[i];
        img.alt = 'image' + sport + i;
        slide.appendChild(img);

        PicturesContainer.appendChild(slide);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.classList.add('dot'+i);
        if (i === 0) { dot.classList.add('active'); }
        DotContainer.appendChild(dot);
    }
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');
}

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

// onload, loadPictures
window.onload = (event) => {
    loadSlides();
}


if (next) { next.addEventListener('click', nextSlide); }
if (prev) { prev.addEventListener('click', prevSlide); }

// setInterval(nextSlide, 5000);F