const form = document.querySelector('.change-password');
const oldPassword = document.getElementById('oldPassword');
const newPasswd = document.getElementById('newPassword');
const confirmNewPasswd = document.getElementById('confirmPass');

form.addEventListener("submit",function(e) {
    e.preventDefault();

    let isOldPasswordValid = checkOldPassword(),
        isNewPasswordValid = checkNewPassword(),
        isNewPasswordMatching = confirmNewPassword();
    let isFormValid = isOldPasswordValid && isNewPasswordValid && isNewPasswordMatching;
    if(isFormValid){
        
    }
})

function checkOldPassword(){
    let valid = false;
    let oldPass = oldPassword.value.trim();
    if(!isRequired(oldPass)){
        showError(oldPassword,'You have to give the current password.')
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
const pass = 'Password2002@'
function isOldPasswordSame(){
    if(oldPassword.value === pass){
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

const isPasswordStrong = (newPassword)=>{
    const re = 
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(newPassword);
}
function checkNewPassword(){
    let valid = false;
    const newPassword = newPasswd.value.trim();
    if(!isRequired(newPassword)){
        showError(newPasswd,'You have to give a new password')
    }
    else if(isPasswdRepeating()){
        showError(newPasswd,'Previous password will not work.')
    }
    else if(!isPasswordStrong(newPassword)){
    showError(newPasswd,"Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character ");
    }
    else{
        showSuccess(newPasswd)
        valid = true;
    }
    return valid;
}
function confirmNewPassword(){
    let valid = false;
    const passwordCheck = confirmNewPasswd.value.trim();
    if(!isRequired(passwordCheck)){
        showError(confirmNewPasswd,"You will have to confirm Password to proceed");
    }
    else if(!passwordMatch()){
        showError(confirmNewPasswd,"Password is not matching");
    }
    else {
        showSuccess(confirmNewPasswd);
        valid = true;
    }
    return valid;
} 
const passwordMatch = () => {
    if(newPasswd.value == confirmNewPasswd.value){
        return true;
    }
}

const isPasswdRepeating = () => {
    if(newPasswd.value === oldPassword.value){
        return true;
    }
}