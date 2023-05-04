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
if (scrollY >= (1.5) * sec.clientHeight && scrollY <= (3) * sec.clientHeight) {
    graph();
}
let mybutton = document.getElementById("myBtn");

// <==============Scroll effect==============>

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.about_content,.contacticon,.emailcon', { origin: 'top',scale: '.1' });
ScrollReveal().reveal('.Skills_dis,.img1,home_content,.topicproject', { origin: 'top' });
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
if (window.scrollY < sec.clientHeight) {
    btn1.style.color = 'aqua';
}
else {
    btn1.style.color = 'white';
}
if (scrollY >= sec.clientHeight && scrollY < 2 * sec.clientHeight) {
    btn2.style.color = 'aqua';
}
else {
    btn2.style.color = 'white';
}
if (scrollY >= 2 * sec.clientHeight && scrollY < 3 * sec.clientHeight) {
    btn3.style.color = 'aqua';
}
else {
    btn3.style.color = 'white';
}
if (scrollY >= 3 * sec.clientHeight && scrollY < 4 * sec.clientHeight) {
    btn4.style.color = 'aqua';
}
else {
    btn4.style.color = 'white';
}
if (scrollY >= 4 * sec.clientHeight) {
    btn5.style.color = 'aqua';
}
else {
    btn5.style.color = 'white';
}
if (window.scrollY > 20) {
    mybutton.style.display = "block";
}
else {
    mybutton.style.display = "none";
}
window.onscroll = function () {
    if (window.scrollY <= (1.5) * sec.clientHeight || window.scrollY >= (3) * sec.clientHeight) {
        graph();
    }
    if (window.scrollY < sec.clientHeight) {
        btn1.style.color = 'aqua';
    }
    else {
        btn1.style.color = 'white';
    }
    if (scrollY >= sec.clientHeight && scrollY < 2 * sec.clientHeight) {
        btn2.style.color = 'aqua';
    }
    else {
        btn2.style.color = 'white';
    }
    if (scrollY >= 2 * sec.clientHeight && scrollY < 3 * sec.clientHeight) {
        btn3.style.color = 'aqua';
    }
    else {
        btn3.style.color = 'white';
    }
    if (scrollY >= 3 * sec.clientHeight && scrollY < 4 * sec.clientHeight) {
        btn4.style.color = 'aqua';
    }
    else {
        btn4.style.color = 'white';
    }
    if (scrollY >= 4 * sec.clientHeight) {
        btn5.style.color = 'aqua';
    }
    else {
        btn5.style.color = 'white';
    }
    if (window.scrollY > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
    btn1.onmouseover = function () {
        btn1.style.color = 'aqua';
    };
    btn1.onmouseleave = function () {
        if (window.scrollY > sec.clientHeight) {
            btn1.style.color = 'white';
        }
    };
    btn2.onmouseover = function () {
        btn2.style.color = 'aqua';
    };
    btn2.onmouseleave = function () {
        if (scrollY <= sec.clientHeight || scrollY > 2 * sec.clientHeight) {
            btn2.style.color = 'white';
        }
    }
    btn3.onmouseover = function () {
        btn3.style.color = 'aqua';
    };
    btn3.onmouseleave = function () {
        if (scrollY <= 2 * sec.clientHeight || scrollY > 3 * sec.clientHeight) {
            btn3.style.color = 'white';
        }
    };
    btn4.onmouseover = function () {
        btn4.style.color = 'aqua';
    };
    btn4.onmouseleave = function () {
        if (scrollY <= 3 * sec.clientHeight || scrollY > 4 * sec.clientHeight) {
            btn4.style.color = 'white';
        }
    };
    btn5.onmouseover = function () {
        btn5.style.color = 'aqua';
    };
    btn5.onmouseleave = function () {
        if (scrollY <= 4 * sec.clientHeight) {
            btn5.style.color = 'white';
        }
    };
}
// <==============on click effect==============>
btn3.onclick = function () {
    graph();
}
btn1.onmouseover = function () {
    btn1.style.color = 'aqua';
};
btn1.onmouseleave = function () {
    if (window.scrollY > sec.clientHeight) {
        btn1.style.color = 'white';
    }
};
btn2.onmouseover = function () {
    btn2.style.color = 'aqua';
};
btn2.onmouseleave = function () {
    if (scrollY <= sec.clientHeight || scrollY > 2 * sec.clientHeight) {
        btn2.style.color = 'white';
    }
}
btn3.onmouseover = function () {
    btn3.style.color = 'aqua';
};
btn3.onmouseleave = function () {
    if (scrollY < 2 * sec.clientHeight || scrollY >= 3 * sec.clientHeight) {
        btn3.style.color = 'white';
    }
};
btn4.onmouseover = function () {
    btn4.style.color = 'aqua';
};
btn4.onmouseleave = function () {
    if (scrollY < 3 * sec.clientHeight || scrollY >= 4 * sec.clientHeight) {
        btn4.style.color = 'white';
    }
};
btn5.onmouseover = function () {
    btn5.style.color = 'aqua';
};
btn5.onmouseleave = function () {
    if (scrollY < 4 * sec.clientHeight) {
        btn5.style.color = 'white';
    }
};


// <==============on click contact==============>

let atrate = document.getElementById('atrate');
let dise1 = document.getElementById('dise1');
let dise2 = document.getElementById('dise2');
let backg = document.getElementById('emailcon');
atrate.onmouseover= function () 
{
    dise1.style.visibility='visible';
    dise2.style.visibility='visible';
    backg.style.backgroundColor='white';
    dise1.style.color='aqua';
    atrate.style.color='aqua';
    atrate.style.color='aqua';
    dise2.style.color='aqua';
}
let text = "tusharkaler450@gmail.com";

atrate.onclick = function ()
{
    navigator.clipboard.writeText(text);
    document.getElementById('contact').innerHTML+=
    `
    <div id="msg">Copied to Clipboard</div>
    
    `
}
atrate.onmouseleave= function () 
{
    dise1.style.visibility='hidden';
    dise2.style.visibility='hidden';
    backg.style.backgroundColor='transparent';
    atrate.style.color='white';
}