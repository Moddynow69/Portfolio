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
    if ((Math.floor(window.scrollY) >= 800 && Math.floor(window.scrollY) <= 1300) || (Math.floor(window.scrollY) >= 2800 && Math.floor(window.scrollY) <= 2900)) {
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
    if ((Math.floor(window.scrollY) >= 800 && Math.floor(window.scrollY) <= 1300) || (Math.floor(window.scrollY) >= 2800 && Math.floor(window.scrollY) <= 2900)) {
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
        window.onload = function () {
            if (window.innerWidth <= 1000) {
                Chart.defaults.font.size = 2;
            }
        }
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
ScrollReveal().reveal('.Skills_dis,.img1,home_content', { origin: 'top' });
ScrollReveal().reveal('.home_img,.img2', { origin: 'bottom' });
ScrollReveal().reveal('.con', { scale: '.1' });



// <==============navbar effect==============>

let navb = document.querySelector('#menu');

let navbar = document.querySelector('#navbarid');

navb.onclick = () => {
    navb.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// <==============scroll navbar btn color==============>
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');
let btn5 = document.getElementById('button5');
let sec = document.getElementById('home')
window.onscroll = function () {
    if(scrollY<=sec.clientHeight)
    {
        btn1.style.color='aqua';
    }
    else
    {
        btn1.style.color='white';
    }
    if(scrollY>sec.clientHeight && scrollY<=2*sec.clientHeight)
    {
        btn2.style.color='aqua';
    }
    else
    {
        btn2.style.color='white';
    }
    if(scrollY>2*sec.clientHeight && scrollY<=3*sec.clientHeight)
    {
        btn3.style.color='aqua';
    }
    else
    {
        btn3.style.color='white';
    }
    if(scrollY>3*sec.clientHeight && scrollY<=4*sec.clientHeight)
    {
        btn4.style.color='aqua';
    }
    else
    {
        btn4.style.color='white';
    }
    if(scrollY>4*sec.clientHeight && scrollY<=5*sec.clientHeight)
    {
        btn5.style.color='aqua';
    }
    else
    {
        btn5.style.color='white';
    }
}
// <==============on click effect==============>
btn3.onclick = function ()
{
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
}