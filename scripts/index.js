//POPUP EDITAR

const openFormButton = document.querySelector(".profile__header-button");
const popupProfile = document.querySelector("#popup-profile");
const form = document.querySelector(".popup__form");
const closeButton = popupProfile.querySelector(".popup__close");
const profileName = document.querySelector(".profile__header-title");
const profileJob = document.querySelector(".profile__description");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_about");
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
const inputTitle = document.querySelector("#title_card");
const inputImage = document.querySelector("#image_card");

function toggleForm() {
  popupProfile.classList.toggle("popup_visible");
}

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

const openButtonAdd = document.querySelector("profile__button-add");

const initialCards = [
  {
    name: "Valle Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montaña Calva",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "La Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function fillCards() {
  initialCards.forEach((card) => {
    const newCard = elementsTemplate.content
      .querySelector(".elements__group")
      .cloneNode(true);
    const imageCard = newCard.querySelector(".elements__photo");
    const descriptionCard = newCard.querySelector(".elements__footer-name");
    const likeButtons = newCard.querySelector(".button__like");
    const deleteButton = newCard.querySelector(".elements__button-delete");

    imageCard.src = card.link;
    descriptionCard.textContent = card.name;

    likeButtons.addEventListener("click", handleLikeButtonClick);

    deleteButton.addEventListener("click", function () {
      newCard.remove();
    });

    const modal = document.getElementById("popup-image");
    const modalImage = modal.querySelector(".popup__modal-content");
    const modalDescrition = modal.querySelector(".popup__modal-description");

    imageCard.addEventListener("click", function () {
      modalImage.src = card.link;
      modalDescrition.textContent = card.name;
      modal.classList.toggle("popup_visible");
    });

    const closeModalButton = document.querySelector(".popup__modal-button");

    closeModalButton.addEventListener("click", function () {
      const modal = document.getElementById("popup-image");
      modal.classList.remove("popup_visible"); // Oculta el modal
    });
    elementsGrid.prepend(newCard);
  });
}

function createCard(evt) {
  evt.preventDefault();
  const newCard = elementsTemplate.content
    .querySelector(".elements__group")
    .cloneNode(true);
  const imageCard = newCard.querySelector(".elements__photo");
  const descriptionCard = newCard.querySelector(".elements__footer-name");

  imageCard.src = inputImage.value;
  descriptionCard.textContent = inputTitle.value;

  elementsGrid.prepend(newCard);
  toggleFormPlace();
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("button__like_active");
}

const likeButtons = document.querySelectorAll(".button__like");

likeButtons.forEach((button) => {
  button.addEventListener("click", handleLikeButtonClick);
});

fillCards();
