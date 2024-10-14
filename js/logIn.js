function onSubmit(event){
    let x = new FAJAX();
    x.open('GET', 'tamarOrli/api/users');
    x.onload = function(){
        if(x.status === 200){
            event.preventDefault();
            let name=document.getElementById("username").value;   
            let password=document.getElementById("password").value;
        
            let users = x.responseText;
        
            let currentUser=users.find(user => { 
                return user.username===name && user.password===password
            })
        
            if(currentUser){
                moveToContacts()
            }
            else{
                alert("Invalid username or password");
            } 
            let xhttp= new FAJAX();
            xhttp.open('PUT', 'tamarOrli/api/currentUser');
            x.onload = function(){
                if(x.status===404)
                    alert('eror')
                else(alert("hello, "+currentUser.username))
            }
            x.send(currentUser);
        }
        else{
            alert("eror 404")
        }        
    }
    x.send(); 
}