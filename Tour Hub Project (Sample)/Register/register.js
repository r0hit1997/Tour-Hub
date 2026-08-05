const form=document.getElementById("registerForm");

const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const mobile=document.getElementById("mobile");
const password=document.getElementById("password");
const confirm=document.getElementById("confirmPassword");

const show=document.getElementById("showPassword");

show.onclick=function(){

password.type=password.type==="password"?"text":"password";

}

form.addEventListener("submit",function(e){

e.preventDefault();

document.querySelectorAll("small").forEach(s=>s.innerHTML="");

let valid=true;

const nameRegex=/^[A-Za-z ]{3,}$/;
const emailRegex=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const mobileRegex=/^[6-9]\d{9}$/;

if(!nameRegex.test(fname.value)){

fnameError.innerHTML="Invalid First Name";

valid=false;

}

if(!nameRegex.test(lname.value)){

lnameError.innerHTML="Invalid Last Name";

valid=false;

}

if(!emailRegex.test(email.value)){

emailError.innerHTML="Invalid Email";

valid=false;

}

if(!mobileRegex.test(mobile.value)){

mobileError.innerHTML="Invalid Mobile Number";

valid=false;

}

if(password.value.length<6){

passwordError.innerHTML="Minimum 6 characters";

valid=false;

}

if(password.value!==confirm.value){

confirmError.innerHTML="Passwords do not match";

valid=false;

}

if(valid){

const consultant={

fname:fname.value,
lname:lname.value,
email:email.value,
mobile:mobile.value,
gender:gender.value,
dob:dob.value,
address:address.value

};

localStorage.setItem("consultantProfile",JSON.stringify(consultant));

alert("Registration Successful");

window.location.href="login.html";

}

});