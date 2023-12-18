//<-----------------cursor----------------->

const cursor = document.getElementById("cursor-custom"),
  radius = cursor.offsetHeight / 2;

document.addEventListener("mousemove", (e) => {
  let top = e.clientY - radius,
    left = e.clientX - radius;

  cursor.style = `top: ${top}px; left: ${left}px`;
});

// <--------------Preloader--------------->
let preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    preloader.classList.toggle('overlay');
});


var xValues = ["C/C++", "HTML/CSS", "JS", "Photoshop/Illustrator", "Video Editing"];
var yValues = [2, 12, 6, 8, 15, 0, 0];
var barColors = [
    "#E7E6DD",
    "#B9B8B1",
    "#94938E",
    "#767672",
    "#5E5E5B",
    "#4B4B49",
    "#3C3C3A",
    "#30302E",
    "#262625",
    "#1E1E1E",
    "Black"
];
var canva1 = document.getElementById('myChart1');
var canva2 = document.getElementById('myChart2');
function graph() {
    new Chart("myChart1", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: ""
            }
        }
    });
    new Chart("myChart2", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: ""
            }
        }
    });
};
let sec = document.getElementById('home');

// <==============Graphs==============>
graph();
let mybutton = document.getElementById("myBtn");


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({
    distance: '100px',
    duration: 2600,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading , .lowerAbout', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form , #myimg , .headcon', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ,.skills-box , .home-content p, .about-content ,.me', { origin: 'left' });
const typed = new Typed('.multiple-text', {
    strings: ['MERN Developer', 'React Native Developer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let small = document.getElementById('small')
let big = document.getElementById('big')
let btnsb = document.getElementById('btnsb');
let btnbs = document.getElementById('btnbs');

btnsb.onclick = () => {
    small.style.display = 'none';
    big.style.display = 'block';
    btnbs.style.display = 'inline-block';
    btnsb.style.display = 'none';
}
btnbs.onclick = () => {
    small.style.display = 'block';
    big.style.display = 'none';
    btnbs.style.display = 'none';
    btnsb.style.display = 'inline-block';
}



// <==============on click contact==============>

let atrate = document.getElementById('atrate');
let text = "tusharkaler450@gmail.com";

atrate.onclick = function () {
    navigator.clipboard.writeText(text);
    document.getElementById('msgcon').style.display = 'block';
    setTimeout(visiblenot, 3000);
}
function visiblenot() {
    document.getElementById('msgcon').style.display = 'none';
}


// <==============on click contact==============>

let btn = document.getElementById('switch');
let body = document.querySelector('body');
btn.addEventListener('click', () => {
    body.classList.toggle('light');
});
let btnG = document.getElementById('Cswitch1');
let btnR = document.getElementById('Cswitch2');
let btnB = document.getElementById('Cswitch3');
btnG.addEventListener('click', () => {
    body.classList.toggle('greenMode');
    if (body.classList.contains('redMode')) {
        body.classList.toggle('redMode');
    }
    if (body.classList.contains('blueMode')) {
        body.classList.toggle('blueMode');
    }
});
btnR.addEventListener('click', () => {
    body.classList.toggle('redMode');
    if (body.classList.contains('greenMode')) {
        body.classList.toggle('greenMode');
    }
    if (body.classList.contains('blueMode')) {
        body.classList.toggle('blueMode');
    }
});
btnB.addEventListener('click', () => {
    body.classList.toggle('blueMode');
    if (body.classList.contains('greenMode')) {
        body.classList.toggle('greenMode');
    }
    if (body.classList.contains('redMode')) {
        body.classList.toggle('redMode');
    }
});



// <==============on cursor movement==============>

let constrain = 80;
let mouseOverContainer = document.getElementById("hi2");
let ex1Layer = document.getElementById("myimg");

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    return "perspective(1200px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    window.requestAnimationFrame(function () {
        transformElement(ex1Layer, position);
    });
};