const path1 = 'M280-280q-83.33 0-141.67-58.28Q80-396.56 80-479.82q0-83.26 58.33-141.72Q196.67-680 280-680h400q83.33 0 141.67 58.28Q880-563.44 880-480.18q0 83.26-58.33 141.72Q763.33-280 680-280H280Zm0-40h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-.09-60q41.63 0 70.86-29.14Q380-438.28 380-479.91q0-41.63-29.14-70.86Q321.72-580 280.09-580q-41.63 0-70.86 29.14Q180-521.72 180-480.09q0 41.63 29.14 70.86Q238.28-380 279.91-380ZM480-480Z'; // OFF
const path2 = 'M280-280q-83.33 0-141.67-58.28Q80-396.56 80-479.82q0-83.26 58.33-141.72Q196.67-680 280-680h400q83.33 0 141.67 58.28Q880-563.44 880-480.18q0 83.26-58.33 141.72Q763.33-280 680-280H280Zm0-40h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm399.91-60q41.63 0 70.86-29.14Q780-438.28 780-479.91q0-41.63-29.14-70.86Q721.72-580 680.09-580q-41.63 0-70.86 29.14Q580-521.72 580-480.09q0 41.63 29.14 70.86Q638.28-380 679.91-380ZM480-480Z'; // ON

const svgElement = document.getElementById('switchSvg');
const pathElement = document.getElementById('svgpath');
const fundalAlb = document.querySelector('.fundal-alb');
const fundalNegru = document.querySelector('.fundal-negru');
const body = document.querySelector('body');
const svg = document.querySelectorAll('svg');
const scrollIcon1 = document.querySelectorAll('.scroll-icon1');
const scrollIcon2 = document.querySelectorAll('.scroll-icon2');

let currentPath = path1;
fundalNegru.classList.add('fundal-activ');

const svgElement2 = document.getElementById('switchSvg2');
const pathElement2 = document.getElementById('svgpath2');

function updateBackgroundColors() {
    const fundalSticla = document.querySelector('.currentCard');
    if (fundalSticla) {
        if (fundalNegru.classList.contains('fundal-activ')) {
            fundalSticla.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            fundalSticla.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            fundalSticla.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            fundalSticla.style.borderColor = 'rgba(0, 0, 0, 0.3)';
        }
    }
}

const logoText = document.querySelector('.logo-text');

// SCHIMBAREA CULORII PAGINII
function togglePath() {
    updateBackgroundColors();

    if (pathElement.getAttribute('d') === path1) {
        // FUNDAL ALB
        pathElement.setAttribute('d', path2);

        pathElement2.setAttribute('d', path2);

        currentPath = path2;
        fundalAlb.classList.add('fundal-activ');
        fundalNegru.classList.remove('fundal-activ');
        for (let i=0; i<svg.length; i++) {
            svg[i].style.fill = 'black';
        };
        body.style.backgroundColor = 'white';
        for (let i = 0; i < scrollIcon1.length; i++) {
            scrollIcon1[i].style.borderColor = 'black';
        }
        for (let i = 0; i < scrollIcon2.length; i++) {
            scrollIcon2[i].style.borderColor = 'black';
        }

        logoText.style.color = 'black';
    } else {
        // FUNDAL NEGRU
        pathElement.setAttribute('d', path1);

        pathElement2.setAttribute('d', path1);

        currentPath = path1;
        fundalAlb.classList.remove('fundal-activ');
        fundalNegru.classList.add('fundal-activ');
        for (let i=0; i<svg.length; i++) {
            svg[i].style.fill = 'white';
        };
        body.style.backgroundColor = 'black';
        for (let i = 0; i < scrollIcon1.length; i++) {
            scrollIcon1[i].style.borderColor = 'white';
        }
        for (let i = 0; i < scrollIcon2.length; i++) {
            scrollIcon2[i].style.borderColor = 'white';
        }

        logoText.style.color = 'white';
    }

    updateBackgroundColors();
}

svgElement.addEventListener('click', togglePath);

svgElement2.addEventListener('click', togglePath);

const homeButton = document.querySelector('.nav-bar ul li:nth-child(1)');
const homeElement = document.querySelector('.main');
const aboutButton = document.querySelector('.nav-bar ul li:nth-child(2)');
const aboutElement = document.querySelector('.about');
const contactButton = document.querySelector('.nav-bar ul li:nth-child(3)');
const contactElement = document.querySelector('.section3');
const blogButton = document.querySelector('.nav-bar ul li:nth-child(4)');
// trebuie adaugat atunci cand voi adauga sectiunea BLOG
const pts = document.querySelectorAll('.pt');

let currentIndex = 0;

