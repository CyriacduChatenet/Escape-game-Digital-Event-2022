import { useState } from 'react/cjs/react.development'
import './Surconsommation.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import style from "../PrimaryModal/style"
import "../PrimaryModal/primary-modal.scss"
import { SurconsommationPasswordDecryptor } from '../SurconsommationPasswordDecryptor/SurconsommationPasswordDecryptor';

export const Surconsommation = () => {
    const [isValide, setIsValide] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className = 'containerSurconsommation'>
            <input type="search" className = 'inputSearch'/>

            <div className="dock-icon-container" onDoubleClick={handleOpen}>
                <div className = 'productContainer' >

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <SurconsommationPasswordDecryptor />
                    </Box>
                </Modal>
            </div>

            {isValide == false ? 
                <div className='scrollDiv'>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                </div>
                : null}

            </div>
        </div>
    )
}