// Get all project cards
const projects = document.querySelectorAll('.project');

// Function to check if an element is in the middle of the screen
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to expand project card
function expandProject() {
    projects.forEach(project => {
        if (isElementInViewport(project)) {
            project.classList.add('expanded');
        } else {
            project.classList.remove('expanded');
        }
    });
}

// Call expandProject function on scroll
window.addEventListener('scroll', expandProject);
