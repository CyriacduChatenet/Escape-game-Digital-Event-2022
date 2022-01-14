import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Homepage } from '../pages/Homepage/Homepage';
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { SessionChoicePage } from "../pages/SessionChoicePage/SessionChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { WindowsLoader } from '../pages/WindowsLoader/WindowsLoader';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { JeuPingouins } from "../pages/Enigmes/JeuPingouins/JeuPingouins"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Homepage/> }/>
          <Route path="/loaderpage" element={ <LoaderPage/> }/>
          <Route path="/session" element={ <SessionChoicePage/> }/>
          <Route path="/windowsloader" element={<WindowsLoader/> }/>
          <Route path="/dashboard" element={ <DashboardPage/> }/>
          <Route path="/error" element={ <ErrorPage/> }/>
          <Route path="/jeu-pingouins" element={ <JeuPingouins/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;