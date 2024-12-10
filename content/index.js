/*---active-link js start---*/
const navLinks = document.querySelectorAll('.nav-links a');
function setActiveLink(event) {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    event.target.classList.add('active-link');
}
navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});
/*---active-link js end---*/
