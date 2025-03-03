export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    console.log("Popup encontrado:", this._popup);
    this._handleEscClose = this._handleEscClose.bind(this);

    if (!this._popup) {
      console.error("Elemento popup no encontrado");
    }
  }

  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}
