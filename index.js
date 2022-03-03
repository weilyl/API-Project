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
    setLiInnerText(meal.strMeasure1, meal.strIngredient1, ul);
    setLiInnerText(meal.strMeasure2, meal.strIngredient2, ul);
    setLiInnerText(meal.strMeasure3, meal.strIngredient3, ul);
    setLiInnerText(meal.strMeasure4, meal.strIngredient4, ul);
    setLiInnerText(meal.strMeasure5, meal.strIngredient5, ul);
    setLiInnerText(meal.strMeasure6, meal.strIngredient6, ul);
    setLiInnerText(meal.strMeasure7, meal.strIngredient7, ul);
    setLiInnerText(meal.strMeasure8, meal.strIngredient8, ul);  
    setLiInnerText(meal.strMeasure9, meal.strIngredient9, ul);  
    setLiInnerText(meal.strMeasure10, meal.strIngredient10, ul);  
    setLiInnerText(meal.strMeasure11, meal.strIngredient11, ul);  
    setLiInnerText(meal.strMeasure12, meal.strIngredient12, ul);  
    setLiInnerText(meal.strMeasure13, meal.strIngredient13, ul);  
    setLiInnerText(meal.strMeasure14, meal.strIngredient14, ul);  
    setLiInnerText(meal.strMeasure15, meal.strIngredient15, ul);  
    setLiInnerText(meal.strMeasure16, meal.strIngredient16, ul);  
    setLiInnerText(meal.strMeasure17, meal.strIngredient17, ul);  
    setLiInnerText(meal.strMeasure18, meal.strIngredient18, ul);  
    setLiInnerText(meal.strMeasure19, meal.strIngredient19, ul);  
    setLiInnerText(meal.strMeasure20, meal.strIngredient20, ul);   
  }

  function getInstructions(meal){
    const instruct = document.getElementById("instructions");
    let instructions = meal.strInstructions;
    instruct.innerText = `${instructions}  `;
    // instruct.innerText = " ";
    instruct.style.width = '900px'; 
    instruct.style.height = '100px'; 
    instruct.style.paddingLeft = '90px'
  }

//Event listener on the random button that shows recipes on click
const getReandom = document.getElementById('random-Btn')
let cardDiv = document.getElementById('card-div')


getReandom.addEventListener('click', ()=> {
  cardDiv.style.display ="flex"
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
const btn1 = document.getElementById('btn-1')

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  let mealData = data.meals[0]
  let cat = data.meals[0].strArea
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title1.innerText = mealName
  img1.src = mealImg
  console.log(mealData)
  page2(mealData, btn1, mealName,mealImg);
})

}

function card2(){
  let title2 = document.getElementById('recipe-title2')
  let img2 = document.getElementById('img2')
  const btn2 = document.getElementById('btn-2')
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
const btn3 = document.getElementById('btn-3')
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
  const btn4 = document.getElementById('btn-4')
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
  const btn5 = document.getElementById('btn-5')
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
  const btn6 = document.getElementById('btn-6')
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
    // image.src =mealImg
    // let urlString="https://www.youtube.com/watch?v=H1pTkatn6sI";
    // let url= urlString.replace('watch?v=','embed/', urlString);
    // videoEmbed.src = chosenMeal.url;
    // console.log(videoUrl)
    getIngredients(chosenMeal)
    getInstructions(chosenMeal)
    page1.style.display = "none";
    page2.style.display = "block";
  });

  backBtn.addEventListener("click", () =>{
    page2.style.display = "none";
    page1.style.display = "block";
  })
}






});

