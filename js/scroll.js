window.addEventListener('scroll',function(){
    let header = document.getElementById('header');
    let nav = document.getElementById('nav');
    let skills = document.getElementById('skills');
    let lineScroll = document.querySelector('.line-scroll');
    let posicionHeader = header.getBoundingClientRect().bottom;
    let posicionSkills = skills.getBoundingClientRect().bottom;

    let navItem = [...document.querySelectorAll('.nav-item')];

    let tamañoDePantalla = window.innerHeight/4;
    if (posicionHeader < tamañoDePantalla){
        nav.classList.add('nav--activate');
        navItem[0].style.color = '#000';
        navItem[1].style.color = '#aaa';

    }
    if (posicionHeader > tamañoDePantalla){
        nav.classList.remove('nav--activate');

    }
    if (posicionSkills < 30){
        lineScroll.classList.add('line-scroll--projects');
        navItem[0].style.color = '#aaa';
        navItem[1].style.color = '#000';
    }

    if (posicionSkills > 30){
        lineScroll.classList.remove('line-scroll--projects');
    }
    
    

    
})