const button = document.querySelector(".button-login");
const tokenInput = document.querySelector(".authentication-box");
const spanInfo = document.querySelector(".authentication-info");

button.addEventListener("click", async () => {
  _toggleButtonClass(button);
  _toggleButtonText(button);
  const result = await authenticate(tokenInput.value);
  tokenInput.value = "";
  _validateResponse(result);
  _toggleButtonClass(button);
  _toggleButtonText(button);
});

function _validateResponse(response) {
  spanInfo.className = "authentication-info";
  if (response.code !== 200) {
    spanInfo.classList.add("error");
  } else {
    spanInfo.classList.add("success");
  }

  return (spanInfo.innerHTML = response.message);
}

function _toggleButtonClass(button) {
  const hasDefaultClass = button.className.includes("login");
  button.className = hasDefaultClass ? "button-clicked" : "button-login";
}

function _toggleButtonText(button) {
  const hasDefaultText = button.textContent.includes("Authenticate");
  button.textContent = hasDefaultText ? "Authenticating..." : "Authenticate";
}
