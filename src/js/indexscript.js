let textarea = document.getElementById("customizeButton");
textarea.innerHTML = "Customize a project!";

function mouseentered() {
    textarea.addEventListener("onmousein", changetext);
}

function changetext() {
    textarea.innerHTML = "Customize a project!";
}

mouseentered();
changetext();

/* CODE ABOVE NEEDS TO BE CORRECTED TO COERENCE */