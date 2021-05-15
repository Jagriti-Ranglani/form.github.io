function validate(){
    var count = 0;
    var fname = document.getElementById("firstname").value;
    if (fname == "") {
        alert("First name cannot be empty");
        count += 1;
    }
    var lname = document.getElementById("lastname").value;
    if (lname == "") {
        alert("Last name cannot be empty");
        count += 1;
    }
    var age = document.getElementById("Age").value;
    if (age<25) {
        alert("age must be greater than 25");
        count += 1;
    }
    var pd = document.getElementById("paswd").value;
    if (pd == "") {
        alert("Password cannot be empty");
        count +=1;
    }

    switch (count) {
        case 0:
            document.getElementById("vr").style.visibility = 'hidden';
            document.getElementById("sentence").style.visibility = 'visible';
            document.getElementById("su").style.visibility = 'visible';
    }
    
}

function submit(){
    alert("Congrats! You have successfully registered as an eligible voter :) ")
}