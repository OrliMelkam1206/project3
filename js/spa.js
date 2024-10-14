function signinPage() {    
    document.getElementById("container").innerHTML = "";
    var loginContent = document.getElementsByTagName("template")[0].content.cloneNode(true);
    var container = document.getElementById("container");
    container.appendChild(loginContent);

}

function moveToSignup() {
    document.getElementById("container").innerHTML = "";
    var signupContent = document.getElementsByTagName("template")[1].content.cloneNode(true);
    var container = document.getElementById("container");
    container.appendChild(signupContent);
}

function moveToContacts(){
    document.getElementById("container").innerHTML = "";
    var contactContent = document.getElementsByTagName("template")[2].content.cloneNode(true);
    var container = document.getElementById("container");
    container.appendChild(contactContent);
}



function moveToAddContact(){
    document.getElementById("container").innerHTML = "";
    var newContactContent = document.getElementsByTagName("template")[3].content.cloneNode(true);
    var container = document.getElementById("container");
    container.appendChild(newContactContent);
}

