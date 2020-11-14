// JavaScript source code
function register() {
    var form = document.forms["register"];
    var un = form.elements["username"].value;
    var pass = form.elements["password"].value;
    var cpass = form.elements["cpassword"].value;



    if (pass == cpass) {
        // localStorage.un = pass;
        localStorage.setItem(un, pass);
        window.alert("Registration Successfull");



        //var un2 = localStorage.account[0];
        var pass2 = localStorage.getItem(password)
        window.location.href = "index.html";
    }
    else {
        window.alert("Password is different");
    }
};

function login() {
    var form = document.forms["login"];
    var un = form.elements["username"].value;
    var pass = form.elements["password"].value;

    var un = localStorage.getItem(un);
    if (un == pass) {
        window.alert("Success");
        window.location.href = "Sleep.html";
    }
    else {
        window.alert("Error");
    }

};

function regis() {
    window.location.href = "register.html";
};




