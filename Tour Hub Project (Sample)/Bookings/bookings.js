let bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

const table =
document.getElementById("bookingTable");

const save =
document.getElementById("saveBooking");

function displayBookings(){

table.innerHTML="";

bookings.forEach((b,index)=>{

table.innerHTML += `

<tr>

<td>${index+1}</td>

<td>${b.customer}</td>

<td>${b.destination}</td>

<td>${b.date}</td>

<td>

<span class="badge bg-${

b.status=="Confirmed"

?

"success"

:

b.status=="Pending"

?

"warning"

:

"danger"

}">

${b.status}

</span>

</td>

<td>₹${b.amount}</td>

<td>

<button
class="btn btn-danger btn-sm"

onclick="deleteBooking(${index})">

<i class="bi bi-trash"></i>

</button>

</td>

</tr>

`;

});

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

}

save.onclick=function(){

const booking={

customer:
customer.value,

destination:
destination.value,

date:
date.value,

amount:
amount.value,

status:
status.value

};

bookings.push(booking);

displayBookings();

document.querySelectorAll(".form-control")
.forEach(input=>input.value="");

};

function deleteBooking(i){

if(confirm("Delete Booking?")){

bookings.splice(i,1);

displayBookings();

}

}

displayBookings();

// Search

searchBooking.onkeyup=function(){

const value=this.value.toLowerCase();

const rows=
table.querySelectorAll("tr");

rows.forEach(row=>{

row.style.display=

row.innerText.toLowerCase().includes(value)

?

""

:

"none";

});

};