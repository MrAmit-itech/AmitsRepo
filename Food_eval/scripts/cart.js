var parent = document.getElementById('place_order')
var data = JSON.parse(sessionStorage.getItem('cart'))

function showdata(data){
    parent.innerHTML = null 
    console.log(data)

    data.forEach(function(el){
        var image =  document.createElement('img')
        image.src = el.image

        var h5 = document.createElement('h5')
        h5.textContent = el.price

        parent.append(image,h5)
    })
}

showdata(data)


order=()=>{
    document.getElementById('notify').textContent = 'your order accepted'
}

food_coocked=()=>{
    document.getElementById('notify').textContent = 'your order is being cooked'
}

order_ready=()=>{
    document.getElementById('notify').textContent = 'your order is ready'
}

order_out=()=>{
    document.getElementById('notify').textContent = 'your order is out for delivery'
}

order_deleiverd=()=>{
    document.getElementById('notify').textContent = 'your order delieverd'
}

thanks=()=>{
    parent.innerHTML = null
    var h1 = document.createElement('h1')
    h1.textContent = 'Thanks for using us'
    h1.style.size = '50px'
    parent.append(h1)
}

run=()=>{
    setTimeout(() => {
        order()
        setTimeout(() => {
            food_coocked()
            setTimeout(() => {
                order_ready()
                setTimeout(() => {
                    order_out()
                    setTimeout(() => {
                        order_deleiverd()
                        setTimeout(() => {
                            thanks()
                        }, 1000);
                    }, 12000);
                }, 10000);
            }, 8000);
        }, 3000);
    }, 0);
}