var parent = document.getElementById("cont")

var img = document.createElement("img")
img.src = "https://i.pinimg.com/originals/22/32/fb/2232fb9bbcef1d760e088a004ffe6bf0.gif"
parent.append(img)

search = ()=>{
    console.log("i m triggered")

    var searchentry = document.getElementById("input").value
    console.log(searchentry)
    Searchfood(searchentry)

}

async function Searchfood(d){
    let res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${d}`)
    let data = (await res.json()).meals
    console.log(data)
    showdata(data)
}

 showdata = (data) =>{
    parent.innerHTML = null
    data.forEach(function(el){
        var main = document.createElement("div")

        var imgdiv = document.createElement("div")
        var img = document.createElement("img")
        img.src = el.strMealThumb
        img.style.width = "700px"
        img.style.height = "700px"
        imgdiv.append(img)

        var detaildiv = document.createElement("div")
        var h3 = document.createElement("h3")
        h3.textContent = "INSTRUCTIONS"
        var h5 = document.createElement("h5")
        h5.textContent = el.strMeal
        var p = document.createElement("p")
        p.textContent = el.strInstructions
        detaildiv.append(h3,h5,p)

       
        main.append(imgdiv,detaildiv)
        main.id = "main"
        main.style.display = "flex"
        main.style.gap = "3%"
        
        parent.append(main)
    })
}