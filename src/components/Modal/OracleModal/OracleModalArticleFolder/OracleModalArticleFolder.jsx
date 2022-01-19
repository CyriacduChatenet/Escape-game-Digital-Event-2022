import "./OracleModalArticleFolder.scss";
import { ModalArticle } from "../components/ModalArticle";
import { OracleModalArticle1 } from "./OracleModalArticle1/OracleModalArticle1";
import { OracleModalArticle2 } from "./OracleModalArticle2/OracleModalArticle2";
import { OracleModalArticle3 } from "./OracleModalArticle3/OracleModalArticle3";
import { OracleModalArticle4 } from "./OracleModalArticle4/OracleModalArticle4";
import { OracleModalArticle5 } from "./OracleModalArticle5/OracleModalArticle5";

export const OracleModalArticleFolder = () => {
  return (
    <div className="oracle_modal_instruction">
      <video className="video_container" autoPlay loop muted>
        <source src="/assets/video/OracleBDDBackground.mp4" type="video/mp4" />
      </video>

      <div className="navbar_img">
        <img
          src="/assets/images/OracleBDD/navbar.png"
          alt=""
          className="navbar"
        />
      </div>

      <div className="treestructure_container">
        <div className="first_folder_displaying">
          <ModalArticle
            dockText="Déchets plastique"
            dockIcon="./assets/images/folder-icon/file.png"
            br="sur les plages.txt"
            date="21/12/2017 2:38"
            fileSize="666 Ko"
          >
            <OracleModalArticle1 />
          </ModalArticle>
        </div>

        <div className="second_folder_displaying">
          <ModalArticle
            dockText="Cigarette sur"
            dockIcon="./assets/images/folder-icon/file.png"
            br="sur les plages.txt"
            date="21/12/2017 2:38"
            fileSize="541 Ko"
          >
            <OracleModalArticle2 />
          </ModalArticle>
        </div>
        <div>
        
          <div className="first_txt_displaying">
            <ModalArticle
              dockText="Place de Deauville"
              dockIcon="./assets/images/folder-icon/file.png"
              br="et détecteurs de"
              br2="métaux.txt"
              date="21/12/2017 2:38"
              fileSize="490 Ko"
            >
              <OracleModalArticle3 />
            </ModalArticle>
          </div>

          <div className="second_txt_displaying">
            <ModalArticle
              dockText="Les filets"
              dockIcon="./assets/images/folder-icon/file.png"
              br="de pêche.txt"
              date="21/12/2017 2:38"
              fileSize="444 Ko"
            >
              <OracleModalArticle4 />
            </ModalArticle>
          </div>

          <div className="third_txt_displaying">
            <ModalArticle
              dockText="Industrie agro"
              dockIcon="./assets/images/folder-icon/file.png"
              br="-alimentaire.txt"
              date="21/12/2017 2:38"
              fileSize="191 Ko"
            >
              <OracleModalArticle5 />
            </ModalArticle>
          </div>

        </div>
      </div>

      <div className="bg-black"></div>
    </div>
  );
};
