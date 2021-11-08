var parent = document.getElementById('menu_cont')

async function menu(){
    var res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    var data = (await res.json()).meals
    console.log(data)
    showdata(data)
}
menu()

function showdata(data){

    data.forEach((el)=>{
        var main = document.createElement("div")

        var image = document.createElement('img')
        image.src = el.strMealThumb

        var h5 = document.createElement('h5')
        h5.textContent = Math.floor(Math.random() * 1000) + ' ₹'

        var p = document.createElement('p')
        p.textContent = el.strInstructions

        var button = document.createElement('button')
        button.textContent = 'Add To Cart'
        button.onclick = tocart

        main.append(image,p,h5,button)
        parent.append(main)

        function tocart(){
            var arr = []
            sessionStorage.setItem('cart',JSON.stringify(arr))
            var arr = JSON.parse(sessionStorage.getItem('cart'))
            var obj = {}
            obj.image = image.src
            obj.price = h5.textContent
            obj.description = p.textContent
            console.log(obj)
            arr.push(obj)
            sessionStorage.setItem('cart',JSON.stringify(arr))
        }
    })

}