// Card Variable
const boxes = document.querySelectorAll('.box')

//Event Listener
window.addEventListener('scroll', checkBoxes);

// Call function
checkBoxes()


// Function
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}