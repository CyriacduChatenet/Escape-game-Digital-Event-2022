import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
// import style from "../PrimaryModal/style"
// import "../PrimaryModal/primary-modal.scss"
// import './DockIcon.scss';
import React, { useState, useRef } from "react";

export const ModalArticle = ({children,dockText, dockIcon,date,fileSize,br}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div className="dock-icon-container" onDoubleClick={handleOpen}>
            <img src={dockIcon} alt="" className="folder_displaying"  />
            <p className="treestructure_text_instruction">
                {dockText}
                <br />{br}
            </p>
            <p className="treestructure_date">{date}</p>
            <p className="file_weight">{fileSize}</p>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box >
                    {children}
                </Box>
            </Modal>
        </div>
    )
}