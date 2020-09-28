(function() {
    const navbar = document.querySelector('.navbar');
    const button = navbar.querySelector('.menu');
    const nav = navbar.querySelector('.navlinks');
    const navLinks = nav.querySelectorAll('li a');

    button.onclick = () => {
        navbar.classList.toggle('active');

        const expanded = nav.getAttribute('aria-expanded');
        nav.setAttribute('aria-expanded', expanded === 'false');
    };

    const forEach = Array.prototype.forEach;
    forEach.call(navLinks, (link) => {
        link.onclick = () => {
            navbar.classList.remove('active');
            nav.setAttribute('aria-expanded', 'false');
        };
    });
})();