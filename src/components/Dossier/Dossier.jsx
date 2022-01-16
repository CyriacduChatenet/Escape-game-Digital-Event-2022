import { useState } from 'react';
import './Dossier.scss';

export const Dossier = () => {

    const [dossierJustice, setDossierJustice] = useState(false)
    console.log('dossierJustice :', dossierJustice);

    const [openJustice, setOpenJustice] = useState(false)
    console.log('PopUp Open :', openJustice)

    return(
            <div className = 'dossierContainer'>
                <div className = 'nameDossierDiv'>
                    <div className = 'dossierItem' onDoubleClick={()=>{setDossierJustice(true);setOpenJustice(true);}}>
                        <div className ='loaderCircle'></div>
                    </div>
                    <p>Ecologie</p>
                </div>
                <div className ='popUpDossier' style={dossierJustice === false ? {display:'none'} : {display:'flex'}}>
                    <div className = 'closeDossier' onClick={()=>{setDossierJustice(false)}}></div>
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