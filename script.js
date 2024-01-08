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

let PopEL = document.getElementById('btn-pop');
let PopParagraphEL= document.getElementById('pop-up');

PopEL.addEventListener('click', ()=>{
    PopParagraphEL.style.display = "Block";
    PopEL.style.display= "none";

PopParagraphEL.classList.remove('active');
    // console.log(PopEL);
});

// Scroll Reveal

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 200,
//     delay:200,
// }
// );

// ScrollReveal().reveal('.home-content, .heading', {origin:'top'})
// ScrollReveal().reveal('.home-img, .services-container, .portiportifio-box, .contact form', {origin:'bottom'})
// ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'})
// ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'})


//* typed Js multi-text

var typed = new Typed('.multi-text', {
    strings: ['Frontend Developer', 'MobileApp Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpedd:100,
    backDelay:1000,
    loop:true,

  });

//   contact js part
const form = document.querySelector("form");
 const fullName =document.getElementById("name");
 const email =document.getElementById("email");
 const phone =document.getElementById("phone");
const subject =document.getElementById("subject");
const mess=document.getElementById("message");

function sendEmail(){
    const bodyMessage=`Full Name:${fullName.value}<br>
    Email:${email.value}<br>  Phone number:${phone.value}<br> 
    Message:${mess.value}`;
    Email.send({
        SecureToken:"6e2bd35b-72d9-4e1b-bfda-57000ca43a43",
        To : 'colinmichelkamanda07@gmail.com',
        From : "colinmichelkamanda07@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
       message =>{
        if(message=="OK") {
            Swal.fire({
                title: "Sucess!",
                text: "Message sent successfullly!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items= document.querySelectorAll(".item");
    
    for (const item of items){
        if(item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value !=""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () =>{
            checkEmail();
        })
        item.addEventListener("keyup", () =>{
            if (item.value!=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
  
}
function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2.3})?$/;
    const errorTxtEmail = document.querySelector(".error-text.email")

    if (!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if(email.value!=""){
            errorTxtEmail.innerText = "Enter a valid email adress"
        } else{ 
            errorTxtEmail.innerText = "Email can't be blank"
        }
    } else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) =>{
   e.preventDefault();
   checkInputs();

   if(!fullName.classList.contains("error") && !email.classList.contains("error") && 
   !phone.classList.contains("error") && !subject.classList.contains("error") && 
   !mess.classList.contains("error")){
    sendEmail();
    form.reset();
    return false;
   }
})






// Host : "smtp.elasticemail.com",
// Username : "colinmichelkamanda07@gmail.com",
// Password : "BF9AC66A280F83A15367640AAACF0EFD50B4",
