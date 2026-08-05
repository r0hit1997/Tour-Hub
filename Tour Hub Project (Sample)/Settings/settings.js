const form = document.getElementById("settingsForm");

// Load Settings

const settings =
JSON.parse(localStorage.getItem("settings")) || {};

darkMode.checked =
settings.darkMode || false;

themeColor.value =
settings.theme || "#0d6efd";

language.value =
settings.language || "English";

emailNotification.checked =
settings.email ?? true;

smsNotification.checked =
settings.sms ?? false;

// Apply Saved Theme

document.documentElement.style.setProperty(
"--bs-primary",
themeColor.value
);

if(darkMode.checked){

document.body.classList.add("dark");

}

// Save Settings

form.addEventListener("submit",function(e){

e.preventDefault();

if(newPassword.value!==confirmPassword.value){

alert("Passwords do not match");

return;

}

const data={

darkMode:darkMode.checked,

theme:themeColor.value,

language:language.value,

email:emailNotification.checked,

sms:smsNotification.checked

};

localStorage.setItem(
"settings",
JSON.stringify(data)
);

document.documentElement.style.setProperty(
"--bs-primary",
themeColor.value
);

if(darkMode.checked){

document.body.classList.add("dark");

}else{

document.body.classList.remove("dark");

}

alert("Settings Saved Successfully");

});

// Clear Storage

clearStorage.onclick=function(){

if(confirm("Clear all Local Storage data?")){

localStorage.clear();

alert("Local Storage Cleared");

location.reload();

}

}

// Reset App

resetApp.onclick=function(){

if(confirm("Reset TourHub Application?")){

localStorage.clear();

sessionStorage.clear();

location.reload();

}

}