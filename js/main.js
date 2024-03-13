// toggle icon navbar

//scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.addEventListener('scroll', () => {
  
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the appropriate navLink
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});
