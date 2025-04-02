import Avatar from "../../../images/Avatar.jpg";
import pincelButton from "../../../images/Lapiz Editar.png";
import { useState } from "react";
import NewCard from "./Popup/NewCard/NewCard.jsx";
import EditAvatar from "./Popup/EditAvatar/EditAvatar.jsx";
import EditProfile from "./Popup/EditProfile/EditProfile.jsx";
import Popup from "./Popup/Popup.jsx";
import Card from "../../components/Cards/Cards.jsx";
import ImagePopup from "./Popup/ImagePopup/ImagePopup.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", Children: <NewCard /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    Children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    Children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-container">
            <img
              src={Avatar}
              alt="Foto Avatar"
              className="profile__avatar"
              id="profile-avatar"
            />
            <button
              className="profile__avatar-button"
              type="button"
              aria-label="Edit Avatar"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            >
              <img
                src={pincelButton}
                alt="Editar foto"
                className="profile__avatar-edit"
              />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__header">
              <h1 className="profile__header-title" id="profile-name">
                Jacques Cousteau
              </h1>
              <button
                aria-label="Edit Profile"
                type="button"
                className="profile__header-button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="profile__description" id="profile-description">
              Explorador
            </p>
          </div>
        </div>
        <div className="profile__button">
          <button
            aria-label="Add card"
            className="profile__button-add"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            +
          </button>
        </div>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.card && (
            <ImagePopup card={popup.card} onClose={handleClosePopup} />
          )}
          {popup.Children}
        </Popup>
      )}

      <section class="elements">
        <div class="elements__grid">
          {cards.map((cardElm) => (
            <Card
              key={cardElm._id}
              card={cardElm}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
