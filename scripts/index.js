const openFormButton = document.querySelector(".profile__header-button");
const popup = document.querySelector(".popup");
const form = document.querySelector(".popup__form");
const closeButton = popup.querySelector(".popup__close");
const profileName = document.querySelector(".profile__header-title");
const profileJob = document.querySelector(".profile_explored");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_about");

function toggleForm() {
  popup.classList.toggle("popup_visible");
}

openFormButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}

form.addEventListener("submit", handleFormSubmit);

/*function toggleForm() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popup.classList.add(".popup_visible");
}*/
