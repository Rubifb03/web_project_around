import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._modalImage = this._popup.querySelector(".popup__modal-content");
    this._modalDescrition = this._popup.querySelector(
      ".popup__modal-description"
    );
  }

  open({ link, name }) {
    this._modalImage.src = link;
    this._modalImage.alt = name;
    this._modalDescrition.textContent = name;

    super.open();
  }
}
