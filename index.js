const button = document.querySelector(".button-test");

button.addEventListener("click", () => {
  _toggleButtonClass(button)
  _toggleButtonText(button)
});

function _toggleButtonClass(button) {
  const shouldChangeClass = button.className.includes("test");
  if(shouldChangeClass) {
    button.className = "button-clicked";
  } else {
    button.className = "button-test";
  }
};

function _toggleButtonText(button) {
  const shouldChangeText = button.textContent.includes("Contact-us");
  if(shouldChangeText) {
    button.textContent = "Oh no!";
  } else {
    button.textContent = "Contact-us";
  }
}
