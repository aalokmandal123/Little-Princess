function login() {
    const EnteredUsername = document.getElementById('username').value.trim();
    const EnteredPassword = document.getElementById('password').value.trim();
    const Details = {
        "Aalok" : "Chasmis@idzy9793",
        "Rachana" : "Little@princess9397"
    };
    if (Details[EnteredUsername]) {
        if (Details[EnteredUsername] === EnteredPassword) {
            window.location.href = "gallery.html";
        }
        else {
            alert("Please enter correct password")
        }}

    else {
        alert("Please enter correct username");
    }
}