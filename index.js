window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
const getReandom = document.getElementById('recipeBtn-gen')








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
