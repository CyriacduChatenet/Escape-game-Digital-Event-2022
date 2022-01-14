import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Homepage } from '../pages/Homepage/Homepage';
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { SessionChoicePage } from "../pages/SessionChoicePage/SessionChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { WindowsLoader } from '../pages/WindowsLoader/WindowsLoader';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

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
          <Route path='*' exact={true} element={ <ErrorPage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;