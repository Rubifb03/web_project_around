export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    // this._imageCard = this._element.querySelector(".elements__photo");
    // this._descriptionCard = this._element.querySelector(
    //   ".elements__footer-name"
    // );

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
    this._element.remove();
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
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
}
