import { useState, useEffect } from 'react'
import './DossierSurconsommation.scss'
import Modal from '@mui/material/Modal'
import style from "../../components/PrimaryModal/style"
import Box from '@mui/material/Box';
import { JeuSurconsommation } from '../Enigmes/JeuSurconsommation/JeuSurconsommation';
import { SurconsommationPasswordDecryptor } from '../SurconsommationPasswordDecryptor/SurconsommationPasswordDecryptor';

export const DossierSurconsommation = () => {

  const [openQuizz, setOpenQuizz] = useState(false);
  const handleOpenQuizz = () => setOpenQuizz(true);
  const handleCloseQuizz = () => setOpenQuizz(false);

  const [dossierSurconsommation, setDossierSurconsommation] = useState(true)
  // console.log('dossierSurconsommation :', dossierSurconsommation);

  const [openSurconsommation, setOpenSurconsommation] = useState(true)
  // console.log('PopUp OpenSurconsommation :', openSurconsommation)

  const [dossierFirst, setDossierFirst] = useState(false)

  const [dossierSecond, setDossierSecond] = useState(false)

  const [dossierThird, setDossierThird] = useState(false)

  const [dossierFour, setDossierFour] = useState(false)

  const [dossierFive, setDossierFive] = useState(false)

  const [dossierSix, setDossierSix] = useState(false)

  const [chevron, setChevron] = useState(">")

  return (
    <div className='dossierSurconsommationContainer'>
      <div className='popUpDossierSurconsommation' style={dossierSurconsommation === false ? { display: 'none' } : { display: 'flex' }}>
        <div className='leftNavDossierSurconsommation'>
          <div className='leftNavSysteme'>
            <span className='chevronMiddle'>{chevron}</span>
            <div className='logoSystemSurconsommation'></div>
            &nbsp;
            <p>Système</p>

          </div>
          <div className='leftNavSecondSysteme'>
            <span className='chevronMiddle'>{chevron}</span>
            <div className='dossierSurconsommationItemsecond espece'></div>
            &nbsp;
            <p>Surconsommation</p>
          </div>
          <div className='leftNavChildSecondSysteme'>
            <div className='dossierSurconsommationItemsecond'></div>
            &nbsp;
            <p>Dossier1</p>
          </div>
          <div className='leftNavChildSecondSysteme'>
            <div className='dossierSurconsommationItemsecond'></div>
            &nbsp;
            <p>Dossier2</p>
          </div>
          <div className='leftNavSecondSystemeClose'>
            <div className='dossierSurconsommationItemsecond'></div>
            &nbsp;
            <p>Folder</p>
          </div>
        </div>
        <div className='rightNavDossierSurconsommation'>
          <div className='lineBottom'>
            <div className='topNavSurconsommation'>
              <div className='topDossierNavSurconsommation systemeDivTop'>
                <div className='logoSystemSurconsommation'></div>
                &nbsp;
                <p>Système</p>
              </div>
              <div className='folderLinkOpen' style={openSurconsommation === false ? { display: 'none' } : { display: 'flex' }}>
                <p className='chevron'>{chevron}</p>
                <div className='topDossierNavSurconsommation'>
                  <div className='logoDossierSurconsommation'></div>
                  &nbsp;
                  <p>Surconsommation</p>
                </div>
              </div>
            </div>
          </div>
          <div className='middleNavSurconsommation'>
            <div className='nameMiddle'>
              <div className='lineRight flexName'>
                <p>Nom</p>
                <span className='chevronMiddle'>{chevron}</span>
              </div>
            </div>
            <div className='modifiedMiddle'>
              <div className='lineRight'>
                <p>Modifié le</p>
              </div>
            </div>
            <div className='widthMiddle'>
              <div className='paddingRightMiddle'>
                <p>Taille</p>
              </div>
            </div>
            <div className='typeMiddle'>
              <div className='lineLeft'>
                <p>Type</p>
              </div>
            </div>
          </div>
          <div className='dossierFirst' onDoubleClick={handleOpenQuizz} style={dossierFirst === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='dossierSurconsommationItemsecond'></div>
              <p className='marginLeftName'>Enigme</p>
              <Modal
                open={openQuizz}
                onClose={handleCloseQuizz}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  < JeuSurconsommation />
                </Box>
              </Modal>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginLeftName'></p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'></p>
            </div>
          </div>
          <div className='dossierThird' style={dossierSecond === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='dossierSurconsommationItemsecond'></div>
              <p className='marginLeftName'>dossier2</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>470 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document WrC</p>
            </div>
          </div>
          <div className='dossierFour' style={dossierThird === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>fichier2.nao</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>26 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document NaO</p>
            </div>
          </div>
          <div className='dossierFour' style={dossierFour === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>fichier3.nao</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>29 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document NaO</p>
            </div>
          </div>
          <div className='dossierFour' style={dossierFour === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>fichier4.nao</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>6 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document NaO</p>
            </div>
          </div>
          <div className='dossierFour' style={dossierFour === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>fichier5.nao</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>15 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document NaO</p>
            </div>
          </div>
          <div className='dossierFour' style={dossierFour === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>fichier6.nao</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>2 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document NaO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}