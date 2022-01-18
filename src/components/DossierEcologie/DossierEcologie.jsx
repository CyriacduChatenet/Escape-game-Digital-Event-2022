import { useState, useEffect } from 'react'
import './DossierEcologie.scss'
import Modal from '@mui/material/Modal'
import style from "../../components/PrimaryModal/style"
import Box from '@mui/material/Box';
import { JeuDechetsNew } from '../Enigmes/JeuDechetsNew/JeuDechetsNew';
import { QCM } from '../QCM/QCM'

// TODO :
// Problème de modale quizz / jeu qui ne s'ouvrent pas correctement, ça ouvre toujours la même

export const DossierEcologie = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dossierEcologie, setDossierEcologie] = useState(true)
  // console.log('dossierEcologie :', dossierEcologie);

  const [openEcologie, setOpenEcologie] = useState(true)
  // console.log('PopUp OpenEcologie :', openEcologie)

  const [dossierFirst, setDossierFirst] = useState(false)

  const [dossierSecond, setDossierSecond] = useState(false)

  const [dossierThird, setDossierThird] = useState(false)

  const [dossierFour, setDossierFour] = useState(false)

  const [dossierFive, setDossierFive] = useState(false)

  const [dossierSix, setDossierSix] = useState(false)

  const [chevron, setChevron] = useState(">")

  return (
    <div className='dossierEcologieContainer'>
      <div className='popUpDossierEcologie' style={dossierEcologie === false ? { display: 'none' } : { display: 'flex' }}>
        <div className='leftNavDossierEcologie'>
          <div className='leftNavSysteme'>
            <span className='chevronMiddle'>{chevron}</span>
            <div className='logoSystemEcologie'></div>
            &nbsp;
            <p>Système</p>
          </div>
          <div className='leftNavSecondSysteme'>
            <span className='chevronMiddle'>{chevron}</span>
            <div className='dossierEcologieItemsecond espece'></div>
            &nbsp;
            <p>Ecologie</p>
          </div>
          <div className='leftNavChildSecondSysteme'>
            <div className='dossierEcologieItemsecond'></div>
            &nbsp;
            <p>Dossier1</p>
          </div>
          <div className='leftNavChildSecondSysteme'>
            <div className='dossierEcologieItemsecond'></div>
            &nbsp;
            <p>Dossier2</p>
          </div>
          <div className='leftNavSecondSystemeClose'>
            <div className='dossierEcologieItemsecond'></div>
            &nbsp;
            <p>Folder</p>
          </div>
        </div>
        <div className='rightNavDossierEcologie'>
          <div className='lineBottom'>
            <div className='topNavEcologie'>
              <div className='topDossierNavEcologie systemeDivTop'>
                <div className='logoSystemEcologie'></div>
                &nbsp;
                <p>Système</p>
              </div>
              <div className='folderLinkOpen' style={openEcologie === false ? { display: 'none' } : { display: 'flex' }}>
                <p className='chevron'>{chevron}</p>
                <div className='topDossierNavEcologie'>
                  <div className='logoDossierEcologie'></div>
                  &nbsp;
                  <p>Ecologie</p>
                </div>
              </div>
            </div>
          </div>
          <div className='middleNavEcologie'>
            <div className='nameMiddle'>
              <div className='lineRight flexName'>
                <p>Nom</p>
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
          <div className='dossierFirst' onDoubleClick={handleOpen} style={dossierFirst === true ? { display: 'none' } : { display: 'flex', cursor: 'pointer' }}>
            <div className='nameMiddle nameBottom'>
              <div className='dossierEcologieItemsecond'></div>
              <p className='marginLeftName'>Quizz</p>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <QCM />
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
          <div className='dossierSecond' onDoubleClick={handleOpen} style={dossierSecond === true ? { display: 'none' } : { display: 'flex', cursor: 'pointer' }}>
            <div className='nameMiddle nameBottom'>
              <div className='dossierEcologieItemsecond'></div>
              <p className='marginLeftName'>Mini jeu</p>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <JeuDechetsNew />
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
          <div className='dossierThird' style={dossierThird === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>fichier1.nao</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>470 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document NaO</p>
            </div>
          </div>
          <div className='dossierFour' style={dossierFour === true ? { display: 'none' } : { display: 'flex' }}>
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
          <div className='dossierFive' style={dossierFive === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>instruction.txt</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>28 191 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document Texte</p>
            </div>
          </div>
          <div className='dossierSix' style={dossierSix === true ? { display: 'none' } : { display: 'flex' }}>
            <div className='nameMiddle nameBottom'>
              <div className='logoSystemesecond'></div>
              <p className='marginLeftName'>général.orcl</p>
            </div>
            <div className='modifiedMiddle'>
              <p className='marginLeftName'>21/12/2017 2:38</p>
            </div>
            <div className='widthMiddle'>
              <p className='marginRightName widthLeftTextAlign'>74 Ko</p>
            </div>
            <div className='typeMiddle'>
              <p className='marginLeftName'>Document Oracle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}