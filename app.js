const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    });
    //animate link
    /* navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
    }) */
}

navSlide(); 

// When the user scrolls the page, execute stickyBar 
window.onscroll = function() {stickyBar()};

// Get the navbar
const navbar = document.getElementById('navbar');

// Get the offset position of the navbar 
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
function stickyBar() {
if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    } else {
            navbar.classList.remove('sticky');
          }
      }