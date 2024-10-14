let username = {};
let x2 = new FAJAX();
x2.open('POST', 'tamarOrli/api/contacts');
x2.onload = function(){
    if(x2.status === 200){
        username = x2.responseText;
        document.getElementsByClassName("userName")[0].textContent += username.username;
    }
    else{
        alert("אירעה שגיאה");
    }
}

function addNewContact(event){
    event.preventDefault()
    let newName = document.getElementById("name").value
    let newPhone = document.getElementById("phone").value
    let newAddress = document.getElementById("address").value
    let x = new FAJAX();
    x.open('POST', 'tamarOrli/api/contacts');
    x.onload = function(){
        if(x.status === 200){
            alert("איש הקשר התווסף בהצלחה");
            moveToContacts();
        }
        else if(x.status === 350){
            alert("המספר טלפון הזה שמור כבר באנשי הקשר שלך!")
        }
        else{
            alert("אירעה שגיאה");
        }
    }
    x.send([{name: newName, phone: newPhone, address: newAddress}, username.id]);
}
