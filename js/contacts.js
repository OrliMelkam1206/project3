showContacts();
function showContacts(){
    let username2 = JSON.parse(localStorage.getItem("currentUser"));
    document.getElementsByClassName("userName")[0].textContent += username2.username;
    let main2 = document.getElementById("main");
    let contacts = username2.arrayContact;
    for(let i = 0; i < contacts.length; i++){
        let contact = document.createElement("div");
        contact.style.width = "100%";
        contact.style.backgroundColor = "white";

        let name = document.createElement("div");
        name.textContent = contacts[i].name;
        name.style.fontSize = "25px";

        let phone = document.createElement("div");
        phone.textContent = contacts[i].phone;
        phone.style.fontSize = "20px";
        // phone.style.display = "none";

        let address = document.createElement("div");
        address.textContent = contacts[i].address;
        address.style.fontSize = "20px";
        // address.style.display = "none";

        contact.appendChild(name);
        contact.appendChild(phone);
        contact.appendChild(address);
        contact.style.marginTop = "10px"

        // contact.addEventListener("click", () => {
        //     this.children[1].style.display = "block";
        //     this.children[2].style.display = "block";

        // });
        main2.appendChild(contact);
    }
}


