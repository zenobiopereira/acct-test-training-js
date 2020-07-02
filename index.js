const button = document.querySelector(".button-test");
button.innerHTML = "this is a test";
button.addEventListener("click", () => {
    button.innerHTML = "clicado";
});