import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import style from "../../PrimaryModal/style"
import "../../PrimaryModal/primary-modal.scss"
import "./Oracle.scss";
import { useState } from 'react';

export const OracleModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className="oracle_modal_page">
        <div className="modal_container">
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
                    <img src="assets/images/folder-icon/folder-icon.png" alt="" className="folder_displaying"/>
                    <p className="treestructure_text">dossier1</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                </div>

                <div className="second_folder_displaying">
                    <img src="assets/images/folder-icon/folder-icon.png " alt="" className="folder_displaying"/>
                    <p className="treestructure_text">dossier2</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                </div>

                <div className="first_txt_displaying">
                    <img src="assets/images/folder-icon/folder-icon.png" alt="" className="folder_displaying"/>
                    <p className="treestructure_text">instruction</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">490 Ko</p>
                </div>

                <div className="second_txt_displaying">
                    <img src="assets/images/folder-icon/file.png" alt="" className="file_displaying"/>
                    <p className="treestructure_text">fichier2.nao</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">26 Ko</p>
                </div>

                <div className="third_txt_displaying">
                    <img src="assets/images/folder-icon/file.png" alt="" className="file_displaying"/>
                    <p className="treestructure_text">fichier3.nao</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">28 191 Ko</p>
                    {/* 
                    TODO : Débloquer les tuyaux du jeu Répartition 
                    Faire l'affichage qui dit qu'on a débloqué les tuyaux
                    */}
                </div>

                <div className="fourth_txt_displaying">
                    <img src="assets/images/folder-icon/logo-fichier-oracle.png" alt="" className="oracle_icon_displaying"/>
                    <p className="treestructure_text">général.orcl</p>
                    <p className="treestructure_date">21/12/2017 2:38</p>
                    <p className="file_weight">74 Ko</p>
                </div>

            </div>

            

            <div className="bg-black"></div>
        </div> 
    </div>
  );
};
