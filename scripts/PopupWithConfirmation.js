import { Popup } from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmation) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._confirm_button = document.querySelector("#button-delete");
    this._handleConfirmation = handleConfirmation;
    this._form =
      this._popup.querySelector("form") ||
      this._popup.querySelector(".popup__form");
  }

  setEventListeners() {
    this._confirm_button.onclick = () =>{
      this._handleConfirmation();
    }

    super.setEventListeners();
    console.log("setEventListeners ejecutado en PopupWithConfirmation");
    console.log("Valor de this._form:", this._form);
    


    if (this._form) {
      this._form.addEventListener("submit", (event) => {
        event.preventDefault();
        this._handleConfirmation();
      });
    } else {
      console.error("El formulario no se encontró en el popup.");
    }
  }

  close() {
    this._form.reset();
    super.close();
  }
}
