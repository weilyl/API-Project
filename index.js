window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()

 //   const randomBtn = document.getElementById("random-btn");
//   const bottom = document.getElementById("bottom");

  // functions setLiInnerText and getIngredients retrieves the list of ingredients and appends it to a ul
  function setLiInnerText(amount, ingredient, list){
    if(ingredient !== "" && ingredient !== null){
      if(amount.match(/[0-9]/)){
        let li = document.createElement("li");
        li.innerText = `${amount} ${ingredient}`;
        list.appendChild(li)
        // console.log(li.innerText);
      }else{
        let li = document.createElement("li");
        li.innerText = ` ${ingredient} ${amount}`;
        list.appendChild(li)
        // console.log(li.innerText);
      }
    }
  }
  function getIngredients(meal){
    const ul = document.getElementById("ingredients");
    for(let i = 1; i <= 20; i++){
      let strIngredient = `strIngredient${i}`
      let strMeasure = `strMeasure${i}`
      setLiInnerText(meal[strMeasure],meal[strIngredient], ul)
    }
  }

  function getInstructions(meal){
    const instruct = document.getElementById("instructions");
    let instructions = meal.strInstructions;
    instruct.innerText = `${instructions}  `;
    // instruct.innerText = " ";
    instruct.style.width = '850px'; 
    // instruct.style.height = '100px'; 
    instruct.style.paddingLeft = '90px'
    // instruct.style.paddingRight = '40px'
    instruct.style.overflowY = "scroll";
    instruct.style.height = "300px";
    instruct.style.fontSize = "15px";
  }

//Event listener on the random button that shows recipes on click
const getReandom = document.getElementById('random-Btn')
let cardDiv = document.getElementById('card-div')

  cardDiv.style.display ="flex"
  card1()
  card2()
  card3()
  card4()
  card5()
  card6()
getReandom.addEventListener('click', ()=> {
  card1()
  card2()
  card3()
  card4()
  card5()
  card6()
})

function card1 (){
let title1 = document.getElementById('recipe-title1')
let img1 = document.getElementById('img1')
let category = document.getElementById('cat1')
const btn1 = document.getElementsByClassName('card')[0];

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  let mealData = data.meals[0]
  let cat = data.meals[0].strArea
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title1.innerText = mealName
  // title1.style.fontWeight = "bold";
  img1.src = mealImg
  console.log(mealData)
  page2(mealData, btn1, mealName,mealImg);
})

}

function card2(){
  let title2 = document.getElementById('recipe-title2')
  let img2 = document.getElementById('img2')
  const btn2 = document.getElementsByClassName('card')[1];
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  let mealData = data.meals[0]
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title2.innerText = mealName
  img2.src = mealImg
  page2(mealData, btn2, mealName,mealImg);
})
}

function card3(){
  let title3 = document.getElementById('recipe-title3')
let img3 = document.getElementById('img3')
const btn3 = document.getElementsByClassName('card')[2];
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  let mealData = data.meals[0]
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title3.innerText = mealName
  img3.src = mealImg
  page2(mealData, btn3, mealName,mealImg);
})
  
}
function card4(){
  let title4 = document.getElementById('recipe-title4')
  let img4 = document.getElementById('img4')
  const btn4 = document.getElementsByClassName('card')[3];
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealData = data.meals[0]
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title4.innerText = mealName
  img4.src = mealImg
  page2(mealData, btn4, mealName,mealImg);
})

  
}
function card5(){
  const btn5 = document.getElementsByClassName('card')[4];
  let title5 = document.getElementById('recipe-title5')
  let img5 = document.getElementById('img5')
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealData = data.meals[0]
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title5.innerText = mealName
  img5.src = mealImg
  page2(mealData, btn5, mealName,mealImg);
})

  
}
function card6(){
  let title6 = document.getElementById('recipe-title6')
  const btn6  = document.getElementsByClassName('card')[5];
let img6 = document.getElementById('img6')
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealData = data.meals[0]
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title6.innerText = mealName
  img6.src = mealImg
  page2(mealData, btn6, mealName,mealImg);
})
}


// let str = data.category

function setSrc(str){
  const iframeElement = document.getElementById('player')
  const playlist = {
    Beef: "https://open.spotify.com/embed/album/4YTduhQWfS0pOzQC4o0HcG?si=-lIp67kXTMSUnHbJ6iUxDg",
    Seafood: "https://open.spotify.com/embed/album/4aAwvCRNJIqiUGVEjieWv6",
    Chicken: "https://open.spotify.com/embed/playlist/77FYGIlUZbWYMuuSPjILOX?si=0ded90b08d524505",
    Dessert: "https://open.spotify.com/embed/album/6qqa1vvE1Q3qj2k8Gc3iEY?si=Pem3lND_Q4K4ZfjKIKS24Q",
    Lamb: "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3MFmq4?si=06d62a85fde248fc",
    Pasta: "https://open.spotify.com/embed/embed/playlist/6xL6K3EBL24rF6bHy2PtRW?si=835e542f386145d9",
    Pork: "https://open.spotify.com/embed/playlist/599a2pgUrtBBkAZdS3IKWS?si=a7a5856b0d434b5e",
    Starter: "https://open.spotify.com/embed/playlist/4fBV2fjgpUw4n9bYLElwAl?si=2bda823ceb6c43fc",
    Vegan: "https://open.spotify.com/embed/playlist/00i0kAaHuI8C0v6J9mhxbY?si=5ddc5ee398254382",
    Vegetarian: "https://open.spotify.com/embed/playlist/3WmcKgX83LRqQVTSTkYY6f?si=84374a3106df4601",
    Breakfast: "https://open.spotify.com/embed/playlist/7JHC5iBWrzAloy65eYLVCd?si=5664354991154237"
  }
  iframeElement.src = playlist[str]
}



//page 2

// Event listener on view recipe button for a modal to show up on click
function page2(chosenMeal, btn, mealName, mealImg){
const videoEmbed = document.getElementById("video")
let videoUrl;
const page1 = document.getElementById("page-1")
const page2 = document.getElementById("page-2")
const title = document.getElementById("2-page-title")
const backBtn = document.getElementById("back-btn")
const image = document.getElementById('page-2-img')
  btn.addEventListener("click", () => {
    // console.log(chosenMeal[strMeal])
    // console.log(mealName)
    title.innerText = mealName;
    image.src =mealImg
    let urlString=chosenMeal.strYoutube;
    let url= urlString.replace('watch?v=','embed/', urlString);
    videoEmbed.src = url;
    // console.log(videoUrl)
    getIngredients(chosenMeal)
    getInstructions(chosenMeal)
    setSrc(chosenMeal.strCategory);
        // setSrc(chosenMeal.strCategory)
    page1.style.display = "none";
    page2.style.display = "block";

  });

  backBtn.addEventListener("click", () =>{
    page2.style.display = "none";
    page1.style.display = "block";
  })
}


});

