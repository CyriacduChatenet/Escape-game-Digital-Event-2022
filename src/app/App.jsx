import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Homepage} from '../pages/Homepage/Homepage'
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { CharacterChoicePage } from "../pages/CharacterChoicePage/CharacterChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { WindowsLoader } from '../pages/WindowsLoader/WindowsLoader';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { JeuPingouins } from "../components/Enigmes/JeuPingouins/JeuPingouins";
import { JeuDechets } from "../components/Enigmes/JeuDechets/JeuDechets";
import { SettingsModal } from '../components/Modal/SettingsModal/SettingsModal';
import { JeuFeuForet } from "../components/Enigmes/JeuFeuForet/JeuFeuForet";
import { JeuJustice } from "../components/Enigmes/JeuJustice/JeuJustice";
import { JeuDechetsNew } from "../components/Enigmes/JeuDechetsNew/JeuDechetsNew";

import "./index.scss"
import Partage from "../components/Enigmes/partage/Partage";
import { QCM } from "../components/QCM/QCM";

function App() {
  return (
      <div className="app">
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={ <Homepage/> }/>
              <Route path="/choix-de-personnages" element={ <CharacterChoicePage/> }/>
              <Route path="/settings-modal" element={ <SettingsModal/> }/>
              <Route exact path="/loaderpage" element={ <LoaderPage/> }/>
              <Route exact path="/windowsloader" element={<WindowsLoader/> }/>
              <Route exact path="/dashboard" element={ <DashboardPage/> }/>
              <Route exact path="/jeu-pingouins" element={ <JeuPingouins/> }/>
              <Route exact path="/jeu-dechets" element={ <JeuDechets/> }/>
              <Route exact path="/jeu-foret" element={ <JeuFeuForet/> }/>
              <Route exact path="/jeu-justice" element={ <JeuJustice/> }/>
              <Route exact path="/Partage" element={ <Partage /> }/>
              <Route exact path="/jeu-dechets-new" element={ <JeuDechetsNew/> }/>
              <Route exact path="/QCM" element={ <QCM /> }/>

              <Route path='*' exact={true} element={ <ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;