// toggle icon navbar
let menuIcone= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcone.onclick = ()=>{
    menuIcone.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}


// menuIcone.addEventListener('click', ()=>{
//     menuIcone='fa fa-x';
//     navbar='active';
// })

// scroll sections active Links

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' header nav a ');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
        if(top>=  offset && top< offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                // document.querySelector('header nav a [href*='+ id +']').classList.add('active');
            });
        };
    });
    menuIcone.classList.remove('fa-x');
    navbar.classList.remove('active');

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link

}


// Scroll Reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 200,
    delay:200,
}
);

ScrollReveal().reveal('.home-content, .heading', {origin:'top'})
ScrollReveal().reveal('.home-img, .services-container, .portiportifio-box, .contact form', {origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'})


//* typed Js multi-text

const typed = new typed('multi-text', {
    Strings: ['Frontend Develloper', 'MobileApp Develloper', 'Graphic Design', ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
})