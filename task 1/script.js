// Change navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.addEventListener('DOMContentLoaded', function() {
    // --- Element Selection ---
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelectorAll('.nav-item-link'); // Select all navigation links

    // --- Event Handlers ---

    /**
     * Handles the scroll effect on the navigation bar.
     * Adds a 'nav-scrolled' class when the page is scrolled down.
     */
    function handleScroll() {
        if (window.scrollY > 50) { // When scrolled more than 50px
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    }

    /**
     * Toggles the mobile navigation menu's visibility.
     */
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
    }

    /**
     * Closes the mobile navigation menu if it is currently active.
     * This is intended to be used when a navigation link is clicked.
     */
    function closeMobileMenu() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }

    // --- Event Listeners ---

    // Add scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Add click event listener to the hamburger icon
    hamburger.addEventListener('click', toggleMobileMenu);

    // Add click event listeners to each navigation link to close the menu on click
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // --- Initial State ---

    // Initial check for scroll position in case the page is loaded
    // already scrolled down.
    handleScroll();
});
