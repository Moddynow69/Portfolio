// <==============Graphs==============>
var xValues = ["C", "C++", "Python", "HTML/CSS", "JS"];
var yValues = [55, 49, 44, 24, 35];
var barColors = [
    "#171716",
    "#2e2e2c",
    "#5c5b58",
    "#a0a099",
    "#a0a099"
];
var canva1 = document.getElementById('myChart1');
var canva2 = document.getElementById('myChart2');
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    console.log(window.scrollY);
    if ((Math.floor(window.scrollY) >= 800 && Math.floor(window.scrollY) <= 1300)|| (Math.floor(window.scrollY)>=2800&&Math.floor(window.scrollY)<=2900)) {
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
    }
    if ((Math.floor(window.scrollY) >= 800 && Math.floor(window.scrollY) <= 1300)|| (Math.floor(window.scrollY)>=2800&&Math.floor(window.scrollY)<=2900)) {
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
    }

// <==============Top Button==============>

    if (window.scrollY > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

// <==============Scroll effect==============>

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.about_content', { origin: 'top' });
ScrollReveal().reveal('.Skills_dis,.img1,home_content', { origin: 'left' });
ScrollReveal().reveal('.home_img,.img2', { origin: 'right' });
ScrollReveal().reveal('.con', { scale: '.1' });



// <==============navbar effect==============>

let navb = document.querySelector('#menu');

let navbar = document.querySelector('.navbar');

navb.onclick = () => {
 navb.classList.toggle('bx-x');
 navbar.classList.toggle('active');
};