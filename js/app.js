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
 * Define Global Variables
 * 
*/

const sections = document.getElementsByTagName('section');
const navbar__list = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function isElementInViewport (el) {

    // method returns the size of an element
    // and its position relative to the viewport
    var domRect = el.getBoundingClientRect();

    return (
        domRect.top >= 0 &&
        domRect.left >= 0 &&
        domRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        domRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();

// traditional for loop is used so the index can be added to the href attribute
for(let i = 0; i < sections.length; i++){
    let section = sections[i];
    let index = i + 1;
    let title = section.querySelector('h2').textContent;
    let listElement = document.createElement('li');

    // create anchor tag and with section title text
    let anchor = document.createElement('a');
    anchor.setAttribute('href', '#section' + index);
    anchor.classList.add('menu__link');
    anchor.textContent = title;

    // append anchor to list element, and list element to document fragment
    listElement.appendChild(anchor);
    fragment.appendChild(listElement);
}

navbar__list.appendChild(fragment);



// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function() {
    for(section of sections){
        if(isElementInViewport(section)){
            section.classList = "your-active-class";
        } else {
            section.classList = "";
        }
    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

