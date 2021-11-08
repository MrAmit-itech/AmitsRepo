var naam = JSON.parse(sessionStorage.getItem('username'))
var user = document.getElementById('user_name')
console.log(naam)
if(naam ==  null){
    user.textContent = 'Login'
}else{
    user.textContent = JSON.parse(sessionStorage.getItem('username'))
}


