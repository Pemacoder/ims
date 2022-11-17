const form = document.querySelector('.change-password');
const oldPassword = document.getElementById('oldPassword');
const newPassword = document.getElementById('newPassword');
const confirmPass = document.getElementById('confirmPass');
const passwordE2 = document.querySelector('#password');
const passwordE1 = document.querySelector('#pass');

form.addEventListener("submit",function(e) {
    e.preventDefault();

    let isOldPasswordValid = checkOldPassword(),
        isNewPasswordValid = checkNewPassword(),
        isNewPasswordMatching = confirmNewPassword()
    let isFormValid = isOldPasswordValid && isNewPasswordValid && isNewPasswordMatching;
    if(isFormValid){
        
    }
})

function checkOldPassword(){
    let valid = false;
    let oldPass = oldPassword.value.trim();
    if(!isRequired(oldPass)){
        showError(oldPassword,'You have to give current password.')
    }
    else if(!isOldPasswordSame()){
        showError(oldPassword,'The current password is incorrect.')
    }
    else {
        showSuccess(oldPassword) 
        valid = true;   
    }
    return valid;
  
}

function isOldPasswordSame(){
    if(oldPassword.value === passwordE1.value || passwordE2.value){
        return true;
    }
}

let isRequired = value => value=== ''?false:true;

let showError = (input, message) => {
    let formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");

    const error = formField.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");

    formField.querySelector("small").textContent = "";
}