////////////////////////////// EXPAND CURRENT PROJECT CARD
const projects = document.querySelectorAll('.project');
// check if element is in the middle of the screen
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// expanding the project card if it is in middle of screen:3
function expandProject() {
    projects.forEach(project => {
        if (isElementInViewport(project)) {
            project.classList.add('expanded');
        } else {
            project.classList.remove('expanded');
        }
    });
}
window.addEventListener('scroll', expandProject);

////////////////////////////////// MOVING HEADER WHILE SCROLLING 
var header = document.querySelector('.header');
var headerPosition = header.offsetTop;

function handleScroll() { // function to check whether header is in place or not
    if (window.pageYOffset > headerPosition) {
        header.classList.add('fixed-header'); // if it is, fix the header at the top of the page
    } else {
        header.classList.remove('fixed-header'); // if not, return the header to its original position
    }
}
window.addEventListener('scroll', handleScroll);


////////////////////////////// SMOOTH SCROLL TO FUNCTIONS
function smoothScroll(target) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetElement = document.querySelector(target);
    const offsetTop = targetElement.offsetTop - headerHeight; // header height - target's offset

    const additionalOffset = 70; // ADJUST

    window.scroll({
        top: offsetTop - additionalOffset, // Subtract additional offset
        behavior: 'smooth'
    });
}
const navLinks = document.querySelectorAll('.nav-button'); // all header's navigation links

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});
