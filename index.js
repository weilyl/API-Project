window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
const catBtn = document.querySelector('i')
   
const targetDiv = document.getElementById("options");
// const btn = document.getElementById("toggle");
catBtn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
const meatsBtn = document.getElementById('meats')
const meatDiv = document.getElementById('meatsDiv')
const miscellaneousBtn = document.getElementById('miscellaneous')
// const miscellaneousDiv = document.getElementById('miscellaneousDiv')
meatsBtn.addEventListener('click', ()=>{
  
  if (meatDiv.style.display !== "none") {
    meatDiv.style.display = "none";
  } else {
    meatDiv.style.display = "block";
  }
});

let cardImg = document.querySelectorAll('img')

let cardTxt = document.getElementById('card-title')
miscellaneousBtn.addEventListener('click', ()=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=miscellaneous`)
  .then(res => res.json())
  .then(data => {

   let miscellaneousMeals =data.meals
   for(let miscel of miscellaneousMeals){
     let miscellaneousMealName = miscel.strMeal
     let miscellaneousImg = miscel.strMealThumb
    //  cardTxt.innerText = miscellaneousMealName
     cardImg.src = miscellaneousImg

    //  console.log(miscellaneousMeals)
   }
  })

})
     
      
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
