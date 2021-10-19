var newsmain = document.getElementById("newsmain")


let key = "b434b46e35c349458254ef2cec3e5295"


var query = JSON.parse(localStorage.getItem("title"))
console.log(query)
async function searchnews(){
    var res = await fetch(`http://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=${key}`)
    let searchdata = (await res.json()).articles
    console.log(searchdata)
    searchdatashow(searchdata)
}
searchnews()

function searchdatashow(arr){
    arr.forEach(function(t){
        let newsbox = document.createElement("div")

        let imgbox = document.createElement("div")
        let image = document.createElement("img")
        image.src = t.urlToImage

        let titlebox = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.textContent = t.title
        let h6 = document.createElement("h6")
        h6.textContent = t.author

        imgbox.append(image)
        titlebox.append(h3,h6)
        newsbox.append(imgbox,titlebox)
        newsmain.append(newsbox)
    
    })
}