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
                let xhttp= new FAJAX();
                xhttp.open('PUT', 'tamarOrli/api/currentUser');
                xhttp.onload = function(){
                if(xhttp.status===404)
                    alert('eror')
                else(alert("hello, "+currentUser.username))
            }
            xhttp.send(currentUser);
                moveToContacts()
            }
            else{
                alert("Invalid username or password");
            } 
            
        }
        else{
            alert("eror 404")
        }        
    }
    x.send(); 
}