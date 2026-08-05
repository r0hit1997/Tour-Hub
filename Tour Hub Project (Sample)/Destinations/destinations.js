// Search Destinations

const search=document.getElementById("searchDestination");

const cards=document.querySelectorAll(".destination");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

cards.forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?

"block"

:

"none";

});

});

// Booking Button

document.querySelectorAll(".bookBtn").forEach(btn=>{

btn.onclick=function(){

alert("Booking Page Coming Next!");

};

});