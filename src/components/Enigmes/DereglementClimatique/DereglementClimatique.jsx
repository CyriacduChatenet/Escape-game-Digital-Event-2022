import { useState } from "react/cjs/react.development";
import "./DereglementClimatique.scss";

export const DereglementClimatique = () => {
  const [openHackMenu, setOpenHackMenu] = useState(false);
  const [password, setPassword] = useState("rechauffement")
  const [userPassword, setUserPassword] = useState("")

  const AnalysePassword = () => {
    if(password === userPassword){
      alert('good job')
    }else {
      alert("loose")
    }
  }
  return (
    <div className="DereglementClimatique">
      <nav className="canad-air-nav">
        <ul className="canad-air-list">
          <li
            className="canad-air-nav-item"
            onClick={() => {
              setOpenHackMenu(true);
            }}
          >
            NOS AVIONS
          </li>
          <li className="canad-air-nav-item">NOTE HISTOIRE</li>
          <li className="canad-air-nav-item">LOCALISATION</li>
        </ul>
      </nav>
      {openHackMenu === false ? (
        <div className="canad-air-site-normal">
          <div className="canad-air-content">
            <h3 className="canad-air-title">Vous protégez notre priorité</h3>
            <p className="canad-air-desc">
              Canad-air lutte contre les incendies et le réchauffement cimatique
              depuis 1952.
            </p>
            <button className="canad-air-watch-video">
              VISIONNEZ LA VIDEO
            </button>
          </div>
          <div className="airplane-normal"></div>
        </div>
      ) : null}
      {openHackMenu ? (
        <div className="canad-air-piratage">
          <div className="canad-air-hack-form">
            <label htmlFor="">ENTREZ LE MOT DE PASSE :</label>
            <input type="text" className="canad-air-password-input" onChange={(e) => {setUserPassword(e.target.value)}} />
            <div className="canad-air-submit-password-button" onClick={AnalysePassword}>Valider</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
