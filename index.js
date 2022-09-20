const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton")
const mainElement = document.querySelector("main")

// changeFontsize
const changeFontSize = (event) => {
    mainElement.style.fontSize = (event.target.value);
};
// changeBgColor
const changeBgColor = (event) => {
   mainElement.style.backgroundColor= (event.target.value);

};

// add event listener
selectFontSize.addEventListener("change",changeFontSize)
selectBgColor.addEventListener("change",changeBgColor)
