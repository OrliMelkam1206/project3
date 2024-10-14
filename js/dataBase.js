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
      userDataObj.id = addIdToUser();
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

function postContact(contactDataObj,id){
    //פעולה שמקבלת איש קשר ובן אדם ומוסיפה אותו למערך אנשי הקשר ולמערך אנשי הקשר של אותו אדם
    let contacts = JSON.parse(localStorage.getItem("contacts"))

    let counter=0;
    let users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    for(let i=0; i<users.length; i++){
      if(users[i].id===id){
        if(users[i].arrayContact.length === 0){
          users[i].arrayContact.push(contactDataObj)
          setCurrentUser(users[i])
          localStorage.setItem("users", JSON.stringify(users))

          break
        }
        else { 
          for(let j=0; j<users[i].arrayContact.length;j++){
            if(users[i].arrayContact[j].phone===contactDataObj.phone)
            {
              counter++
              break
            }
            
          }
          if(counter===0){
            contactDataObj.id = addIdToContact();
            users[i].arrayContact.push(contactDataObj);
            setCurrentUser(users[i])
            localStorage.setItem("users", JSON.stringify(users))
            if (contacts.length===0) {
              
              localStorage.setItem("contacts", JSON.stringify([contactDataObj]))
            }
            else {
              
            localStorage.setItem("contacts", JSON.stringify([...contacts, contactDataObj]))
            }
          
            break
          } 
          else{
            alert("המספר טלפון הזה שמור כבר באנשי הקשר שלך!")
            break
          }
        }
        
        

    }
 
}
}
    function setCurrentUser(currentUser){
  
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }
    function getCurrentUser(){
     return JSON.parse(localStorage.getItem("contacts"))
    }

    function addIdToUser(){
      let users = getUsers();
      if(users !== null){
        return (users[users.length-1].id + 1);
      }
      else{
        return 1;
      }
    }
    function addIdToContact(){
      let contacts = getContacts();
      if(users !== null){
        return (contacts[contacts.length-1].id + 1);
      }
      else{
        return 1;
      }
    }