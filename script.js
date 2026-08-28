const startButton = document.querySelector("#start-button");
const welcomeMessage = document.querySelector("#welcome-message");
const year = document.querySelector("#year");

startButton.addEventListener("click", () => {
  welcomeMessage.hidden = false;
  startButton.firstChild.textContent = "体验已开启 ";
  startButton.setAttribute("aria-describedby", "welcome-message");
});

year.textContent = new Date().getFullYear();
