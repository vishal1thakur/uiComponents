//Variables

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');



// Left hover and release
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))


// Right hover and release
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))