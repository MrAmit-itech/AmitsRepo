function run(e){
    e.preventDefault()

    let form = document.getElementById("signup_form")

    let user_data = {
        "name": form.name.value,
        "email": form.email.value,
        "password": form.password.value,
        "username": form.username.value,
        "mobile": form.mobile.value,
        "description": form.description.value 
    }
    user_data = JSON.stringify(user_data)
    async function check(){
        var res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
            method:"POST",
            body: user_data,
            headers:{
                "Content-Type":"application/json"
            }
        })
        var data = await res.json()
        console.log(data)

        if( data.message == "Registration Success" ){
            alert("!registration success plzz wait while we redirect u to login")
            function redirectLogin(){
                window.location.href = "login.html"
            }
            setTimeout(redirectLogin,2200)
        }
    }
        check()

    
}