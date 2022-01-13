import { useState } from 'react';
import App from '../../App';
import './Dossier.scss';

export const Dossier = () => {

    const [dossier, setDossier] = useState(false)
    console.log('dossier :', dossier);

    const [open, setOpen] = useState(false)
    console.log('PopUp Open :', open)

    return(
        <div className = 'dossierContainer'>
            <div className = 'dossierItem' onClick={()=>{setDossier(true);setOpen(true);}} style={open === false ? {pointerEvents:'auto'} : {pointerEvents:'none'}}></div>
            <div className ='popUpDossier' style={dossier === false ? {display:'none'} : {display:'block'}}>
                <div className = 'dossierItem second'></div>
                <div className = 'dossierItem second'></div>
                <div className = 'dossierItem second'></div>
            </div>
        </div>
    )
}