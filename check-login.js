function checkLogin() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user == "Admin" && pass == "TheMaster") {
        alert("welcome");
    } else if (user == '' || pass == '') {
        alert("Canceled");
    } else {
        alert("i don't know you");
    }

}


/* //check user
if (user == "Admin"){
    alert("Yêu cầu nhập mật khẩu");
}
    else if(user == null){
        alert("Canceled");
}
    else {
        alert("I don't know you");
}
// check pass
if(pass == "TheMaster"){
    alert("Welcome!");
}
else if(pass == null){
    alert("Canceled");
}
else {
    alert("Wrong password");
}

*/
