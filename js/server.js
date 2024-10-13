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


// function postContactss(contactDataObj){
//     //פעולה שמקבלת איש קשר ומוסיפה אותו למערך אנשי הקשר
//     let contacts = JSON.parse(localStorage.getItem("cotacts"))
//     if ( contacts === null) {
//         localStorage.setItem("contacts", JSON.stringify([contactDataObj]))
//     }
//     else {
        
//         localStorage.setItem("contacts", JSON.stringify([...contacts, contactDataObj]))
//     }
//     }

let exist=true;
        if (userDataObj.username === "" || userDataObj.password === "") {
           alert("הכנס שם משתמש או סיסמא") ;
            exist=false;
        }
         else {
            if (users != null)
            for (let i = 0; i < users.length; i++) {
                if (users[i].username=== userDataObj.username) {
                    alert( "שם המשתמש תפוס ") ;
                    exist=false;
                    break;
                }
                else { exist = true }
            }
        }
        if (exist) {
            if (users === null) {
                localStorage.setItem("users", JSON.stringify([userDataObj]))
            }
            else {
                
                localStorage.setItem("users", JSON.stringify([...users, userDataObj]))
            }
            moveToContacts()
            alert("ההרשמה בוצעה בהצלחה ");
        }
    
    }