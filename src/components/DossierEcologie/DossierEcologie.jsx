import { useState, useEffect } from 'react'
import './DossierEcologie.scss'

export const DossierEcologie = () => {

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
                            <p>Ecologie</p>
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
                                        <p>Ecologie</p>
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
                        <div className = 'dossierThird' style = {dossierSecond === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'logoSystemesecond'></div>
                                <p className='marginLeftName'>formation.kec</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginRightName widthLeftTextAlign'>470 Ko</p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'>Document KEC</p>
                            </div>
                        </div>
                        <div className = 'dossierFour' style = {dossierThird === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'logoSystemesecond'></div>
                                <p className='marginLeftName'>fichier2.nao</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginRightName widthLeftTextAlign'>26 Ko</p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'>Document NaO</p>
                            </div>
                        </div>
                        <div className = 'dossierFour' style = {dossierFour === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'logoSystemesecond'></div>
                                <p className='marginLeftName'>fichier3.nao</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginRightName widthLeftTextAlign'>29 Ko</p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'>Document NaO</p>
                            </div>
                        </div>
                        <div className = 'dossierFour' style = {dossierFour === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'logoSystemesecond'></div>
                                <p className='marginLeftName'>fichier4.nao</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginRightName widthLeftTextAlign'>6 Ko</p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'>Document NaO</p>
                            </div>
                        </div>
                        <div className = 'dossierFour' style = {dossierFour === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'logoSystemesecond'></div>
                                <p className='marginLeftName'>fichier5.nao</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginRightName widthLeftTextAlign'>15 Ko</p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'>Document NaO</p>
                            </div>
                        </div>
                        <div className = 'dossierFour' style = {dossierFour === true ? {display:'none'} : {display:'flex'}}>
                            <div className = 'nameMiddle nameBottom'>
                                <div className = 'logoSystemesecond'></div>
                                <p className='marginLeftName'>fichier6.nao</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginRightName widthLeftTextAlign'>2 Ko</p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'>Document NaO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}