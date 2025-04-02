export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      id="change-avatar-form"
      name="avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
          name="link"
          id="url-photo"
          className="popup__input popup__input_type_about"
          placeholder="Enlace a la imagen"
          required
          type="url"
        />
        <span className="popup__error" id="input-url-error"></span>
        <div className="popup__line"></div>
      </label>
      <button
        id="Button-SaveProfile"
        type="submit"
        className="popup__submit-button"
      >
        Guardar
      </button>
    </form>
  );
}
