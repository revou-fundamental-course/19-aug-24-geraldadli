function validateForm() {
    const form = document.forms['message-us-form'];
    const name = form['name'].value;
    const email = form['email'].value;
    const phone = form['phone_number'].value;

    let isValid = true;

    if (name == '') {
        document.getElementById("error-form").innerHTML = "Name cannot be empty!";
        isValid = false;
    } else {
        document.getElementById("error-form").innerHTML = "";
    }

    if (email == '') {
        document.getElementById("error-form").innerHTML += "<br>Email cannot be empty!";
        isValid = false;
    }

    if (phone == '') {
        document.getElementById("error-form").innerHTML += "<br>Phone number cannot be empty!";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("current-time").innerHTML = new Date().toLocaleTimeString();
        document.getElementById("full-name").innerHTML = name;
        return false;
    }

    return isValid; // Return true if valid, otherwise false
}


function setName(name){
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-form').innerHTML = ""
}
