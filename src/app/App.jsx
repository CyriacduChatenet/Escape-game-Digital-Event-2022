<<<<<<< HEAD
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
=======
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
<<<<<<< HEAD
import {Homepage} from '../pages/Homepage/Homepage'
=======
>>>>>>> b2f0804c086b94df588de1370dad7e219923b3a5
>>>>>>> 8103e329ae292f60f5104d2130af427295bf8a96
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { SessionChoicePage } from "../pages/SessionChoicePage/SessionChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { ModalPage } from '../pages/ModalPage/ModalPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import {WindowsLoader} from '../pages/WindowsLoader/WindowsLoader'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={ <Homepage/> }/>
          <Route path="/loaderpage" element={ <LoaderPage/> }/>
=======
          <Route path="/" element={ <LoaderPage/> }/>
          <Route path="/modal" element={ <ModalPage/> }/>
>>>>>>> 8103e329ae292f60f5104d2130af427295bf8a96
          <Route path="/session" element={ <SessionChoicePage/> }/>
          <Route path="/windowsloader" element={<WindowsLoader/> }/>
          <Route path="/dashboard" element={ <DashboardPage/> }/>
          <Route path="/error" element={ <ErrorPage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
