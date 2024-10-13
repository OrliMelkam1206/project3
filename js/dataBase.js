function  getUserById(id){
//פעולה שמחזירה אובייקט לפי ID
        let array=JSON.parse(localStorage.getItem("users"));
        for(let i=0; i<array.length; i++){
            if(array[i].id===id)
              return array[i];
        }
   }
function  getContactById(id){
//פעולה שמחזירה מערך של אנשי קשר לפי ID
    let array=JSON.parse(localStorage.getItem("users"));
    for(let i=0; i<array.length; i++){
        if(array[i].id===id)
          return array[i].arrayContact;
    }
}
function getUsers(){
    //פעולה שמחזירה את המערך של הרשומים באתר
    return JSON.parse(localStorage.getItem("users"));
}
function getContacts(){
    //פעולה שמחזירה את המערך של הרשומים באתר
    return JSON.parse(localStorage.getItem("contacts"));
}
function postUsers(userDataObj){
//פעולה שמקבלת אובייקט ומוסיפה אותו למערך המשתמשים
let users = JSON.parse(localStorage.getItem("users"))
let exist=true;
   if (userDataObj.username === "" || userDataObj.password === "") {
           alert("הכנס שם משתמש או סיסמא") ;
            exist=false;
    }
    else
     {
      if (users != null){
        for (let i = 0; i < users.length; i++) 
        {
             if (users[i].username=== userDataObj.username)
              {
               alert( "שם המשתמש תפוס ") ;
               exist=false;
               break;
              }
             else 
              { 
               exist = true 
              }
         }
     }
    if (exist) 
     {
      if (users === null) 
        {
          localStorage.setItem("users", JSON.stringify([userDataObj]))
        }
      else 
        {
         localStorage.setItem("users", JSON.stringify([...users, userDataObj]))
        }
       moveToContacts()
       alert("ההרשמה בוצעה בהצלחה ");
       setCurrentUser(userDataObj);
      }
    
    }
  }

function postContact(contactDataObj,name){
    //פעולה שמקבלת איש קשר ובן אדם ומוסיפה אותו למערך אנשי הקשר ולמערך אנשי הקשר של אותו אדם
    let contacts = JSON.parse(localStorage.getItem("contacts"))
    if (!contacts) {
        localStorage.setItem("contacts", JSON.stringify([contactDataObj]))
    }
    else {
     localStorage.setItem("contacts", JSON.stringify([...contacts, contactDataObj]))
    }
    let counter=0;
    let users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    for(let i=0; i<users.length; i++){
      if(users[i].username===name){
        console.log('users[i].username: ', users[i].username);
        if(users[i].arrayContact==null){
          users[i].arrayContact.push(contactDataObj)
          break
        }
        else { 
          for(let j=0; j<users[i].arrayContact.length;j++){
            if(users[i].arrayContact[j].phone===contactDataObj.phone)
            {
              counter++
              break
            }
            if(counter===0){
              users[i].arrayContact.push(contactDataObj);
              localStorage.setItem("currentUser", JSON.stringify(users[i]))
              break

            } 
            else{
              alert("המספר טלפון הזה שמור כבר באנשי הקשר שלך!")
              break;
            }
          }
        }
        localStorage.setItem("users", JSON.stringify(users))

    }
 
}
}
    function setCurrentUser(currentUser){
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }
    function getCurrentUser(){
     return JSON.parse(localStorage.getItem("contacts"))
    }