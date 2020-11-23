function winLoad()
{
    bg_picker = document.getElementById("bg_picker");
    bg_picker.addEventListener("input", saveColor);
    if("user_color" in localStorage)
    {
        loadColor();
        bg_picker.value = localStorage.getItem("user_color");
    }
}

function saveColor(anEvent)
{
    let chosenColor = anEvent.target.value;
    localStorage.setItem("user_color", chosenColor);
    loadColor();
}

function loadColor()
{
    let userColor = localStorage.getItem("user_color")
    document.body.style.backgroundColor = userColor;
    document.getElementById("picked_color").value = userColor;
}


window.onload = winLoad();