// copyText
const copyText = document.querySelector("textarea[name=copyTxt");
// finalText
const finalText = document.querySelector("textarea[name=finalTxt");
// moveBtn
const moveBtn = document.querySelector(".moverBtn");
// copyBtn
const copyBtn = document.querySelector(".copyBtn");
// output
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToCLipBoard(temp);
});

moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

copyText.addEventListener("click", () => this.select);
finalText.addEventListener("click", () => this.select);

function copyToCLipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  const textArea = document.createElement("textarea");
  textArea.value = str;
  outputContainer.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  outputContainer.removeChild(textArea);
  output.innerHTML = `<h3>content Copied </h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}
