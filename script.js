const popUp = document.getElementById("popup");
const stackPopUp = document.getElementById("stackpopup");
const mainItems = document.querySelectorAll(".main-item");

function openpopup() {
  popUp.classList.toggle("open-popup");
}

function stackopenpopup() {
  stackPopUp.classList.toggle("open-stackpopup");
}

mainItems.forEach((mainItem) => {
  mainItem.addEventListener("click", () => {
    mainItem.classList.toggle("main-item--open");
  });
});
