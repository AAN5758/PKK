var passwordToogleIcon = document.getElementById('toggleIcon');
var password = document.getElementById('password');
var hidden = true;

passwordToogleIcon.addEventListener('click', function () {
    if (hidden) {
        password.type = 'text';
        passwordToogleIcon.innerHTML = '&#xe8f4;';
        hidden = false
    }
    else {
        password.type = 'password';
        passwordToogleIcon.innerHTML = '&#xe8f5;';
        hidden = true;
    }
});

var passwordToogleIcon2 = document.getElementById('toggleIcon-2');
var password2 = document.getElementById('confirm-password');
var hidden2 = true;

passwordToogleIcon2.addEventListener('click', function () {
    if (hidden2) {
        password2.type = 'text';
        passwordToogleIcon2.innerHTML = '&#xe8f4;';
        hidden2 = false
    }
    else {
        password2.type = 'password';
        passwordToogleIcon2.innerHTML = '&#xe8f5;';
        hidden2 = true;
    }
});

function login(){
    window.location.href="home";
}