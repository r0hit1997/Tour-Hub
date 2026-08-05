let notifications =
JSON.parse(localStorage.getItem("notifications")) || [];

const list =
document.getElementById("notificationList");

function renderNotifications(){

list.innerHTML="";

notifications.forEach((item,index)=>{

list.innerHTML+=`

<div class="notification-card ${item.read?"read":"unread"}">

<div class="d-flex justify-content-between">

<div>

<div class="notification-title">

${item.title}

</div>

<p>${item.message}</p>

<span class="notification-time">

${item.time}

</span>

</div>

<div>

<span class="priority priority-${item.priority.toLowerCase()}">

${item.priority}

</span>

</div>

</div>

<div class="mt-3">

<button
class="btn btn-success btn-sm"

onclick="markRead(${index})">

✔ Read

</button>

<button
class="btn btn-danger btn-sm"

onclick="deleteNotification(${index})">

Delete

</button>

</div>

</div>

`;

});

localStorage.setItem(
"notifications",
JSON.stringify(notifications)
);

}

saveNotification.onclick=function(){

notifications.unshift({

title:title.value,

message:message.value,

priority:priority.value,

time:new Date().toLocaleString(),

read:false

});

renderNotifications();

title.value="";
message.value="";
priority.selectedIndex=0;

const modal=
bootstrap.Modal.getInstance(
document.getElementById("notificationModal")
);

if(modal){

modal.hide();

}

}

function markRead(index){

notifications[index].read=true;

renderNotifications();

}

function deleteNotification(index){

if(confirm("Delete notification?")){

notifications.splice(index,1);

renderNotifications();

}

}

markAll.onclick=function(){

notifications.forEach(n=>n.read=true);

renderNotifications();

}

searchNotification.onkeyup=function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".notification-card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?

""

:

"none";

});

}

renderNotifications();