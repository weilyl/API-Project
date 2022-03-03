window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
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

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  // console.log(data.meals)
  let cat = data.meals[0].strArea
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title1.innerText = mealName
  // category.innerText = `Meal Origin:${cat}`
  img1.src = mealImg
})
}

function card2(){
  let title2 = document.getElementById('recipe-title2')
  let img2 = document.getElementById('img2')
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title2.innerText = mealName
  img2.src = mealImg
})
}

function card3(){
  let title3 = document.getElementById('recipe-title3')
let img3 = document.getElementById('img3')
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title3.innerText = mealName
  img3.src = mealImg
})
  
}
function card4(){
  let title4 = document.getElementById('recipe-title4')
  let img4 = document.getElementById('img4')
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title4.innerText = mealName
  img4.src = mealImg
})

  
}
function card5(){
  let title5 = document.getElementById('recipe-title5')
  let img5 = document.getElementById('img5')
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title5.innerText = mealName
  img5.src = mealImg
})

  
}
function card6(){
  let title6 = document.getElementById('recipe-title6')
let img6 = document.getElementById('img6')
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {
  // let meal
  let mealImg = data.meals[0].strMealThumb
  let mealName = data.meals[0].strMeal
  title6.innerText = mealName
  img6.src = mealImg
})


}











      

      

     
    
   
})
