

const navToggler = document.querySelector('.nav-toggler');
const navCollapsed = document.querySelector('.navbar-collapsed');

navToggler.addEventListener('click', ()=>{
    navCollapsed.classList.toggle('show');
    navToggler.classList.toggle('active');
})