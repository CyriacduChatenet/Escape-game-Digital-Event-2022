import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from '../pages/Homepage/Homepage'
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { CharacterChoicePage } from "../pages/CharacterChoicePage/CharacterChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { WindowsLoader } from '../pages/WindowsLoader/WindowsLoader';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { JeuPingouins } from "../components/Enigmes/JeuPingouins/JeuPingouins";
import { SettingsModal } from '../components/Modal/SettingsModal/SettingsModal';
import { JeuFeuForet } from "../components/Enigmes/JeuFeuForet/JeuFeuForet";
import { JeuJustice } from "../components/Enigmes/JeuJustice/JeuJustice";
import { JeuEcologie } from "../components/Enigmes/JeuEcologie/JeuEcologie";
import { StartPage } from "../pages/StartPage/StartPage";
import Partage from "../components/Enigmes/partage/Partage";
import { QCM } from "../components/QCM/QCM";
import { Galerie } from "../components/Galerie/Galerie";
import "./index.scss"
import { Victory } from "../components/Victory/Victory";
import { Defeat } from "../components/Defeat/Defeat";
import { Canadair } from "../components/Canadair/Canadair";
import { JeuRepartition } from "../components/Enigmes/JeuRepartition/JeuRepartition";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/choix-de-personnages" element={<CharacterChoicePage />} />
          <Route path="/settings-modal" element={<SettingsModal />} />
          <Route exact path="/loaderpage" element={<LoaderPage />} />
          <Route exact path="/windowsloader" element={<WindowsLoader />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/jeu-pingouins" element={<JeuPingouins />} />
          <Route exact path="/jeu-foret" element={<JeuFeuForet />} />
          <Route exact path="/jeu-justice" element={<JeuJustice />} />
          <Route exact path="/Partage" element={<Partage />} />
          <Route exact path="/Galerie" element={<Galerie />} />
          <Route exact path="/start-page" element={<StartPage />} />

          {/* Routes test */}
          <Route exact path="/victory" element={<Victory />} />
          <Route exact path="/defeat" element={<Defeat />} />
          <Route exact path="/canadair" element={<Canadair />} />
          <Route exact path="/jeu-ecologie" element={<JeuEcologie />} />
          <Route exact path="/jeu-repartition" element={<JeuRepartition />} />

          <Route path='*' exact={true} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;