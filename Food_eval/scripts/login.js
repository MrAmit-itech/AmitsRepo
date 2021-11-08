var form = document.getElementById('loginData')
var user_name = document.getElementById(user_name)
var flag = false
login=(e)=>{
    e.preventDefault()

    var user_data = {
        
        password:form.password.value,
        username:form.username.value,
        
    }

    async function data(){
        var res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
            method:'POST',
            body:JSON.stringify(user_data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        var response = await res.json()
        var token = response.token
        profile(token)
    }
    data()

    async function profile(tok){
        var res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${form.username.value}`,{
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${tok}`
            } 
        })
        flag = true
        var server_res =  await res.json()
        var USERNAME = server_res.name
        console.log(USERNAME)
        
        sessionStorage.setItem('username',JSON.stringify(USERNAME))
        alert('succesful redirectin in 2 sec')
        setTimeout(() => {
            window.location.href='./index.html'
        }, 2000);
    }
    
}
