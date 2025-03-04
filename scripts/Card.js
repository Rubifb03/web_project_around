import { api } from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._api = api;
    this._isLiked = data.isLiked;

    this._handleLikeButton = this._handleLikeButton.bind(this);
    this._handleDeleteCard = this._handleDeleteCard.bind(this);
    this._handleImageClick = this._handleImageClick.bind(this);
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__group")
      .cloneNode(true);

    return cardElement;
  }

  _handleDeleteCard() {
    console.log("deleting");

    let popupDeleteConfirmation = new PopupWithConfirmation(
      "#popup-delete",
      () => {
        let cardIdToDelete = this._id;

        if (cardIdToDelete) {
          api
            .deleteCard(cardIdToDelete)
            .then(() => {
              console.log(`Tarjeta ${cardIdToDelete} eliminada del servidor`);
              const cardElement = document.querySelector(
                `[data-id="${cardIdToDelete}"]`
              );
              cardElement.remove(); // Elimina la tarjeta del DOM
              console.log(cardElement);

              popupDeleteConfirmation.close(); // Cierra el popup
            })
            .catch((error) => {
              console.error("Error al eliminar la tarjeta:", error);
            });
        }
      }
    );

    popupDeleteConfirmation.setEventListeners();
    popupDeleteConfirmation.open();
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners() {
    this._deleteButton = this._element.querySelector(
      ".elements__button-delete"
    );
    this._deleteButton.addEventListener("click", this._handleDeleteCard);

    this._likeButton.addEventListener("click", this._handleLikeButton);

    this._imageCard = this._element.querySelector(".elements__photo");
    this._imageCard.addEventListener("click", this._handleImageClick);
  }

  getView() {
    this._element = this._getTemplate();
    this._element.dataset.id = this._id;

    this._imageCard = this._element.querySelector(".elements__photo");
    this._descriptionCard = this._element.querySelector(
      ".elements__footer-name"
    );
    this._likeButton = this._element.querySelector(".button__like");

    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._descriptionCard.textContent = this._name;

    if (this._isLiked) {
      this._likeButton.classList.add("button__like_active");
    }

    this._setEventListeners();

    return this._element;
  }

  _handleLikeButton() {
    this._api
      .like(this._id)
      .then(() => {
        this._likeButton.classList.toggle("button__like_active");
        userLikes[this._id] = !userLikes[this._id];
      })
      .catch((error) => {
        console.error("Error al dar like a la tarjeta:", error);
      });
  }

  setLiked() {
    this._likeButton.classList.add("button__like_active");
  }
}
