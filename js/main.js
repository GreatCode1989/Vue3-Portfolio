// toggle icon navbar

//scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.addEventListener('scroll', () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight
})

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});
