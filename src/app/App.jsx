import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Homepage} from '../pages/Homepage/Homepage'
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { SessionChoicePage } from "../pages/SessionChoicePage/SessionChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { WindowsLoader } from '../pages/WindowsLoader/WindowsLoader';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { JeuPingouins } from "../components/Enigmes/JeuPingouins/JeuPingouins";
import { JeuFeuForet } from "../components/Enigmes/JeuFeuForet/JeuFeuForet";
import { JeuDechets } from "../components/Enigmes/JeuDechets/JeuDechets";
import { JeuJustice } from '../components/Enigmes/JeuJustice/JeuJustice';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Homepage/> }/>
          <Route exact path="/loaderpage" element={ <LoaderPage/> }/>
          <Route exact path="/session" element={ <SessionChoicePage/> }/>
          <Route exact path="/windowsloader" element={<WindowsLoader/> }/>
          <Route exact path="/dashboard" element={ <DashboardPage/> }/>
          <Route exact path="/jeu-pingouins" element={ <JeuPingouins/> }/>
          <Route exact path="/jeu-dechets" element={ <JeuDechets/> }/>
          <Route exact path="/jeu-foret" element={ <JeuFeuForet/> }/>
          <Route exact path="/jeu-justice" element={ <JeuJustice/> }/>

          <Route path='*' exact={true} element={ <ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;