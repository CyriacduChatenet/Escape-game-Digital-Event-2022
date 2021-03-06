import { ScrollDrawer } from "./ScrollDrawer/ScrollDrawer";
import "./SettingsModal.scss";
import  { DropdownChild } from './ScrollDrawer/DropdownChild'
import { useState } from "react";

export const SettingsModal = () => {
    const [contentDropdown , setContentDropdown] = useState([
      'TU','NE','VAS','RIEN', 'TROUVER',  'ICI', ':P'
    ])
    const [indexOfContent, setIndexOfContent] = useState(1)
    const [currentContent, setCurrentContent] = useState([])

    useState(() => {
      const contentTab = []
      for(let i = 0; i < indexOfContent; i++){
        contentTab.push(contentDropdown[i])
      }
      setCurrentContent(contentTab)
    }, [])

    const handleClick = () => {
      if(currentContent.length < contentDropdown.length - 1){
        const newIndex = indexOfContent + 1
        setIndexOfContent(newIndex)
      }

      const contentTab = []
      for(let i = 0; i < indexOfContent; i++){
        contentTab.push(contentDropdown[i])
      }
      setCurrentContent(contentTab)
    }

  return (
    <div className="settingsModalPage">
      <div className="settingsModal">
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
                <li className="settingsItem">Système</li>
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
                Vraiment ? Des réglages ?<br></br>
                L'avenir de la planète se joue maintenant !<br></br>
                Le temps presse, continue de chercher ailleurs 
            </p>


          {currentContent.map(txt => (
              <div className="scrollDrawerDisplaying">
                <ScrollDrawer txt={txt} handleClick={handleClick} />
            </div>
            ))}

          
            

         

        </div>
      </div>
    </div>
  );
};

// Penser à retirer le background-color, + delete la route settings-modal quand vous intégrerez la modal :D
