import { useState } from 'react';
import './Dossier.scss';

export const Dossier = () => {

    const [dossier, setDossier] = useState(false)
    console.log('dossier :', dossier);

    const [open, setOpen] = useState(false)
    console.log('PopUp Open :', open)

    return(
            <div className = 'dossierContainer'>
                <div className = 'nameDossierDiv'>
                    <div className = 'dossierItem' onDoubleClick={()=>{setDossier(true);setOpen(true);}}>
                        <div className ='loaderCircle'></div>
                    </div>
                    <p>Ecologie</p>
                </div>
                <div className ='popUpDossier' style={dossier === false ? {display:'none'} : {display:'flex'}}>
                    <div className = 'closeDossier' onClick={()=>{setDossier(false)}}></div>
                    <div className = 'leftNavDossier'>
                        <div className = 'dossierItem second'></div>
                    </div>
                    <div className = 'rightNavDossier'>
                        <div className = 'topNav'>
                            <div className = 'topDossierNav'>
                                <div className = 'logoSystem'></div>
                                <p>Système</p>
                            </div>
                            <p>></p>
                            <div className = 'topDossierNav'>
                                <div className = 'logoSystem'></div>
                                <p>folder</p>
                            </div>
                        </div>
                        <div className = 'dossierItem second'></div>
                        <div className = 'dossierItem second'></div>
                        <div className = 'dossierItem second'></div>
                    </div>
                </div>
            </div>
    )
}