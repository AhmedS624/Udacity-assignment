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

function inView (ele){
    const cor = ele.getBoundingClientRect();

    if(cor.top >= -100 && cor.top < 400){
        document.getElementsByClassName(ele.id)[0].classList.add('active');
    }else{
        document.getElementsByClassName(ele.id)[0].classList.remove('active');
        
    }
    
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let i = 0; i < section.length; i++) {
    const element = section.item(i);
    let li = document.createElement('li');
    li.textContent = element.id;
    li.classList.add(element.id)
    li.addEventListener('click',function(e){
        document.getElementById(e.target.textContent).scrollIntoView({behavior:'smooth'});
        e.target.classList.toggle('active');
    })
    nav.appendChild(li);
    
}


// Add class 'active' to section when near top of viewport

window.addEventListener('scroll',e => setTimeout(() => {section.forEach(ele => inView(ele))},500 ));

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


