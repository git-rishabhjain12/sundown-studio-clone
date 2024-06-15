window.addEventListener("load", () => {
  let loaderContainer = document.querySelector("#loader");
  let displayText = ["Environments", "Experiences", "Content"];
  let displayTextContainer = document.querySelector("#displayTextContainer");

  displayText.forEach((text) => {
    const textEl = document.createElement("p");
    textEl.textContent = text;
    displayTextContainer.appendChild(textEl);
  });

  let index = 0;

  const showNextText = () => {
    if (index < displayText.length) {
      displayTextContainer.children[index].classList.add("visible");
      setTimeout(() => {
        displayTextContainer.children[index].classList.remove("visible");
        index++;
        showNextText();
      }, 1000);
    } else {
      setTimeout(() => {
        document.querySelector(".loader").classList.add("hidden");
        document.body.style.overflow = "auto";
        showNextText();
      }, 500);
    }
  };

  setTimeout(showNextText, 1000);
});
