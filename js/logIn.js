function onSubmit(event){
    console.log("hi")
    event.preventDefault();
    let name=document.getElementById("username").value;   
    let password=document.getElementById("password").value;
   
    let users = getUsers();
   
    let currentUser=users.find(user => { 
        return user.username===name && user.password===password
    })

    if(currentUser){
        moveToContacts()
    }
    else{
        alert("Invalid username or password");
    } 
    setCurrentUser(currentUser)
    
  
}