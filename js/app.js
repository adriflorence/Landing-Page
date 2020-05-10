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
 * All content sourced from: https://stackify.com/solid-design-principles/
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.getElementsByTagName('section');
const navbar = document.getElementById('navbar__list');

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

// scroll to top button on the page once user is below the fold
function isPassedFold(){
    document.addEventListener('scroll', function() {
        let fold = document.body.clientHeight / 2;
        let user_location = window.innerHeight + window.scrollY;
        let toTopButton = document.getElementById('to_top');
        if (user_location > fold) {
            toTopButton.style.display = "block";
        } else {
            toTopButton.style.display = "none";
        }
    });
}

// Scroll to top of the page
// Source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function backToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll to section on link click using scrollTO event
function scrollToElement() {
    navbar.addEventListener('click', function (event) {
        console.log(event);
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu(){
    const fragment = document.createDocumentFragment();

    for(const section of sections){
        let title = section.querySelector('h2').textContent;
        let listElement = document.createElement('li');
    
        // create anchor tag and with section title text
        let anchor = document.createElement('a');
        anchor.classList.add('menu__link');
        anchor.dataset.nav = section.id;
        anchor.textContent = title;
    
        // append anchor to list element, and list element to document fragment
        listElement.appendChild(anchor);
        fragment.appendChild(listElement);
    }
    
    navbar.appendChild(fragment);
}

// Add a scroll to top button on the page
// that’s only visible when the user scrolls below the fold
const toTopButton = document.getElementById('to_top');
toTopButton.onclick = function() { backToTop() };



// Add functionality to distinguish the section in view
// Add class 'active' to section when near top of viewport
function setActive() {
    document.addEventListener('scroll', function() {
        for(section of sections){
            if(isElementInViewport(section)){
                section.classList = "your-active-class";
            } else {
                section.classList = "";
            }
        }
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildMenu();

// Scroll to section on link click
scrollToElement();

// Set sections as active
setActive();

// Scroll to top button
isPassedFold();