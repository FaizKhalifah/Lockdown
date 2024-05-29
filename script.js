document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.classList.add('toggle-button');
    nav.prepend(toggleButton);

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // scroll 
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.querySelector(`.${targetId}`);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Close the menu on mobile after clicking a link
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
});
