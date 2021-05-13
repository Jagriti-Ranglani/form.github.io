function validate() {
    var v1 = document.getElementById("firstname");
    var lname = document.getElementById("lastname");
    var age = document.getElementById("Age");
    var passwd = document.getElementById("paswd");

    var c = 0;
    if (v1 == "") {
        c = 1;
    }
    if (lname == "") {
        c = 2;
    }
    if (age < 25) {
        c = 3;
    }
    if (passwd == "") {
        c = 4;
    }

    switch (c) {
        case 1:
            alert("Please fill First name");
            break;
        case 2:
            alert("Last name should not be empty");
            break;
        case 3:
            alert("Age must be greater than 25")
            break;
        case 4:
            alert("Fill out the password field");
            break;

        default:
            document.getElementById("vr").style.visibility= 'none';
            document.getElementById("sentence").style.visibility = 'display';
            document.getElementById("su").style.visibility = 'display';
            break;
    }
}