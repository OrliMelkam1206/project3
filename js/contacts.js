function showContacts(){
    let main2 = document.getElementById("contact-container");
    main2.innerHTML = "";

    let xhttp= new FAJAX();
    xhttp.open('GET', 'tamarOrli/api/currentUser');
    xhttp.onload = function(){
      
       if(xhttp.status===200){
        // document.getElementsByClassName("userName")[0].textContent += xhttp.responseText.username;
        let contacts = xhttp.responseText.arrayContact;
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
            
            let deleteContact = document.createElement("button");
            deleteContact.textContent ="DELETE";
            address.style.fontSize = "20px";
            deleteContact.style.color = "red";
            deleteContact.style.border = "2px solid red";
            deleteContact.addEventListener("click",() => deleteButton(contacts[i], xhttp.responseText.id))
            contact.appendChild(name);
            contact.appendChild(phone);
            contact.appendChild(address);
            contact.appendChild(deleteContact)
            contact.style.marginTop = "10px"
            main2.appendChild(contact);
        }
        }  
        else{
            alert("EROR")
        }
    }
xhttp.send();


}
function deleteButton(contact, id){
    let xhttp= new FAJAX();
    xhttp.open('DELETE', `tamarOrli/api/contacts/${contact.id}`);
    xhttp.onload = function(){
        if(xhttp.status===200){
            alert("המחיקה בוצעה בהצלחה")
        showContacts()
        }
        if(xhttp.status===404){
            alert("EROR")
        }
    }
    xhttp.send([contact.id, id]);
}

function logOut(){
    let xhttp= new FAJAX();
    xhttp.open('PUT', 'tamarOrli/api/currentUser');
    xhttp.onload = function(){
        if(xhttp.status===404)
        alert('eror')
        else{
            alert("בוצעה התנתקות");
            signinPage();
        }
    }
    xhttp.send(null);
    
}
