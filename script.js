function validate() {
    var fname = getElementById("firstname");
    var lname = getElementById("lastname");
    var age = getElementById("Age");
    var passwd = getElementById("paswd");

    var c;
    if (fname == "") {
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
            alert("Please check and fill all the mandatory fields")
            break;
    }
}