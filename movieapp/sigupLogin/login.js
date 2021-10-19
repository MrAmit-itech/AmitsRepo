var parent = document.getElementById("cont")
function check(e){
    var form = document.getElementById("form")
    e.preventDefault()

   let user_data =  {
        password: form.password.value,
        username: form.username.value
    }
    //console.log(user_data)
    user_data = JSON.stringify(user_data)

    async function loginData(){
        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
            method:"POST",
            body: user_data,
            headers:{
                "Content-Type":"application/json"
            } 
        })
        var data = await res.json()
        console.log(data)

        if(data.error = "false"){
        user_profile(form.username.value,data.token)
        }
    }
    loginData()

    async function user_profile(username,tok){
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${tok}`
            }
        })
        let info = await res.json()
        console.log(info.name)

       
            sessionStorage.setItem("user_name",JSON.stringify(info.name))
       

        function home_page_redirect(){
            
            window.location.href = "../movie1.html"
        }
        if(info.name){
           
            var h3 = document.createElement("h3")
            h3.textContent = "login successful you will redirect to home page in 2 sec"
            parent.append(h3)
            setTimeout(home_page_redirect,3000)
        }
    }

}