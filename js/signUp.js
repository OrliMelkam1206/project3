function onRegister(event) {
    event.preventDefault()
    let username = document.getElementById("username").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let arrayContact=[];
    let userDataObj = { username, password, phone, email, arrayContact }
    
    postUsers(userDataObj)
   


}