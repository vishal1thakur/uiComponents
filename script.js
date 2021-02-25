const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password confirmation');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);       
    } else {
        showError(input,`Email is not valid`)
    };
};

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    })
}

// Check Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atlest ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be more than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

// Check password match
function passwordMatch(p1, p2) {
    if (p1.value !== p2.value) {
        showError(p2, `Passwords dont match`);
    };
};

// Make first word of the input uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 15);
    isValidEmail(email);
    passwordMatch(password, password2);
    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid')
    // }
    // else {
    //     showSuccess(email);
    // }
    // if (password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password);
    // }
    // if (password2.value === '') {
    //     showError(password2, 'Password confirmation is required');
    // } else {
    //     showSuccess(password2);
    // }
});