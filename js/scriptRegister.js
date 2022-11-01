let email = document.getElementById("txtEmail");
let username = document.getElementById("txtUsername");
let password = document.getElementById("txtPassword");
let confirmPassword = document.getElementById("txtConfirmPassword");
let checkbox = document.getElementById("txtCheckbox");


function validateEmail(email){
    let emailError = document.getElementById("email-error");
    if(email.length == 0){
        emailError.innerHTML = "Input your Email!";
        return false;
    }
    else if(email[0] == '@' || email[0] == '-' || email[0] == '.' || email[0] == '_'){
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    else if(email.endsWith(".com") == false){
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

function validateUsername(username){
    let usernameError = document.getElementById("username-error");
    if(username.length == 0){
        usernameError.innerHTML = "Input your Username!";
        return false;
    }
    else if(username.length < 4){
        usernameError.innerHTML = "Username must be more than 3 words";
        return false;
    }
    usernameError.innerHTML ="";
    return true;
}

function validatePassword(password){
    let passwordError = document.getElementById("password-error");
    if(password.length == 0){
        passwordError.innerHTML = "Input your Password!";
        return false;
    }
    passwordError.innerHTML = "";
    return true;
}

function validateConfirmPassword(confirmPassword){
    let confirmError = document.getElementById("confirm-password-error");
    var password = document.getElementById("txtPassword").value;
    var passwordConfirm = document.getElementById("txtConfirmPassword").value;
    if(password != passwordConfirm){
        alert("Password Does Not Match!");
        confirmError.innerHTML = "Input your Password!";
        return false;
    }
    else if(confirmPassword.length == 0){
        alert("Please Input your Password!");
        confirmError.innerHTML = "Input your Password!";
        return false;
    }
    else{
        confirmError.innerHTML = "";
        return true;
    }
}

function validateCheckbox(checkbox){
    let checkboxError = document.getElementById("checkbox-error");
    var temp = document.getElementById("txtCheckbox").checked;
    if(temp == false){
        checkboxError.innerHTML = "Please Agree to terms and conditions!";
        return false;
    }
    else{
        checkboxError.innerHTML = "";
        return true;
    }
}

function submitForm(){
    console.log(validateEmail(email.value));
    console.log(validateUsername(username.value));
    console.log(validatePassword(password.value));
    // console.log(validateConfirmPassword(confirmPassword.value));
    console.log(validateCheckbox(checkbox.value));
    if(validateEmail(email.value) &&
    validateUsername(username.value) &&
    validatePassword(password.value) &&
    validateConfirmPassword(confirmPassword.value) &&
    validateCheckbox(checkbox.value)){
        alert("Data Valid");
        window.location.href = "homepage.html";
    }
}