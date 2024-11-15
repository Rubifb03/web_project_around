let editProfile = document.querySelector(".profile__header-button");
let popupSection = document.querySelector(".popup");
let bodyElement = document.querySelector("body");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector("#name");
let aboutInput = document.querySelector("#about");
let profileHeader = document.querySelector(".profile__header-title");
let profileExplorador = document.querySelector(".profile_explored");
let saveButton = document.querySelector(".form__button");
let closeButton = document.querySelector(".popup__closed");

const firstName = profileHeader.textContent;
const firstDescription = profileExplorador.textContent;

editProfile.addEventListener("click", (event) => {
  saveButton.setAttribute("disabled", true);
  popupSection.style.display = "block";
  bodyElement.style.overflow = "hidden";
  nameInput.value = firstName || "";
  aboutInput.value = firstDescription || "";
});

closeButton.addEventListener("click", (event) => {
  popupSection.style.display = "none";
  bodyElement.style.overflow = "auto";
});

nameInput.addEventListener("input", (event) => {
  event.preventDefault();
  let saveButton = document.querySelector(".popup__form");
  if (
    firstDescription !== event.target.value ||
    initialDescripcion !== aboutInput.value
  ) {
    saveButton.removeAttribute("disabled");
  } else {
    saveButton.setAttribute("disable", "");
  }
});

formElement.addEventListener("submit", handleProfileFormSubmit);
function handleProfileFormSubmit(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let formValues = Object.fromEntries(formData);
  profileHeader.textContent = formValues.name;
  profileExplorador.textContent = formValues.about;
  popupSection.style.display = "none";
}
