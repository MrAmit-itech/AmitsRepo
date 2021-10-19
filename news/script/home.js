// function home(){
//     console.log("home im clicked")
// }

let key  = "b434b46e35c349458254ef2cec3e5295"
let parent = document.getElementById("cont")


async function headlines(){
    let res = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
    let data = (await res.json()).articles
    datashow(data)
    console.log(data)
}
headlines()

function datashow(arr){
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
        newsbox.addEventListener("click",fulldetail)
        parent.append(newsbox)

        function fulldetail(){
            localStorage.setItem("title",JSON.stringify(t.title))
            window.location.href = "file:///C:/Users/AmitsRiG/Desktop/MyDocs/JavaScript/news/news.html"
        }
    })
}
function find(){
    var dataentry = document.getElementById("dataentry").value
    localStorage.setItem("inputdata",JSON.stringify(dataentry))
    window.location.href ="file:///C:/Users/AmitsRiG/Desktop/MyDocs/JavaScript/news/search.html"
}




