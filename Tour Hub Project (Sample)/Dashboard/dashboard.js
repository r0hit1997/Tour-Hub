/*==========================================
        TOUR HUB DASHBOARD
==========================================*/

// Sidebar Toggle

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

// Search Filter (Recent Bookings)

const searchBox = document.querySelector(".search-box input");

if(searchBox){

    searchBox.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        const rows = document.querySelectorAll(".booking-table tbody tr");

        rows.forEach(row=>{

            row.style.display =
                row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";

        });

    });

}

/*==========================================
        CHART.JS
==========================================*/

const ctx = document.getElementById("revenueChart");

if(ctx){

new Chart(ctx,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug"
],

datasets:[{

label:"Revenue",

data:[
45000,
60000,
80000,
75000,
98000,
120000,
110000,
145000
],

fill:true,

borderWidth:3,

borderColor:"#0d6efd",

backgroundColor:"rgba(13,110,253,.15)",

tension:.4,

pointRadius:5

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:false

}

}

}

});

}

/*==========================================
        CARD ANIMATION
==========================================*/

const cards = document.querySelectorAll(".stats-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*200);

});

/*==========================================
        COUNTERS
==========================================*/

const values = document.querySelectorAll(".stats-value");

values.forEach(item=>{

const number = parseInt(item.innerText.replace(/\D/g,""));

if(isNaN(number)) return;

let start = 0;

const interval = setInterval(()=>{

start += Math.ceil(number/50);

if(start >= number){

start = number;

clearInterval(interval);

}

item.innerText = start.toLocaleString();

},20);

});

/*==========================================
        LOCAL STORAGE DEMO
==========================================*/

const notifications = [
"New Booking Received",
"Payment Successful",
"Customer Review Added"
];

localStorage.setItem(
"tourhubNotifications",
JSON.stringify(notifications)
);

/*==========================================
        QUICK ACTION
==========================================*/

const actionBtn = document.querySelector(".quick-action button");

if(actionBtn){

actionBtn.addEventListener("click",()=>{

alert("Redirecting to Tour Package Creation Page...");

});

}

/*==========================================
        PROFILE BUTTON
==========================================*/

const profileBtn = document.querySelector(".profile-card button");

if(profileBtn){

profileBtn.addEventListener("click",()=>{

window.location.href="profile.html";

});

}

/*==========================================
        DARK MODE
==========================================*/

const darkBtn = document.createElement("button");

darkBtn.className="btn btn-dark";

darkBtn.innerHTML='<i class="bi bi-moon-fill"></i>';

darkBtn.style.position="fixed";
darkBtn.style.bottom="30px";
darkBtn.style.right="30px";
darkBtn.style.borderRadius="50%";
darkBtn.style.width="60px";
darkBtn.style.height="60px";
darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

/*==========================================
        LOADING EFFECT
==========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition=".5s";

document.body.style.opacity="1";

},200);

});