window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
const categoryBtn = document.querySelector('i')
const meatsBtn = document.getElementById('meats')
const meatDiv = document.getElementById('meatsDiv')
const miscellaneousBtn = document.getElementById('miscellaneous')
const targetDiv = document.getElementById("options");
let modal = document.getElementById('modal')
let modalTitle = document.getElementById('modal-title')
let instructionsTxt = document.getElementById('actual-instructions')
let youtubeVid = document.getElementById('yt-vid')
let beef = document.getElementById('beef')
let chicken = document.getElementById('chicken')
let pork = document.getElementById('pork')
let lamb = document.getElementById('lamb')
let goat = document.getElementById('goat')
let cardImg = document.getElementById('card-img')
let card = document.getElementById('recipe-cards')
let cardTxt = document.getElementById('card-title')
let viewRecipe = document.getElementById('view-recipe')


categoryBtn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};



const miscellaneousDiv = document.getElementById('miscellaneousDiv')
meatsBtn.addEventListener('mouseover', ()=>{
  
  if (meatDiv.style.display !== "none") {
    meatDiv.style.display = "none";
  } else {
    meatDiv.style.display = "block";
  }
});

miscellaneousBtn.addEventListener('click', ()=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=miscellaneous`)
  .then(res => res.json())
  .then(data => {

   let miscellaneousMeals =data.meals
  //  console.log(miscellaneousMeals)
   
   for(let miscel of miscellaneousMeals){
    targetDiv.style.display ="none"
    card.style.display = "block"
    // console.log(miscel)
     let miscellaneousMealName = miscel.strMeal
     console.log(miscellaneousMealName)
     let miscellaneousImg = miscel.strMealThumb
     cardTxt.innerText = miscellaneousMealName
     cardImg.src = miscellaneousImg 
     getFullRecipe(miscellaneousMealName)
    
   }

  })

})

function getIngredients(meals){
let num = 0
// console.log(meals.strIngredient1)
// while(!meals.meals.stringredients`${num}`){
// let recipeUl = document.getElementById('ingredients')
// const li = document.createElement('li')
// li.innerText = meals.stringredients`${num}`
// li.appendChild(recipeUl)
// num ++


// }

}


         function getFullRecipe(meal){
      viewRecipe.addEventListener('click', ()=>{
        
       
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
          .then(response => response.json())
          .then(data => {
            let mealName = data.meals[0].strmeals
            // console.log(mealName)
            let mealInstructions= data.meals[0].strInstructions
            let ytVid = data.meals[0].strYoutube
            // console.log(ytVid)
            
            modalTitle.innerText = mealName
            instructionsTxt.innerText = mealInstructions
            youtubeVid.src = ytVid
          //  console.log(ytVid)
       
      getIngredients(data.meals[0])

         modal.style.display = 'block'
         
       })
          })
   
        }

      

     
     

      fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  .then(res=>res.json())
  .then(dataa=> {
    let categoriesObj = dataa.categories;
    // console.log(categoriesObj)
    for(let cat of categoriesObj){
      let categories = cat.strCategory
      
      

      // console.log(categories)
    }
  })

  

    
  
   
})
