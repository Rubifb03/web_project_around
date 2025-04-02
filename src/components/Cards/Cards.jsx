import deleteButton from "../../../images/Trash.png";
import React, { useEffect } from "react";
// import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
  const { handleOpenPopup, card } = props;

  useEffect(() => {
    console.log(card);
  }, [])

  const imageComponent = {
    title: card.name,
    card: {
      name: card.name,
      link: card.link,
    },
  };

  return (
    <div className="elements__group">
      <div className="elements__card">
        <button
          className="elements__button-delete"
          type="button"
          aria-label="Delete card"
        >
          <img
            className="button__delete"
            src={deleteButton}
            alt="Botón Eliminar"
          />
        </button>
      </div>
      <img
        src={card.link}
        alt={card.name}
        className="elements__photo"
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <div className="elements__footer">
        <p className="elements__footer-name">{card.name}</p>
        <button
          className="button__like"
          aria-label="Like card"
          type="button"
        ></button>
      </div>
    </div>
  );
}
