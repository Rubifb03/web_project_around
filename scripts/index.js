import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import { Popup } from "./Popup.js";
import UserInfo from "./UserInfo.js";

//ABRIR POPUP EDITAR

const btnPopupProfile = document.querySelector(".profile__header-button");
const btnCloseProfile = document.querySelector(".popup__close-button");

const popupProfile = new Popup("#popup-profile");
popupProfile.setEventListeners();

btnPopupProfile.addEventListener("click", (event) => {
  if (event.target === btnPopupProfile) {
    popupProfile.open();
  }
});

btnCloseProfile.addEventListener("click", (event) => {
  if (event.target === btnCloseProfile) {
    popupProfile.close();
  }
});

//ABRIR POPUP AÑADIR LUGAR

const btnPopupPlace = document.querySelector(".profile__button-add");
const btnClosePlace = document.querySelector("#tmp");

const popupPlace = new Popup("#popup-place");
popupPlace.setEventListeners();

btnPopupPlace.addEventListener("click", (event) => {
  if (event.target === btnPopupPlace) {
    popupPlace.open();
  }
});

btnClosePlace.addEventListener("click", (event) => {
  if (event.target === btnClosePlace) {
    popupPlace.close();
  }
});

const initialCards = [
  {
    name: "Valle Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    alt: "Imagen Valle Yosemite",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    alt: "Imagen Lago Louise",
  },
  {
    name: "Montaña Calva",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    alt: "ImagenMontaña Calva",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    alt: "Imagen Latemar",
  },
  {
    name: "La Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    alt: "Imagen La Vanoise",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    alt: "Imagen Lago di Braies",
  },
];

//CREAR TARJETAS

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, "#elements-template", handleCardClick);
      const cardElement = card.getView();
      cardSection.addItem(cardElement);
    },
  },
  ".elements__grid"
);
cardSection.renderItems();

//VALIDAR FORMULARIOS

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormElement = document.querySelector("#edit-profile-form");
const addPlaceFormElement = document.querySelector("#add-place-form");

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

//USERINFO

const userInfo = new UserInfo({
  nameElement: "#profile-name",
  jobElement: "#profile-description",
});

//POPUPWITHFORM PROFILE

const popupProfileForm = new PopupWithForm("#popup-profile", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    job: formData.description,
  });
  popupProfileForm.close();
});

//MANEJAR TARJETA CLIC

function handleCardClick(name, link) {
  popupWithImage.open({ link, name });
}

//POPUP AÑADIR TARJETA LUGAR

const popupPlaceForm = new PopupWithForm("#popup-place", (formData) => {
  const cardData = {
    name: formData.title,
    link: formData.link,
  };

  //CREAR NUEVA TARJETA

  const card = new Card(cardData, "#elements-template", handleCardClick);
  const cardElement = card.getView();

  //AGREGAR LA TARJETA A LA SECCIÓN
  cardSection.addItem(cardElement);

  popupPlaceForm.close();
});

//ABRIR POPUP IMG

const popupWithImage = new PopupWithImage("#popup-image");
popupWithImage.setEventListeners();
const btnClosePopuImg = document.querySelector(".popup__button-img");

btnClosePopuImg.addEventListener("click", (event) => {
  if (event.target === btnClosePopuImg) {
    popupWithImage.close();
  }
});

popupProfileForm.setEventListeners();
popupWithImage.setEventListeners();
popupPlaceForm.setEventListeners();
