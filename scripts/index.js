import "./validate.js";
import Card from "./Card.js";

//POPUP EDITAR

const openFormButton = document.querySelector(".profile__header-button");
const popupProfile = document.querySelector("#popup-profile");
const form = document.querySelector(".popup__form");
const closeButton = popupProfile.querySelector(".popup__close");
const profileName = document.querySelector(".profile__header-title");
const profileJob = document.querySelector(".profile__description");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_description");
const saveButton = document.querySelector(".popup__submit-button");

//POPUP AÑADIR LUGAR

const openButtonAddPlace = document.querySelector(".profile__button-add");
const popupPlace = document.querySelector("#popup-place");
const closeButtonPlace = popupPlace.querySelector(".popup__close");

//TEMPLATE

const elementsTemplate = document.querySelector("#elements-template");
const elementsGrid = document.querySelector(".elements__grid");

// CARDS

const btnCreateCard = document.querySelector("#btn_create_card");
btnCreateCard.addEventListener("click", createCard);
const inputTitle = document.querySelector("#input-title");
const inputImage = document.querySelector("#input-url");

function toggleForm() {
  popupProfile.classList.toggle("popup_visible");
}

popupProfile.addEventListener("click", (event) => {
  if (event.target === popupProfile) {
    toggleForm();
  }
});

popupPlace.addEventListener("click", (event) => {
  if (event.target === popupPlace) {
    toggleFormPlace();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (popupProfile.classList.contains("popup_visible")) {
      toggleForm();
    }
    if (popupPlace.classList.contains("popup_visible")) {
      toggleFormPlace();
    }
    if (modal.classList.contains("popup_visible")) {
      modal.classList.remove("popup_visible");
    }
  }
});

openFormButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  toggleForm();
}

form.addEventListener("submit", handleFormSubmit);

function toggleFormPlace() {
  popupPlace.classList.toggle("popup_visible");
}

openButtonAddPlace.addEventListener("click", toggleFormPlace);
closeButtonPlace.addEventListener("click", toggleFormPlace);

// form.addEventListener("submit", handleFormSubmit);

const openButtonAdd = document.querySelector(".profile__button-add");

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
const modal = document.getElementById("popup-image");
function fillCards() {
  initialCards.forEach((card) => {
    const newCard = new Card(
      card.name,
      card.link,
      "#elements-template",
      modal
    ).getView();
    console.log(newCard);
    elementsGrid.prepend(newCard);
  });
}

function createCard(evt) {
  evt.preventDefault();
  const newCard = new Card(
    inputTitle.value,
    inputImage.value,
    "#elements-template",
    modal
  ).getView();
  console.log(newCard);
  elementsGrid.prepend(newCard);

  toggleFormPlace();
}

fillCards();
