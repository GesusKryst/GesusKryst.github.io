function copyEmail(){
    var email = document.getElementById("email");
    email.select();
    email.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function on(){
    document.getElementById("msgBox").style.display = "block";
}

function off() {
    document.getElementById("msgBox").style.display = "none";
  }