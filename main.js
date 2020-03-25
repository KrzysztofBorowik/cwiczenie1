const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3", "tekst4"];
let indexText = 0;
let arrayIndex = 0;

const clearText = () => {
  spnText.textContent = "";
  indexText = 0;
  setInterval(addLetter, 300);
};

const addLetter = () => {
  spnText.textContent += txt[arrayIndex][indexText];
  indexText++;
  if (arrayIndex === txt.length) return;
  if (indexText === txt[arrayIndex].length) {
    arrayIndex++;
    clearInterval(letterTyping);

    setTimeout(clearText, 3000);
  }
};

addLetter();

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
const letterTyping = setInterval(addLetter, 200);
