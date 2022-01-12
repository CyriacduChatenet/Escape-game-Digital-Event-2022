import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { SessionChoicePage } from "../pages/SessionChoicePage/SessionChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <LoaderPage/> }/>
          <Route path="/session" element={ <SessionChoicePage/> }/>
          <Route path="/dashboard" element={ <DashboardPage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
