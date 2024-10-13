function onRegister(event) {
    event.preventDefault()
    let username = document.getElementById("username").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let arrayContact=[];
    let userDataObj = { username, password, phone, email, arrayContact }
    
    postUsers(userDataObj)
   
    function backToLogin() {    
        document.getElementById("container").innerHTML = "";
        var signinContent = document.getElementsByTagName("template")[0].content.cloneNode(true);
        var container = document.getElementById("container");
        container.appendChild(signinContent);

    }


}