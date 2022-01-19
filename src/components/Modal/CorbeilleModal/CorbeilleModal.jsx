import "./CorbeilleModal.scss";
import { FaChevronRight } from 'react-icons/fa';
import { useState } from "react/cjs/react.development";

export const CorbeilleModal = () => {
  const [show, setShow] = useState(false)
  const [restauration, setRestauration] = useState(false)

  const handleClick = () => setShow(true)

  const handleRestauration = () => setRestauration(true)

  return (
    <div className="corbeille_page">
      <div className="leftSideMenu">

        <div className="userAvatar">
          <img src="assets/images/corbeille/userIcon.png" alt="" className="avatarImg" />
          <p className="avatarName">Profil Utilisateur</p>
        </div>

        <ul className="settingsList">

          <div className="currentSelec">
            <li className="settingsItem">Corbeille</li>
          </div>

          <li className="settingsItemNotSelec">Bluetooth et appareils</li>
          <li className="settingsItemNotSelec">Réseau et internet</li>
          <li className="settingsItemNotSelec">Personnalisation</li>
          <li className="settingsItemNotSelec">Applications</li>
          <li className="settingsItemNotSelec">Comptes</li>
          <li className="settingsItemNotSelec">Heure et langue</li>
          <li className="settingsItemNotSelec">Jeux</li>
          <li className="settingsItemNotSelec">Accessibilité</li>
          <li className="settingsItemNotSelec">Confidentialité et securité</li>
          <li className="settingsItemNotSelec">Mises à jour</li>

        </ul>
      </div>

      <div className="rightSideMenu">
        <p className="rightSideText">
          Corbeille : 1 élément ?<br></br>
          L'avenir de la planète se joue maintenant !
        </p>
        <div className="scrollDrawerContainerCorbeille">
          <div className="scrollDrawerText" style={{ flexDirection: show ? "column" : "row", paddingTop: show ? 20 : 0 }}>
            <img src="assets/images/corbeille/_..-..-_.-..._.png" alt="" />
            {
              !restauration ? (
                <>
                  {show ? (
                    <div className="trashShow">
                      <div className="trashBtn" onClick={handleRestauration}>Restaurer</div>
                      <div className="trashBtn">Supprimer</div>
                      <div className="trashBtn">Voir</div>
                    </div>
                  ) : (
                    <div className="chevronIconCorbeille" onClick={handleClick}>
                      VOIR L'ÉLÉMENT<FaChevronRight />
                    </div>
                  )}
                </>
              ) : (
                <img className="trashImg" src="assets/images/corbeille/codeEscapeGame-02 1.png" alt="" />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};
