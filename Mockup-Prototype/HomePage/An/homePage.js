//Login form
const login = document.getElementById('login');
const loginSignIn = document.getElementById('login-sign-in');
const loginSignUp = document.getElementById('login-sign-up');

//Button Login
const btnSignIn = document.getElementById('btn-sign-in');
const btnSignUp = document.getElementById('btn-sign-up');

//Button success sign up
const successbtnSignUp = document.getElementById('btn-success-sign-up');

//Input form sign up
const inputFullname = document.getElementById('input-fullname');
const inputEmail = document.getElementById('input-email');
const inputConformEmail = document.getElementById('input-conform-email');
const inputPhone = document.getElementById('input-phone');
const inputPassword = document.getElementById('input-password-sign-up');

//Input form sign in
const inputLoginUsername = document.getElementById('input-username');
const inputLoginPassword = document.getElementById('input-password');

//Save information on localstorage
let InformationLogin;
let data = localStorage.getItem('InformationLogin');
if(data) {
    InformationLogin = JSON.parse(data);
}
else {
    InformationLogin = [];
}

login.onclick = () => {
    if(loginSignIn.style.display) {
        loginSignIn.style.display = 'flex';
    }
}

successbtnSignUp.onclick = () => {
    if(inputFullname.value && inputEmail.value && inputConformEmail.value && inputPhone.value && inputPassword.value && inputEmail.value == inputConformEmail.value) {
        InformationLogin.push({
            'Fullname' : inputFullname.value,
            'Email' : inputEmail.value,
            'Phone' : inputPhone.value,
            'Password' : inputPassword.value
        });
        localStorage.setItem('InformationLogin' ,JSON.stringify(InformationLogin));
        alert('Register an account successfully, please login');
        loginSignIn.style.display = 'flex';
        loginSignUp.style.display = 'none';
    }
}

btnSignUp.onclick = () => {
    if(loginSignIn.style.display == 'flex') {
        loginSignIn.style.display = 'none';
        loginSignUp.style.display = 'flex';
    }
}

btnSignIn.onclick = () => {
    for(let i = 0; i < InformationLogin.length; i++) {
        if(inputLoginUsername.value == InformationLogin[i].Email || inputLoginUsername.value == InformationLogin[i].Phone && inputLoginPassword.value == InformationLogin[i].Password) {
            login.innerHTML = '';
            login.innerHTML = `<img src="./images/login.png" width="50vh" height="50vh" alt="">`;
            loginSignIn.style.display = 'none';
            loginSignUp.style.display = 'none';
            login.disabled = 'disabled';
            return;
        } else {
            alert('The account or password is incorrect, please enter again');
            return;
        }
    }
}