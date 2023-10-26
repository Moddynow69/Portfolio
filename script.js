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
        if(top >= offset && top < offset + height){
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
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
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

btnsb.onclick = () =>{
    small.style.display='none';
    big.style.display='block';
    btnbs.style.display='inline-block';
    btnsb.style.display='none';
}
btnbs.onclick = () =>{
    small.style.display='block';
    big.style.display='none';
    btnbs.style.display='none';
    btnsb.style.display='inline-block';
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