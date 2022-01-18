import { useState } from 'react/cjs/react.development'
import './Galerie.scss'

export const Galerie = () => {
    const [dossierJustice, setDossierJustice] = useState(true)
    console.log('dossierJustice :', dossierJustice);

    const [openJustice, setOpenJustice] = useState(true)
    console.log('PopUp OpenJustice :', openJustice)

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
                            <span>{chevron}</span>
                            <div className = 'dossierJusticeItemsecond espece'></div>
                            &nbsp;
                            <p>Galerie</p>
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
                                        <p>Galerie</p>
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
                        <div className="galeriePicture">
                            <div className="picture">
                                <div className="picture1"></div>
                                <p>Picture 1</p>
                            </div>
                            <div className="picture">
                                <div className="picture2"></div>
                                <p>Picture 2</p>
                            </div>
                            <div className="picture">
                                <div className="picture3"></div>
                                <p>Picture 3</p>
                            </div>
                            <div className="picture">
                                <div className="picture4"></div>
                                <p>Picture 4</p>
                            </div>
                            <div className="picture">
                                <div className="picture5"></div>
                                <p>Picture 5</p>
                            </div>
                            <div className="picture">
                                <div className="picture6"></div>
                                <p>Picture 6</p>
                            </div>
                            <div className="picture">
                                <div className="picture7"></div>
                                <p>Picture 7</p>
                            </div>
                            <div className="picture">
                                <div className="picture8"></div>
                                <p>Picture 8</p>
                            </div>
                            <div className="picture">
                                <div className="picture9"></div>
                                <p>Picture 9</p>
                            </div>
                            <div className="picture">
                                <div className="picture10"></div>
                                <p>Picture 10</p>
                            </div>
                            <div className="picture">
                                <div className="picture1"></div>
                                <p>Picture 1</p>
                            </div>
                            <div className="picture">
                                <div className="picture2"></div>
                                <p>Picture 2</p>
                            </div>
                            <div className="picture">
                                <div className="picture3"></div>
                                <p>Picture 3</p>
                            </div>
                            <div className="picture">
                                <div className="picture4"></div>
                                <p>Picture 4</p>
                            </div>
                            <div className="picture">
                                <div className="picture5"></div>
                                <p>Picture 5</p>
                            </div>
                            <div className="picture">
                                <div className="picture6"></div>
                                <p>Picture 6</p>
                            </div>
                            <div className="picture">
                                <div className="picture7"></div>
                                <p>Picture 7</p>
                            </div>
                            <div className="picture">
                                <div className="picture8"></div>
                                <p>Picture 8</p>
                            </div>
                            <div className="picture">
                                <div className="picture9"></div>
                                <p>Picture 9</p>
                            </div>
                            <div className="picture">
                                <div className="picture10"></div>
                                <p>Picture 10</p>
                            </div>
                            <h1>Crédit</h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}