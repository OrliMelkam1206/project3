const username = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("userName").textContent += username.username;

function addNewContact(event){
    event.preventDefault()
    let newName = document.getElementById("name").value
    let newPhone = document.getElementById("phone").value
    let newAddress = document.getElementById("address").value
    postContact({name: newName, phone: newPhone, address: newAddress}, username.id)
    moveToContacts();
}
