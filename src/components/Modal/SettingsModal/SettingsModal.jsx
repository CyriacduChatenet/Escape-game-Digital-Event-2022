import "./SettingsModal.scss";

export const SettingsModal = () => {
  return (
    <div className="settingsModalPage">
      <div className="settingsModal">
        <div className="leftSideMenu">
          <div className="userAvatar">
            <img
              src="https://via.placeholder.com/75"
              alt=""
              className="avatarImg"
            />
            <p className="avatarName">Insérer variable (ex : AvatarName)</p>
          </div>

          <ul className="settingsList">
            <p className="settingsItem">Système</p>
            <p className="settingsItem">Bluetooth et appareils</p>
            <p className="settingsItem">Réseau et internet</p>
            <p className="settingsItem">Personnalisation</p>
            <p className="settingsItem">Applications</p>
            <p className="settingsItem">Comptes</p>
            <p className="settingsItem">Heure et langue</p>
            <p className="settingsItem">Jeux</p>
            <p className="settingsItem">Accessibilité</p>
            <p className="settingsItem">Confidentialité et securité</p>
            <p className="settingsItem">Mises à jour</p>
          </ul>
          
        </div>

        <div className="rightSideMenu"></div>
      </div>
    </div>
  );
};
