const body = document.querySelector('body');
const toggle = document.querySelector('.toggle-btn');
toggle.addEventListener('click', () => {
    body.classList.toggle('white')
    body.classList.toggle('dark')
})