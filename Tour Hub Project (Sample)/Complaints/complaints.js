let complaints =
JSON.parse(localStorage.getItem("complaints")) || [];

const table =
document.getElementById("complaintTable");

function priorityBadge(priority){

if(priority==="High")
return "danger";

if(priority==="Medium")
return "warning";

return "success";

}

function statusBadge(status){

if(status==="Closed")
return "secondary";

if(status==="In Progress")
return "primary";

return "success";

}

function renderComplaints(){

table.innerHTML="";

complaints.forEach((item,index)=>{

table.innerHTML += `

<tr>

<td>${index+1}</td>

<td>${item.customer}</td>

<td>${item.message}</td>

<td>

<span class="badge bg-${priorityBadge(item.priority)}">

${item.priority}

</span>

</td>

<td>

<span class="badge bg-${statusBadge(item.status)}">

${item.status}

</span>

</td>

<td>

<button
class="btn btn-danger btn-sm"

onclick="deleteComplaint(${index})">

<i class="bi bi-trash"></i>

</button>

</td>

</tr>

`;

});

localStorage.setItem(
"complaints",
JSON.stringify(complaints)
);

}

saveComplaint.onclick=function(){

const complaint={

customer:customer.value,

message:message.value,

priority:priority.value,

status:status.value

};

complaints.push(complaint);

renderComplaints();

customer.value="";
message.value="";
priority.selectedIndex=0;
status.selectedIndex=0;

const modal =
bootstrap.Modal.getInstance(
document.getElementById("complaintModal")
);

if(modal){
    modal.hide();
}

};

function deleteComplaint(index){

if(confirm("Delete this complaint?")){

complaints.splice(index,1);

renderComplaints();

}

}

searchComplaint.onkeyup=function(){

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

renderComplaints();