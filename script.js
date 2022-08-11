const submitButton = document.querySelector("#submit-button");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const numberButtons = document.querySelectorAll(".btn");
const thankYouContainer = document.querySelector(".thankyou-conatainer");
// const numberContainer = document.querySelector(".numbers");

// numberContainer.addEventListener("click", function(e) {
//     const numberOfStars = e.target.innerText;

//     if(e.target === button) {
//         e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
//     }
   

//     const rating = document.createElement("p");
//     rating.innerHTML = `you selected ${numberOfStars} out of 5`;
//     thankYouContainer.append(rating);
// }) 

for(let button of numberButtons) {
    button.addEventListener("click", function(e) {

        e.target.style.backgroundColor = "hsl(25, 97%, 53%)";

        localStorage.setItem("stars", e.target.innerText);

        const starRating = document.createElement("p");
        starRating.innerHTML = `You selected ${localStorage.getItem("stars")} out of 5`;

        body.append(starRating);

    })
}

 
