//APPROCH 1
// function showText(movieCard){
//     movieCard.querySelectorAll('.overview-text').style.display="block";
//     console.log("this is a movie")
// }

// function hideText(movieCard){
//     movieCard.querySelectorAll('.overview-text').style.display="none"
    
// }


//APPROACH2
// const main=document.getElementsByClassName("movieCard").addEventListener("mouseover",mouseOver);
//  const safe=document.getElementsByClassName("movieCard").addEventListener("mouseout",mouseOut);

// function mouseOver(){
// main.style.display="block";
// console.log("this is movie");
// }


// function mouseOut(){
// safe.style.display="none";
// }


//APPROACH3
// const cards=
// document.querySelectorAll(".movie-card")
// cards.forEach(card=>{
//     const text=
//     card.querySelector(".overview-text");
//     card.addEventListener("mouseenter",()=>{
//         text.style.display="block";
//     });
//     card.addEventListener("mouseleave",()=>{
//         text.style.display="none";
// });
// });

//APPROACH 4
//  function showMovies(cards) {
//     container.innerHTML = ''

//     cards.forEach((card) => {
//         const { overview } = movie-card

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie-card')

//         movieEl.innerHTML = `
//             <div class="overview-text">
//           <h3>Overview</h3>
//           ${overview}
//         </div>
//         `
//         container.appendChild(movieEl)
//     })
// }

//APPROACH 5

// const movieCards = document.getElementsByClassName("movieCard");

// for (let i = 0; i < movieCards.length; i++) {
//   movieCards[i].addEventListener("mouseover", function () {
//     this.querySelector(".overviewText").style.display = "block";
//     this.querySelector(".overviewText").style.opacity = "1";
//   });

//   movieCards[i].addEventListener("mouseout", function () {
//     this.querySelector(".overviewText").style.display = "none";
//     this.querySelector(".overviewText").style.opacity = "0";
//   });
// }


//APPROACH 6
// document.addEventListener("DOMContentLoaded", function () {
//   const movieCards = document.querySelectorAll(".movieCard");

//   movieCards.forEach(card => {
//     // Toggle on touch/click
//     card.addEventListener("click", function () {
//       const overview = this.querySelector(".overviewText");
//       const isVisible = overview.style.display === "block";

//       if (isVisible) {
//         overview.style.display = "none";
//         overview.style.opacity = "0";
//       } else {
//         overview.style.display = "block";
//         overview.style.opacity = "1";
//       }
//     });
//   });
// });







function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
}


