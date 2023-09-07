function myDisplayText() {
    const inputElement = document.getElementById("input-text");
    const inputValue = inputElement.value;

    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.textContent = inputValue;
}

function myTurnBold() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontWeight = "bold";
}

function myTurnItalic() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontStyle = "italic";
}

function myClearText() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.textContent = "Texte affiché ici";
    textDisplayer.style.fontWeight = "normal";
    textDisplayer.style.fontStyle = "normal";
}