import "./OracleModalArticleFolder.scss";
import {ModalArticle} from "../components/ModalArticle"
import { OracleModalArticle1 } from "./OracleModalArticle1/OracleModalArticle1";

export const OracleModalArticleFolder = () => {
  return (
    <div className="oracle_modal_instruction">
        <video className="video_container" autoPlay loop muted>
                <source
                    src="/assets/video/OracleBDDBackground.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="navbar_img">
                <img src="/assets/images/OracleBDD/navbar.png" alt="" className="navbar" />
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
                    <img src="assets/images/folder-icon/file.png " alt="" className="folder_displaying"/>
                    <p className="treestructure_text_instruction">Cigarette sur <br>
                    </br>les plages.txt</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">541 Ko</p>
                </div>

                <div className="first_txt_displaying">
                    <img src="assets/images/folder-icon/file.png" alt="" className="file_displaying2"/>
                    <p className="treestructure_text_instruction">Plage de Deauville<br>
                    </br>et détecteurs de <br>
                    </br>métaux.txt</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">490 Ko</p>
                </div>

                <div className="second_txt_displaying">
                    <img src="assets/images/folder-icon/file.png" alt="" className="file_displaying"/>
                    <p className="treestructure_text_instruction">Les filets <br>
                    </br>de pêche.txt</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">444 Ko</p>
                </div>

                <div className="third_txt_displaying">
                    <img src="assets/images/folder-icon/file.png" alt="" className="file_displaying"/>
                    <p className="treestructure_text">Industrie agro<br>
                    </br>-alimentaire.txt</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">191 Ko</p>
                </div>

            </div>

            

            <div className="bg-black"></div>
    </div>
  );
}
