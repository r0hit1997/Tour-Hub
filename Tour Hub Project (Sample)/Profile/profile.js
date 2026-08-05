const form = document.getElementById("profileForm");

const profile =
JSON.parse(localStorage.getItem("consultantProfile")) || {};

firstName.value = profile.fname || "";
lastName.value = profile.lname || "";
email.value = profile.email || "";
phone.value = profile.mobile || "";
address.value = profile.address || "";
city.value = profile.city || "";
country.value = profile.country || "";

displayName.innerHTML =
(profile.fname || "Travel") + " " +
(profile.lname || "Consultant");

form.addEventListener("submit",function(e){

e.preventDefault();

const updated={

fname:firstName.value,

lname:lastName.value,

email:email.value,

mobile:phone.value,

address:address.value,

city:city.value,

country:country.value

};

localStorage.setItem(
"consultantProfile",
JSON.stringify(updated)
);

displayName.innerHTML=
updated.fname+" "+updated.lname;

alert("Profile Updated Successfully");

});

profileImage.addEventListener("change",function(){

const file=this.files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

profilePreview.src=e.target.result;

localStorage.setItem(
"profileImage",
e.target.result
);

}

reader.readAsDataURL(file);

}

});

const savedImage=
localStorage.getItem("profileImage");

if(savedImage){

profilePreview.src=savedImage;

}