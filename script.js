
const btn = document.querySelector("#submitBtn");
let passwordValidation = document.querySelector("#passwordValidation");
let confirmPassword = document.querySelector("#confirm-password");
let password = document.querySelector("#password");

password.addEventListener("keyup",()=>{
    password = document.querySelector("#password").value;
})


confirmPassword.addEventListener("keyup",()=>{
    confirmPassword = document.querySelector("#confirm-password").value;
    if(confirmPassword === password){
        passwordValidation.style.color="green";
        passwordValidation.textContent = "Passwords match";
    }else{
        passwordValidation.style.color="red"
        passwordValidation.textContent = "Passwords do not match";
    }});



