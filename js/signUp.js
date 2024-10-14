function onRegister(event) {
    event.preventDefault()
    let username = document.getElementById("username").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let arrayContact=[];
    let userDataObj = { username, password , phone, email, arrayContact }
    let x = new FAJAX();
    x.open('POST', 'tamarOrli/api/users');
    x.onload = function(){
        if(x.status === 200){
            alert("ההרשמה בוצעה בהצלחה");
            moveToContacts();
        }
        if(x.status === 300){
            alert("הכנס שם משתמש או סיסמא");
        }
        if(x.status === 350){
            alert("שם המשתמש תפוס");
        }
        if(x.status === 404){
            alert("אירעה שגיאה");
        }
    }
    x.send(userDataObj);}