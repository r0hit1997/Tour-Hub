const form=document.getElementById("loginForm");

const email=document.getElementById("email");

const password=document.getElementById("password");

const emailError=document.getElementById("emailError");

const passwordError=document.getElementById("passwordError");

const toggle=document.getElementById("togglePassword");

// Show / Hide Password

toggle.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

toggle.innerHTML='<i class="bi bi-eye-slash"></i>';

}else{

password.type="password";

toggle.innerHTML='<i class="bi bi-eye"></i>';

}

});

// Login Validation

form.addEventListener("submit",(e)=>{

e.preventDefault();

emailError.innerHTML="";

passwordError.innerHTML="";

let valid=true;

const emailRegex=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailRegex.test(email.value.trim())){

emailError.innerHTML="Enter a valid email";

valid=false;

}

if(password.value.length<6){

passwordError.innerHTML="Minimum 6 characters";

valid=false;

}

if(valid){

localStorage.setItem("consultant",email.value);

alert("Login Successful");

window.location.href="index.html";

}

});