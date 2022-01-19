import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import style from "../PrimaryModal/style"
import "../PrimaryModal/primary-modal.scss"
import React, { useState, useRef } from "react";
import './DockIcon.scss';

export const DockIcon = ({children,dockText, dockIcon}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div className="dock-icon-container" onDoubleClick={handleOpen}>
            <img src={dockIcon} alt="" className="dock-icon" />
            <p className="dock-text">{dockText}</p>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>
    )
}