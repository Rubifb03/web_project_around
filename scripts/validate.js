import FormValidator from "./FormValidator.js";

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormElement = document.querySelector("#popup-profile");
const addPlaceFormElement = document.querySelector("#popup-place");

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);
editFormValidator.enableValidation();

const addPlaceFormValidator = new FormValidator(
  validationSettings,
  addPlaceFormElement
);
addPlaceFormValidator.enableValidation();
