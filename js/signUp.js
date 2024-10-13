function onRegister(event) {
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem("users"))

    let username = document.getElementById("username").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let userDataObj = { username, password, phone, email }

    if (users === null) {
        localStorage.setItem("users", JSON.stringify([userDataObj]))
    }
    else {
        
        localStorage.setItem("users", JSON.stringify([...users, userDataObj]))
    }
    function backToLogin() {    
        document.getElementById("container").innerHTML = "";
        var signinContent = document.getElementsByTagName("template")[0].content.cloneNode(true);
        var container = document.getElementById("container");
        container.appendChild(signinContent);

    }


}