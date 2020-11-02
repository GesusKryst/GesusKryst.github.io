function copyEmail()
{
    var email = document.getElementById("email");
    email.select();
    email.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("email-btn").focus();
    alert("Email copied to clipboard!");
}
