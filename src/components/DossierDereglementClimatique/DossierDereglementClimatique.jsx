import { useState, useEffect } from 'react'
import './DossierDereglementClimatique.scss'

export const DossierDereglementClimatique = () => {

    const [dossierDereglementClimatique, setDossierDereglementClimatique] = useState(true)
    // console.log('dossierDereglementClimatique :', dossierDereglementClimatique);

    const [openDereglementClimatique, setOpenDereglementClimatique] = useState(true)
    // console.log('PopUp OpenDereglementClimatique :', openDereglementClimatique)

    const [dossierFirst, setDossierFirst] = useState(false)

    const [dossierSecond, setDossierSecond] = useState(false)

    const [dossierThird, setDossierThird] = useState(false)
    
    const [dossierFour, setDossierFour] = useState(false)
    
    const [dossierFive, setDossierFive] = useState(false)
    
    const [dossierSix, setDossierSix] = useState(false)
    
    const [chevron, setChevron] = useState(">")

    return(
        <div className = 'dossierDereglementClimatiqueContainer'>
                <div className ='popUpDossierDereglementClimatique' style={dossierDereglementClimatique === false ? {display : 'none'} : {display : 'flex'} }>
                    <div className = 'leftNavDossierDereglementClimatique'>
                        <div className = 'leftNavSysteme'>
                        <span className='chevronMiddle'>{chevron}</span>
                            <div className = 'logoSystemDereglementClimatique'></div>
                            &nbsp;
                            <p>Système</p>
                            
                        </div>
                        <div className = 'leftNavSecondSysteme'>
                            <span className='chevronMiddle'>{chevron}</span>
                            <div className = 'dossierDereglementClimatiqueItemsecond espece'></div>
                            &nbsp;
                            <p>Déréglemenet...</p>
                        </div>
                        <div className='leftNavChildSecondSysteme'>
                            <div className = 'dossierDereglementClimatiqueItemsecond'></div>
                                &nbsp;
                                <p>Dossier1</p>
                        </div>
                        <div className='leftNavChildSecondSysteme'>
                            <div className = 'dossierDereglementClimatiqueItemsecond'></div>
                                &nbsp;
                                <p>Dossier2</p>
                        </div>
                        <div className = 'leftNavSecondSystemeClose'>
                            <div className = 'dossierDereglementClimatiqueItemsecond'></div>
                            &nbsp;
                            <p>Folder</p>
                        </div>
                    </div>
                    <div className = 'rightNavDossierDereglementClimatique'>
                        <div className = 'lineBottom'>
                            <div className = 'topNavDereglementClimatique'>
                                <div className = 'topDossierNavDereglementClimatique systemeDivTop'>
                                    <div className = 'logoSystemDereglementClimatique'></div>
                                    &nbsp;
                                    <p>Système</p>
                                </div>
                                <div className = 'folderLinkOpen' style={openDereglementClimatique === false ? {display:'none'} : {display:'flex'}}>
                                    <p className = 'chevron'>{chevron}</p>
                                    <div className = 'topDossierNavDereglementClimatique'>
                                        <div className = 'logoDossierDereglementClimatique'></div>
                                        &nbsp;
                                        <p>Déréglement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ='middleNavDereglementClimatique'>
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
                                <div className = 'dossierDereglementClimatiqueItemsecond'></div>
                                <p className='marginLeftName'>dossier1</p>
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
                                <div className = 'dossierDereglementClimatiqueItemsecond'></div>
                                <p className='marginLeftName'>dossier2</p>
                                <div className = 'logoSystemesecond'></div>
                                <p className='marginLeftName'>tableau.txt</p>
                            </div>
                            <div className = 'modifiedMiddle'>
                                <p className='marginLeftName'>21/12/2017 2:38</p>
                            </div>
                            <div className = 'widthMiddle'>
                                <p className='marginRightName widthLeftTextAlign'>470 Ko</p>
                            </div>
                            <div className = 'typeMiddle'>
                                <p className='marginLeftName'>Document txt</p>
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