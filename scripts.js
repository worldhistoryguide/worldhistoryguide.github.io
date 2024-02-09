let lightMode = true;

function toggleLightAndDarkMode(lightMode) {
    if (lightMode == true) {
        lightMode = false;
    }
    else if (lightMode == false) {
        lightMode = true;
    }
}

if (lightMode == true) {
    document.getElementsByClassName("text").style.color = "black";
    document.body.style.backgroundColor = "whitesmoke";
}
else if (lightMode == false) {
    document.getElementsByClassName("text").style.color = "whitesmoke";
    document.body.style.backgroundColor = "#191919";
}
while (true) {
    console.log(lightMode);
}