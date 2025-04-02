export default function newCard() {
  return (
    <form
      className="popup__form"
      id="add-place-form"
      name="card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          name="title"
          type="text"
          className="popup__input popup__input_type_name"
          id="input-title"
          placeholder="Título"
          required
          minlength="2"
          maxlength="30"
        />
        <span className="popup__error" id="input-title-error"></span>
        <div className="popup__line"></div>
      </label>
      <label className="popup__field">
        <input
          name="link"
          id="input-url"
          className="popup__input popup__input_type_about"
          placeholder="Enlace a la imagen"
          required
          type="url"
        />
        <span className="popup__error" id="input-url-error"></span>
        <div className="popup__line"></div>
      </label>
      <button
        id="btn_create_card"
        type="submit"
        className="popup__submit-button"
      >
        Crear
      </button>
    </form>
  );
}
