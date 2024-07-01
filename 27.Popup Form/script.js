// closeBtn
const closeBtn = document.getElementById("close");
// openBtn
const openBtn = document.getElementById("open");
// modal
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => modal.classList.add("show-modal"));

closeBtn.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
