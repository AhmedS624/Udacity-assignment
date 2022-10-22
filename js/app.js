/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
 const section = document.querySelectorAll('section');
 const nav = document.getElementById('navbar__list')
 
 
 
 /**
  * End Global Variables
  * Start Helper Functions
  * 
  */
 
 function inView(ele) {
     const cor = ele.getBoundingClientRect();
 
     if (cor.top >= -100 && cor.top < 400) {
         // when section in view add active class to the navbar element related to said section
         document.getElementsByClassName(ele.id)[0].classList.add('active');
         // when the section in view add active style
         ele.classList.add('your-active-class');
 
     } else {
         // remove when section is out of view
         document.getElementsByClassName(ele.id)[0].classList.remove('active');
         // when section is out of view remove the active class
         ele.classList.remove('your-active-class');
 
 
     }
 
 }
 
 /**
  * End Helper Functions
  * Begin Main Functions
  * 
  */
 
 // build the nav
 // creating li element for each section and making thier(li) text content the section's id 
 // also adding event listeners so they scroll to thier assigned section
 
 for (let i = 0; i < section.length; i++) {
     let element = section.item(i);
     const li = document.createElement('li');
     li.textContent = element.id;
     li.classList.add(element.id)
     li.addEventListener('click', function(e) {
         document.getElementById(e.target.textContent).scrollIntoView({
             behavior: 'smooth'
         });
         e.target.classList.toggle('active');
     })
     nav.appendChild(li);
 
 }
 
 
 // Add class 'active' to section when near top of viewport
 
 window.addEventListener('scroll', e => setTimeout(() => {
     section.forEach(ele => inView(ele))
 }, 500));