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
        document.getElementById("error-form").innerHTML = name;
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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("banner-img");
    if (n > imgList.length) slideIndex = 1;
    else if(n < 1) slideIndex = imgList.length;

    for(i = 0; i<imgList.length; i++){
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
    plusDivs(1)
}, 5000)
