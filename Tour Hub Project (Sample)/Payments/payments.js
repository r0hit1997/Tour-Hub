let payments =
JSON.parse(localStorage.getItem("payments")) || [];

const table =
document.getElementById("paymentTable");

function renderPayments(){

table.innerHTML="";

let revenue=0;

let completed=0;

let pending=0;

payments.forEach((payment,index)=>{

if(payment.status==="Completed"){

completed++;

revenue+=Number(payment.amount);

}else{

pending++;

}

table.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${payment.customer}</td>

<td>${payment.method}</td>

<td>₹${payment.amount}</td>

<td>

<span class="badge bg-${
payment.status==="Completed"
?
"success"
:
"warning"
}">

${payment.status}

</span>

</td>

<td>

<button
class="btn btn-danger btn-sm"

onclick="deletePayment(${index})">

<i class="bi bi-trash"></i>

</button>

</td>

</tr>

`;

});

document.getElementById("totalRevenue").innerHTML=
"₹"+revenue.toLocaleString();

document.getElementById("completedCount").innerHTML=
completed;

document.getElementById("pendingCount").innerHTML=
pending;

localStorage.setItem(
"payments",
JSON.stringify(payments)
);

}

document.getElementById("savePayment").onclick=function(){

payments.push({

customer:customer.value,

method:method.value,

amount:amount.value,

status:status.value

});

renderPayments();

customer.value="";
amount.value="";

};

function deletePayment(index){

if(confirm("Delete Payment?")){

payments.splice(index,1);

renderPayments();

}

}

document.getElementById("searchPayment").onkeyup=function(){

const value=this.value.toLowerCase();

table.querySelectorAll("tr").forEach(row=>{

row.style.display=
row.innerText.toLowerCase().includes(value)
?
""
:
"none";

});

};

renderPayments();