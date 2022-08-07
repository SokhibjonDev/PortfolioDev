const body = document.querySelector('body');
const toggle = document.querySelector('.toggle-btn');

toggle.addEventListener('click', () => {
    if (body.className === '.dark') {
        body.classList.remove('.dark')
        body.classList.add('.white')
    } else if (body.className === '.white') {
        body.classList.remove('.white')
        body.classList.add('.dark')
    }else{
        body.className = '.dark';
    }
})