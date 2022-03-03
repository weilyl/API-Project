window.addEventListener('DOMContentLoaded', () => {
    const recipeName = document.getElementById('recipe-name')
   const image = document.getElementById('recipe-img')
   

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`)
  .then(res=>res.json())
  .then(dataa=> {
      let imageData = dataa.meals[0].strMealThumb
      image.src = 'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg'
      recipeName.innerText = dataa.meals[0].strMeal
  })

  

    
  
   
})