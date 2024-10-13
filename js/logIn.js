function onSubmit(event){
    console.log("hi")
    event.preventDefault();
    let name=document.getElementById("username").value;
    
    let password=document.getElementById("password").value;
   
    let users = JSON.parse(localStorage.getItem("users"));
   
    let currentUser=users.find(user => {
    
        return user.username===name && user.password===password
    })

   

    if(currentUser)
        {
            document.getElementById("container").innerHTML = "";
            var gameContent = document.getElementsByTagName("template")[2].content.cloneNode(true);
            var container = document.getElementById("container");
            container.appendChild(gameContent);
        }
    else
    {
        alert("Invalid username or password");
    } 
    localStorage.setItem("currentUser", JSON.stringify( currentUser))
  
}