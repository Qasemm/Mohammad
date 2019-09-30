// validate Name  ==================>
function nameValid(name1) {
    console.log(name1);
    let pattname = /(\w+) (\w+)/;
    if (name1 === "") {
        text = ("Your name must not be empty");
    } else if (!name1.match(pattname)) {
        text = ("enter first and last name");
    } else {
        text = "";
    }
    document.getElementById("text_error").innerHTML = text;
}
// validate Email  ==================>
function mailValid(mail) {
    console.log(mail);
    // let vm =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let pattmail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (mail === "") {
        text = ("Your email must not be empty");
    } else if (!mail.match(pattmail)) {
        text = ("Unvalid email");
    } else {
        text = "";
    }
    document.getElementById("email_error").innerHTML = text;
}
// validate Password  ==================>
function passValid(pass) {
    console.log(pass);
    let pattpass = /\w+\d+[!@#\$%\^&]+$/;
    if (pass === "") {
        text = ("Password must not be empty");
    }
    // else if(pass.length < 8){
    //     text = ("Password must not be 8 characters ");
    // } 
    else if (!pass.match(pattpass)) {
        text = ("Password must not at least 8 characters and one of the following: [!, @, #, $, %, &, *]");
    } else {
        text = "";
    }
    document.getElementById("password_error").innerHTML = text;
}
document.getElementById("btn").addEventListener('click', function() {
    var name1 = document.getElementById("name1").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    nameValid(name1);
    mailValid(mail);
    passValid(pass);
});
// convert string  ==================>
document.getElementById("conver").addEventListener('click', function linki() {
    document.getElementById("link").style.display = "none";
    document.getElementById("link2").style.visibility = "visible";
});