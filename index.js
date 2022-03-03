window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
    .then(res=>res.json())
    .then(dataa=> console.log(dataa))
})

//if category of data is equal to string entered in search bar
if(dataa.strCategory === str){
    //if it's fish--->fetch and return little mermaid playlist
    if(str === 'Fish'){
    //fetch request for little mermaid
    fetch("")
    
    }else if(str === 'Beef'){
    //fetch GET request for rap disses: what's beef
    fetch('https://open.spotify.com/album/4YTduhQWfS0pOzQC4o0HcG?si=-lIp67kXTMSUnHbJ6iUxDg')


    }else if(str === 'Chicken'){
    //fetch GET request for chicken playlist
    fetch('https://open.spotify.com/playlist/77FYGIlUZbWYMuuSPjILOX?si=0ded90b08d524505')

    }else if(str === 'Dessert'){
    //fetch GET request for dessert music  
    fetch("https://open.spotify.com/album/6qqa1vvE1Q3qj2k8Gc3iEY?si=Pem3lND_Q4K4ZfjKIKS24Q")

    }else if(str === 'Lamb'){
    //fetch GET request for this is adam lambert
    fetch("https://open.spotify.com/playlist/37i9dQZF1DZ06evO3MFmq4?si=06d62a85fde248fc")
    
    }else if(str === 'Pasta'){
    //fetch GET request for pasta making music   
    fetch("https://open.spotify.com/playlist/6xL6K3EBL24rF6bHy2PtRW?si=835e542f386145d9")

    }else if(str === 'Pork'){
    //fetch GET request for porkys place tj
    fetch("https://open.spotify.com/playlist/599a2pgUrtBBkAZdS3IKWS?si=a7a5856b0d434b5e")

    }else if(str === 'Seafood'){
    //fetch GET request for seafood dinner
    fetch("https://open.spotify.com/playlist/4xQE1mIM545PQeGdoLJ0Bh?si=c10b830776304c43")

    }else if(str === 'Starter'){
    //fetch GET request for 2Happy Cocktails
    fetch("https://open.spotify.com/playlist/4fBV2fjgpUw4n9bYLElwAl?si=2bda823ceb6c43fc")

    }else if(str === 'Vegan'){
    //fetch GET request for that vegan teachers cringey songs
    fetch("https://open.spotify.com/playlist/00i0kAaHuI8C0v6J9mhxbY?si=5ddc5ee398254382")

    }else if(str === 'Vegetarian'){
    //fetch GET request for im a vegetarian and i aint f****** scared
    fetch("https://open.spotify.com/playlist/3WmcKgX83LRqQVTSTkYY6f?si=84374a3106df4601")

    }else if(str === 'Breakfast'){
    //fetch GET request for breakfast coffee jazz
    fetch("https://open.spotify.com/playlist/7JHC5iBWrzAloy65eYLVCd?si=5664354991154237")

    }else{
    //fetch GET request for lil baby goat playlist
    fetch("https://open.spotify.com/playlist/5r6ZT7kHbOE5GhOnulaYJk?si=3cc7c21bf8564a45")
    }
    
}else{
    //playlist
}