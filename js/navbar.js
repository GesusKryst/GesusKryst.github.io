$(function(){
    $("body").hide().show(500);
    $("header").load("templates/header.html");
    $("nav").load("templates/navbar.html");
    $("footer").load("templates/footer.html");

});

function openBetaSite(){
    if(confirm("Go to beta site?")){
        window.open("../grid_layout_site/index.html")
    }
}