 run=(e)=>{
    e.preventDefault()
    var form = document.getElementById('formdata')

    var user_data = {
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
        username:form.username.value,
        mobile:form.mobile.value,
        description:form.description.value
    }

    async function data(){
        var res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
            method:'POST',
            body:JSON.stringify(user_data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        var response = await res.json()
        console.log(response)
        
        if(response.message == 'Registration Success'){
            alert('Registration sucess you are redirected to login page')
            setTimeout(() => {
                window.location.href = "./login.html"
            }, 2000);
        }else{
            alert('user already exist or wrong pass/username retry')
        }
    }
    data()
}