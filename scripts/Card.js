export default class Card {
  constructor(name, link, cardSelector, modal) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._modal = modal;

    this._handleLikeButton = this._handleLikeButton.bind(this);
    this._handleDeleteCard = this._handleDeleteCard.bind(this);

    this._handleImageClick = this._handleImageClick.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__group")
      .cloneNode(true);
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._deleteButton = this._element.querySelector(
      ".elements__button-delete"
    );
    this._deleteButton.addEventListener("click", this._handleDeleteCard);

    this._likeButton = this._element.querySelector(".button__like");
    this._likeButton.addEventListener("click", this._handleLikeButton);

    this._imageCard = this._element.querySelector(".elements__photo");
    this._imageCard.addEventListener("click", this._handleImageClick);

    this._closeModalButton = this._modal.querySelector(".popup__modal-button");
    this._closeModalButton.addEventListener("click", this._closeModal);

    this._modal.addEventListener("click", (evt) => {
      if (evt.target === this._modal) {
        this._closeModal();
      }
    });
  }

  getView() {
    this._element = this._getTemplate();
    this._imageCard = this._element.querySelector(".elements__photo");
    this._descriptionCard = this._element.querySelector(
      ".elements__footer-name"
    );

    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._descriptionCard.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("button__like_active");
  }

  _handleImageClick() {
    this._modalImage = this._modal.querySelector(".popup__modal-content");
    this._modalDescrition = this._modal.querySelector(
      ".popup__modal-description"
    );

    this._modalImage.src = this._link;
    this._modalDescrition.textContent = this._name;
    this._modal.classList.add("popup_visible");
  }

  _closeModal() {
    this._modal.classList.remove("popup_visible");
  }
}
