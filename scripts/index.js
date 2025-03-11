import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import { Popup } from "./Popup.js";
import UserInfo from "./UserInfo.js";
import { api } from "./Api.js";

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
const btnClosePlace = document.querySelector("#place-close");

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
  avatarElement: ".profile__avatar",
});

//POPUPWITHFORM PROFILE

const popupProfileForm = new PopupWithForm("#popup-profile", (formData) => {
  return api
    .updateUserProfile({
      name: formData.name,
      about: formData.description,
    })
    .then((updateUserInfo) => {
      userInfo.setUserInfo(updateUserInfo);
      popupProfileForm.close();
    })
    .catch((error) => console.error("Error al actualizar perfil:", error));
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
  return api
    .createCard(cardData)
    .then((newCardData) => {
      console.log("Datos de la nueva tarjeta:", newCardData);
      const card = new Card(newCardData, "#elements-template", handleCardClick);
      const cardElement = card.getView();
      cardSection.addItem(cardElement);
      popupPlaceForm.close();
    })
    .catch((error) => {
      console.error("Error al crear la tarjeta:", error);
    });
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

api
  .getInitialCards()
  .then((cards) => {
    cardSection.renderItems(cards);
  })
  .catch((error) => {
    console.error("Error al obtener las tarjetas:", error);
  });

const cardSection = new Section(
  {
    items: [],
    renderer: (cardData) => {
      const card = new Card(cardData, "#elements-template", handleCardClick);
      const cardElement = card.getView();
      cardSection.addItem(cardElement);
    },
  },
  ".elements__grid"
);

api
  .getUserInformation()
  .then((response) => {
    console.log(response.avatar);
    userInfo.setUserInfo({
      name: response.name,
      job: response.about,
    });
    userInfo.setUserAvatar(response.avatar);
  })
  .catch((error) => {
    console.error("Error al obtener la información del usuario:", error);
  });

//INSTANCIA DE POPUPWITHCONFIRMATION

const cardContainer = document.querySelector(".elements__grid");

cardContainer.addEventListener("click", (evt) => {});

//CERRAR POPUP DELETE

const btnClosePopupDelete = document.querySelector("#close-delete");

const popupDelete = new Popup("#popup-delete");
popupDelete.setEventListeners();

btnClosePopupDelete.addEventListener("click", (event) => {
  if (event.target === btnClosePopupDelete) {
    popupDelete.close();
  }
});

//ABIR Y CERRAR POPUP EDITAR FOTO DE PERFIL

const btnPopupEdit = document.querySelector(".profile__avatar-edit");
const btnClosePopupEdit = document.querySelector("#perfil-close");

let popupEditProfile = new Popup("#popup-avatar");
popupEditProfile.setEventListeners();

btnPopupEdit.addEventListener("click", (event) => {
  if (event.target === btnPopupEdit) {
    popupEditProfile.open();
  }
});

btnClosePopupEdit.addEventListener("click", (event) => {
  if (event.target === btnClosePopupEdit) {
    popupEditProfile.close();
  }
});

const popupAvatar = new PopupWithForm("#popup-avatar", (data) => {
  console.log(data);
  return api
    .updateProfilePhoto({ avatar: data.link })
    .then((updatedUserInfo) => {
      userInfo.setUserAvatar(updatedUserInfo.avatar);
      popupAvatar.close();
    })
    .catch((error) => {
      console.error("Error al actualizar la foto de perfil:", error);
    });
});

popupProfileForm.setEventListeners();
popupWithImage.setEventListeners();
popupPlaceForm.setEventListeners();
popupDelete.setEventListeners();
popupEditProfile.setEventListeners();
popupAvatar.setEventListeners();
