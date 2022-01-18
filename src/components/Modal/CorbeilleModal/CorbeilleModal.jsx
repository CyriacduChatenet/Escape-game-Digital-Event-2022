import "./CorbeilleModal.scss";
import { FaChevronRight } from 'react-icons/fa';

export const CorbeilleModal = () => {
  return (
    <div className="corbeille_page">
      <div className="leftSideMenu">
        <div className="userAvatar">
          <img
            src="assets/images/corbeille/userIcon.png"
            alt=""
            className="avatarImg"
          />
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
        <div className="scrollDrawerText">
            <img src="assets/images/corbeille/_..-..-_.-..._.png" alt="" />
        </div>
        <div className="chevronIconCorbeille">
          VOIR L'ÉLÉMENT<FaChevronRight />
        </div>
      </div>
      </div>
    </div>
  );
};
