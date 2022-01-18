import { useState, useEffect } from 'react'
import './DossierJustice.scss'

export const DossierJustice = () => {

    const [dossierJustice, setDossierJustice] = useState(true)
    // console.log('dossierJustice :', dossierJustice);

    const [openJustice, setOpenJustice] = useState(true)
    // console.log('PopUp OpenJustice :', openJustice)

    const [dossierFirst, setDossierFirst] = useState(false)

    const [dossierSecond, setDossierSecond] = useState(false)

    const [dossierThird, setDossierThird] = useState(false)
    
    const [dossierFour, setDossierFour] = useState(false)
    
    const [dossierFive, setDossierFive] = useState(false)
    
    const [dossierSix, setDossierSix] = useState(false)
    
    const [chevron, setChevron] = useState(">")

    return(
        <div className = 'dossierJusticeContainer'>
                <div className ='popUpDossierJustice' style={dossierJustice === false ? {display : 'none'} : {display : 'flex'} }>
                    <div className = 'leftNavDossierJustice'>
                        <div className = 'leftNavSysteme'>
                        <span className='chevronMiddle'>{chevron}</span>
                            <div className = 'logoSystemJustice'></div>
                            &nbsp;
                            <p>Système</p>
                            
                        </div>
                        <div className = 'leftNavSecondSysteme'>
                            <span className='chevronMiddle'>{chevron}</span>
                            <div className = 'dossierJusticeItemsecond espece'></div>
                            &nbsp;
                            <p>Justice</p>
                        </div>
                        <div className='leftNavChildSecondSysteme'>
                            <div className = 'dossierJusticeItemsecond'></div>
                                &nbsp;
                                <p>Dossier1</p>
                        </div>
                        <div className='leftNavChildSecondSysteme'>
                            <div className = 'dossierJusticeItemsecond'></div>
                                &nbsp;
                                <p>Dossier2</p>
                        </div>
                        <div className = 'leftNavSecondSystemeClose'>
                            <div className = 'dossierJusticeItemsecond'></div>
                            &nbsp;
                            <p>Folder</p>
                        </div>
                    </div>
                    <div className = 'rightNavDossierJustice'>
                        <div className = 'lineBottom'>
                            <div className = 'topNavJustice'>
                                <div className = 'topDossierNavJustice systemeDivTop'>
                                    <div className = 'logoSystemJustice'></div>
                                    &nbsp;
                                    <p>Système</p>
                                </div>
                                <div className = 'folderLinkOpen' style={openJustice === false ? {display:'none'} : {display:'flex'}}>
                                    <p className = 'chevron'>{chevron}</p>
                                    <div className = 'topDossierNavJustice'>
                                        <div className = 'logoDossierJustice'></div>
                                        &nbsp;
                                        <p>Justice</p>
                                    </div>
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
                        <div className = 'dossierFirst' style = {dossierFirst === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'dossierJusticeItemsecond'></div>
                                <p className='marginLeftName'>Enigme</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginLeftName'></p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'></p>
                            </div>
                        </div>
                        <div className = 'dossierFirst' style = {dossierSecond === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'dossierJusticeItemsecond'></div>
                                <p className='marginLeftName'>Folder</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginLeftName'></p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}