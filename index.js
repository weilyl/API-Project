window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
    .then(res=>res.json())
    .then(dataa=> console.log(dataa))
})