function updateClasses(activeIndex) {
    updateBackgroundColors();

    homeElement.classList.toggle('active', activeIndex === 0);
    aboutElement.classList.toggle('active', activeIndex === 1);
    contactElement.classList.toggle('active', activeIndex === 2);

    pts.forEach(pt => pt.classList.remove('currentCard'));

    let activePts = [];

    if (activeIndex === 0) {
        activePts = homeElement.querySelectorAll('.pt');
    } else if (activeIndex === 1) {
        activePts = aboutElement.querySelectorAll('.pt');
    } else if (activeIndex === 2) {
        activePts = contactElement.querySelectorAll('.pt');
    }

    if (activePts.length > 0) {
        activePts[0].classList.add('currentCard');
    }

    currentIndex = 0;

    updateBackgroundColors();
}

function updateCards() {
    updateBackgroundColors();

    const activeSection = document.querySelector('.active');

    if (!activeSection) return;

    const activePts = Array.from(activeSection.querySelectorAll('.pt'));

    requestAnimationFrame(() => {
        activePts.forEach((pt, index) => {
            if (index === currentIndex) {
                pt.classList.add('currentCard');
                pt.style.visibility = 'visible';
            } else {
                pt.classList.remove('currentCard');
                pt.style.visibility = 'hidden';
            }
        });
        updateBackgroundColors();
    });

    updateBackgroundColors();
}

let scrolling = false;

const hammer = new Hammer(body);

function handleScroll(event) {
    updateBackgroundColors();

    event.preventDefault();

    if (scrolling || document.getElementById('popup').style.display === 'flex') return;
    scrolling = true;
    setTimeout(() => scrolling = false, 1000);

    const activeSection = document.querySelector('.active');
    if (!activeSection) return;

    const activePts = Array.from(activeSection.querySelectorAll('.pt'));

    if (event.deltaY > 0) {
        if (currentIndex < activePts.length - 1) {
            currentIndex++;
        } 
    } else {
        if (currentIndex > 0) {
            currentIndex--;
        }    
    }     
      
    updateCards();

    updateBackgroundColors();
}

function handleSwipe(event) {
    updateBackgroundColors();

    if (scrolling || document.getElementById('popup').style.display === 'flex') return;
    scrolling = true;
    setTimeout(() => scrolling = false, 1000);

    const activeSection = document.querySelector('.active');
    if (!activeSection) return;

    const activePts = Array.from(activeSection.querySelectorAll('.pt'));

    if (event.type === 'swiperight') {
        if (currentIndex < activePts.length - 1) {
            currentIndex++;
        }
    } else if (event.type === 'swipeleft') {
        if (currentIndex > 0) {
            currentIndex--;
        }
    }

    updateCards();
    updateBackgroundColors();
}

hammer.on('swipeleft', handleSwipe);
hammer.on('swiperight', handleSwipe);

const homeButton2 = document.querySelector('.hmbtn');
const aboutButton2 = document.querySelector('.abtbtn');
const contactButton2 = document.querySelector('.cntctbtn');

homeButton.addEventListener('click', () => {
    updateBackgroundColors();
    updateClasses(0);
    updateCards();
});

aboutButton.addEventListener('click', () => {
    updateBackgroundColors();
    updateClasses(1);
    updateCards();
});

contactButton.addEventListener('click', () => {
    updateBackgroundColors();
    updateClasses(2);
    updateCards();
});

homeButton2.addEventListener('click', () => {
    updateBackgroundColors();
    updateClasses(0);
    updateCards();
    sideMenu.classList.add('closed');
});

aboutButton2.addEventListener('click', () => {
    updateBackgroundColors();
    updateClasses(1);
    updateCards();
    sideMenu.classList.add('closed');
});

contactButton2.addEventListener('click', () => {
    updateBackgroundColors();
    updateClasses(2);
    updateCards();
    sideMenu.classList.add('closed');
});

window.addEventListener('wheel', handleScroll);

//POPUP

// Get the popup element, the close button, and the overlay
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Show the popup and overlay
function showPopup() {
    popup.style.display = 'flex';
    overlay.style.display = 'block';
}

// Hide the popup and overlay
function hidePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

showPopup();

// Close the popup and overlay when the close button is clicked
closeBtn.addEventListener('click', function() {
    hidePopup();
});

const menuButton = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.side-menu');
const sideMenuCloseButton = document.querySelector('.side-menuCloseBttn');

sideMenu.classList.add('closed');

menuButton.addEventListener('click', function() {
    sideMenu.classList.remove('closed');
})

sideMenuCloseButton.addEventListener('click', function() {
    sideMenu.classList.add('closed');
})