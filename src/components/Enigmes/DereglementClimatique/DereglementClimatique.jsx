import { useEffect, useState } from "react/cjs/react.development";
import "./DereglementClimatique.scss";
import {store} from "../../../redux/store"
import { useSelector } from "react-redux";
import { updateMission } from "../../../services/firebaseService";

export const DereglementClimatique = () => {
  const [openHackMenu, setOpenHackMenu] = useState(false);
  const [password, setPassword] = useState("rechauffement");
  const [userPassword, setUserPassword] = useState("");
  const [displayLoader, setDisplayLoader] = useState(true);
  const [displayNews, setDisplayNews] = useState(false);
  const missions = useSelector(state=> state.missionsReducer)

  const AnalysePassword = () => {
    if (password === userPassword) {
      alert("good job");

      missions[2].completed = true
      store.dispatch({
          type: "missions/update",
          payload: missions,
        });
        updateMission("2")
    } else {
      alert("loose");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false);
    }, 3000);
    setTimeout(() => {
      setDisplayNews(true);
    }, 3000);
  }, []);
  
  return (
    <div className="DereglementClimatique">
      {displayLoader ? (
        <video autoPlay className="loader-canad-air">
          <source
            src="assets/video/loader/loader-candad-air.mp4"
            type="video/mp4"
          />
        </video>
      ) : null}

      {displayNews === false ? null : (
        <div className="breaking-news">
          <video autoPlay loop className="breaking-news-video">
            <source src="assets/video/video_canadair.mp4" type="video/mp4" />
          </video>
          <div className="tv-interface">
            <div className="logo-tv-container">
            </div>
            <div className="tv-effect"></div>
            <div className="news-link">
              <p className="news">
                <strong>Canada :</strong> Pour plus d'informations sur ce sujet
                et bien d'autres ... rendez-vous sur ce site {" "}
                <span
                  className="link-news"
                  onClick={() => {
                    setDisplayNews(false);
                  }}
                >
                  https://bombardier.com/fr
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      )}

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
          <li className="canad-air-nav-item"><a href="/404" target="_blank">NOTRE HISTOIRE</a></li>
          <li className="canad-air-nav-item"><a href="/404" target="_blank">LOCALISATION</a></li>
        </ul>
      </nav>
      {openHackMenu === false ? (
        <div className="canad-air-site-normal">
          <div className="canad-air-content">
            <h3 className="canad-air-title">Vous prot??gez notre priorit??</h3>
            <p className="canad-air-desc">
              Canad-air lutte contre les incendies et le r??chauffement cimatique
              depuis 1952.
            </p>
            <a className="canad-air-watch-video" href="/404" target="_blank">
              VISIONNEZ LA VIDEO
            </a>
          </div>
          <div className="airplane-normal"></div>
        </div>
      ) : null}
      
      {openHackMenu ? (
        <div className="canad-air-piratage">
          <div className="canad-air-hack-form">
            <label htmlFor="">ENTREZ LE MOT DE PASSE :</label>
            <input
              type="text"
              className="canad-air-password-input"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
            <div
              className="canad-air-submit-password-button"
              onClick={AnalysePassword}
            >
              Valider
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
