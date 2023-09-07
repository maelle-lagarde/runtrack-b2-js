function myChangeBackgroundColor() {
    const screenWidth = window.innerWidth;

    const htmlElement = document.querySelector("html");

    if (screenWidth >= 1337) {
        htmlElement.style.backgroundColor = "#ffb703";
    } else if (screenWidth >= 505 && screenWidth <= 1336) {
        htmlElement.style.backgroundColor = "#d90429";
    } else if (screenWidth <= 504) {
        htmlElement.style.backgroundColor = "#003049";
    }
}

window.onload = myChangeBackgroundColor;
