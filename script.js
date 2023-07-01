// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
});


// scroll section active link

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');



window.onscroll= ()=>{
     sections.forEach(sec=>{
          let top=window.scrollY;
          let offset =sec.offsetTop-50;
          let height= sec.offsetHeight;
          let id=sec.getAttribute('id');

          if( top >= offset && top < offset + height)  {
               navlinks.forEach(links =>{
links.classList.remove('active');
document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
               });

          };
     });
     // scroll section active link end here

     // sticky nav start from here

     let header=document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
/********** remove togglr icon and navbar when click navbar link*********/


navlinks.forEach((link) => {
     link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
});
  });

};


