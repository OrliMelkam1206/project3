showContacts();
function showContacts(){
    let xhttp= new FAJAX();
    xhttp.open('GET', 'tamarOrli/api/currentUser');
    xhttp.onload = function(){
        alert("orli")
       if(x.status===200){
        document.getElementsByClassName("userName")[0].textContent += xhttp.responseText.username;
        let main2 = document.getElementById("main");
        let contacts = xhhtp.responseText.arrayContact;
        for(let i = 0; i < contacts.length; i++){
            let contact = document.createElement("div");
            contact.style.width = "100%";
            contact.style.backgroundColor = "white";
            contact.style.display="flex";
            contact.style.justifyContent= "space-around";
            contact.style.padding="25px"
            contact.style.fontSize="30px"
    
            let name = document.createElement("div");
            name.textContent = contacts[i].name;
            name.style.fontSize = "25px";
    
            let phone = document.createElement("div");
            phone.textContent = contacts[i].phone;
            phone.style.fontSize = "20px";
    
    
            let address = document.createElement("div");
            address.textContent = contacts[i].address;
            address.style.fontSize = "20px";
    
    
            contact.appendChild(name);
            contact.appendChild(phone);
            contact.appendChild(address);
            contact.style.marginTop = "10px"
            main2.appendChild(contact);
        }
    }  
    else{
        alert("EROR")
    }
    xhttp.send();

}


}


