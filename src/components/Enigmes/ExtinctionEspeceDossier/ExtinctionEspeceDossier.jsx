import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import style from "../../PrimaryModal/style"
import "../../PrimaryModal/primary-modal.scss"
import { DossierExtinctionEspece } from '../../DossierExtinctionEspece/DossierExtinctionEspece';

export const ExtinctionEspeceDossier = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <div onDoubleClick={handleOpen}>
            <div className="folder">
                <img src="/assets/images/folder-icon/folder-icon.png" alt=""  />
                <p>Extinction des espèces</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DossierExtinctionEspece/>
                </Box>
            </Modal>
        </div>
     );
}