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
if (users === null) {
    localStorage.setItem("users", JSON.stringify([userDataObj]))
}
else {
    
    localStorage.setItem("users", JSON.stringify([...users, userDataObj]))
}
}

