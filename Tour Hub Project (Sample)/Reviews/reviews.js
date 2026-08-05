let reviews =
JSON.parse(localStorage.getItem("reviews")) || [];

const container =
document.getElementById("reviewContainer");

function renderReviews(){

container.innerHTML="";

let total=0;

reviews.forEach((review,index)=>{

total += Number(review.rating);

container.innerHTML += `

<div class="col-lg-4 mb-4">

<div class="review-card">

<h4 class="review-name">

${review.customer}

</h4>

<div class="review-stars">

${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}

</div>

<p class="review-text">

${review.comment}

</p>

<button
class="btn btn-danger btn-sm"

onclick="deleteReview(${index})">

Delete

</button>

</div>

</div>

`;

});

document.getElementById("reviewCount").innerHTML=
reviews.length;

document.getElementById("averageRating").innerHTML=

reviews.length

?

(total/reviews.length).toFixed(1)+" ⭐"

:

"0.0 ⭐";

localStorage.setItem(
"reviews",
JSON.stringify(reviews)
);

}

saveReview.onclick=function(){

reviews.push({

customer:customer.value,

rating:Number(rating.value),

comment:comment.value

});

customer.value="";
comment.value="";

renderReviews();

};

function deleteReview(index){

if(confirm("Delete Review?")){

reviews.splice(index,1);

renderReviews();

}

}

searchReview.onkeyup=function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".review-card").forEach(card=>{

card.parentElement.style.display=

card.innerText.toLowerCase().includes(value)

?

"block"

:

"none";

});

};

renderReviews();