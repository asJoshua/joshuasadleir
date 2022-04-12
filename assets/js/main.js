var navMenu = document.getElementById('nav-menu');
var navToggle = document.getElementById('nav-toggle');
var navClose = document.getElementById('nav-close');

// Menu Show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu Hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu on Mobile
var navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    var navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))