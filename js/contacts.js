const username2 = JSON.parse(localStorage.getItem("currentUser"));
document.getElementsByClassName("userName")[0].textContent += username2.username;
let main2 = document.getElementById("main");
let contacts = username2.arrayContact;
for(let i = 0; i < contacts.length; i++){
    let contact = document.createElement("div");
    contact.textContent = contacts.name;
    // contact.addEventListener("click", moveToSpecificContact());
    main2.appendChild(contact);
}

