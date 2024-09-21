const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;    // parentElement: div part
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;    // parentElement: div part
    formControl.className = 'form-control success';      
}

//Check email is valid
function isValidEmail(email) {
    // [link for regular format for email checking] https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === ''){
        showError(username, "Username is required");
        //alert('Username is required');    // using pop-up to show the message
    } else {
        showSuccess(username);
    }
    //console.log(username.value);

    if(email.value === ''){
        showError(email, "Email is requireed");
    }else if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } 
    else {
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, "password is requireed");
    } else {
        showSuccess(password);
    }

    if (password2.value === ''){
        showError(password2, "password is required");
    }
    if(password2.value === ''){
        showError(password2, "password is required");        
    }else if(password2.value === password.value){
        showSuccess(password2);
    } 
    else {
        showError(password2, "password is not matched");        
    }
})

