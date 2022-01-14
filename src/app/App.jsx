import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Homepage} from '../pages/Homepage/Homepage'
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { SessionChoicePage } from "../pages/SessionChoicePage/SessionChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { WindowsLoader } from '../pages/WindowsLoader/WindowsLoader';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
<<<<<<< HEAD
import { JeuPingouins } from "../components/Enigmes/JeuPingouins/JeuPingouins";
import { JeuDechets } from "../components/Enigmes/JeuDechets/JeuDechets";
=======
import { JeuPingouins } from "../components/Enigmes/JeuPingouins/JeuPingouins"
import { SettingsModal } from '../components/Modal/SettingsModal/SettingsModal';
>>>>>>> William

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={ <Homepage/> }/>
          <Route exact path="/loaderpage" element={ <LoaderPage/> }/>
          <Route exact path="/session" element={ <SessionChoicePage/> }/>
          <Route exact path="/windowsloader" element={<WindowsLoader/> }/>
          <Route exact path="/dashboard" element={ <DashboardPage/> }/>
          <Route exact path="/jeu-pingouins" element={ <JeuPingouins/> }/>
          <Route exact path="/jeu-dechets" element={ <JeuDechets/> }/>

          <Route path='*' exact={true} element={ <ErrorPage/>} />
=======
          <Route path="/" element={ <Homepage/> }/>
          <Route path="/loaderpage" element={ <LoaderPage/> }/>
          <Route path="/session" element={ <SessionChoicePage/> }/>
          <Route path="/windowsloader" element={<WindowsLoader/> }/>
          <Route path="/dashboard" element={ <DashboardPage/> }/>
          <Route path="/error" element={ <ErrorPage/> }/>
          <Route path="/jeu-pingouins" element={ <JeuPingouins/> }/>
          <Route path="/settings-modal" element={ <SettingsModal/> }/>
>>>>>>> William
        </Routes>
      </Router>
    </div>
  );
}

export default App;