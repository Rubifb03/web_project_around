export default function EditarAvatar() {
  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      name="profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          name="name"
          type="text"
          className="popup__input popup__input_type_name"
          id="input-name"
          placeholder="Nombre"
          required
          minlength="2"
          maxlength="30"
        />
        <span className="popup__error" id="input-name-error"></span>
        <div className="popup__line"></div>
      </label>
      <label className="popup__field">
        <input
          name="description"
          type="text"
          className="popup__input popup__input_type_description"
          id="input-description"
          placeholder="Acerca de mi"
          required
          minlength="2"
          maxlength="200"
        />
        <span className="popup__error" id="input-description-error"></span>
        <div className="popup__line"></div>
      </label>
      <button
        type="submit"
        className="button popup__submit-button"
        id="button-save"
      >
        Guardar
      </button>
    </form>
  );
}
