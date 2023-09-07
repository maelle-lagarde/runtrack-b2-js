function myAddCount() {
    
    const countParagraphe = document.getElementById("count-displayer");

    let currentCount = parseInt(countParagraphe.textContent);

    currentCount++;

    countParagraphe.textContent = currentCount;
}

const addButton = document.getElementById("add-count-btn");

addButton.addEventListener("click", myAddCount);