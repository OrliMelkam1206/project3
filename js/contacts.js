const username = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("userName").textContent += username.username;
let main = document.getElementById("main");
let contacts = username.arrayContact;
for(let i = 0; i < contacts.length; i++){
    let contact = document.createElement("div");
    contact.textContent = contacts.name;
    // contact.addEventListener("click", moveToSpecificContact());
    main.appendChild(contact);
}

