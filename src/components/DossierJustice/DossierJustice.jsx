import { useState, useEffect } from 'react'
import './DossierJustice.scss'

export const DossierJustice = () => {

    const [dossierJustice, setDossierJustice] = useState(false)
    console.log('dossierJustice :', dossierJustice);

    const [openJustice, setOpenJustice] = useState(false)
    console.log('PopUp OpenJustice :', openJustice)

    const [dossierFirst, setDossierFirst] = useState(false)

    const [dossierSecond, setDossierSecond] = useState(false)

    const [dossierThird, setDossierThird] = useState(false)

    const [chevron, setChevron] = useState(">")

    return(
        <div className = 'dossierJusticeContainer'>
                <div className = 'nameDossierJusticeDiv'>
                    <div className = 'dossierJusticeItem' onDoubleClick={()=>{setDossierJustice(true)}}>
                        <div className ='loaderCircleJustice'></div>
                    </div>
                    <p>Ecologie</p>
                </div>
                <div className ='popUpDossierJustice' style={dossierJustice === false ? {display : 'none'} : {display : 'flex'} }>
                    <div className = 'closeDossierJustice' onClick={()=>{setDossierJustice(false)}}></div>
                    <div className = 'leftNavDossierJustice'>
                        <div className = 'dossierItem second'></div>
                    </div>
                    <div className = 'rightNavDossierJustice'>
                        <div className = 'lineBottom'>
                            <div className = 'topNavJustice'>
                                <div className = 'topDossierNavJustice'>
                                    <div className = 'logoSystemJustice'></div>
                                    &nbsp;
                                    <p>Système</p>
                                </div>
                                <p className = 'chevron'>{chevron}</p>
                                <div className = 'topDossierNavJustice'>
                                    <div className = 'logoDossierJustice'></div>
                                    &nbsp;
                                    <p>Folder</p>
                                </div>
                            </div>
                        </div>
                        <div className ='middleNavJustice'>
                            <div className = 'nameMiddle'>
                                <div className = 'lineRight flexName'>
                                    <p>Nom</p>
                                    <span className='chevronMiddle'>{chevron}</span>
                                </div>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <div className = 'lineRight'>
                                    <p>Modifié le</p>
                                </div>
                            </div>
                            <div className = 'widthMiddle'>
                                <div className = 'paddingRightMiddle'>
                                    <p>Taille</p>
                                </div>
                            </div>
                            <div className = 'typeMiddle'>
                                <div className = 'lineLeft'>
                                    <p>Type</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'dossierJusticeItem second' style = {dossierFirst === false ? {display:'none'} : {display:'flex'}}>
                            <p>dossier 1</p>
                        </div>
                        <div className = 'dossierJusticeItem second' style = {dossierSecond === true ? {display:'none'} : {display:'flex'}}>
                            <p>dossier 2</p>
                        </div>
                        <div className = 'dossierJusticeItem second' style = {dossierThird === false ? {display:'none'} : {display:'flex'}}>
                            <p>dossier 3</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}