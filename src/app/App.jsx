import { BrowserRouter, Switch,Routes,Route } from "react-router-dom"
import {Homepage} from '../pages/Homepage/Homepage'
import { LoaderPage } from '../pages/LoaderPage/LoaderPage';
import { SessionChoicePage } from "../pages/SessionChoicePage/SessionChoicePage";
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { WindowsLoader } from '../pages/WindowsLoader/WindowsLoader';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { JeuPingouins } from "../components/Enigmes/JeuPingouins/JeuPingouins";
import { JeuDechets } from "../components/Enigmes/JeuDechets/JeuDechets";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import firebaseConfig from "../firebaseConfig";
import { SettingsModal } from '../components/Modal/SettingsModal/SettingsModal';
import { JeuFeuForet } from "../components/Enigmes/JeuFeuForet/JeuFeuForet";

const ENDPOINT = "http://127.0.0.1:4001";

// const firebaseConfig = {
//   apiKey: "AIzaSyBni909mGq1PPCwnXZIViumjO6JdP4fUBQ",
//   authDomain: "chatroulettenode.firebaseapp.com",
//   databaseURL: "https://chatroulettenode.firebaseio.com",
//   projectId: "chatroulettenode",
//   storageBucket: "chatroulettenode.appspot.com",
//   messagingSenderId: "447258039553",
//   appId: "1:447258039553:web:37615cc46a9d09c8ed3700",
// };

function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [response, setResponse] = useState("");

  useEffect(()=> {
    // getDataFireStore()

    // const socket = socketIOClient(ENDPOINT);
    // socket.on("connection", data => {
    //   setResponse(data);
    // });
  },[])

  const getDataFireStore = async () => {
    const roomsCol = collection(db, 'rooms');
    const roomSnapshot = await getDocs(roomsCol);
    const cityList = roomSnapshot.docs.map(doc => doc.data());
    console.log(cityList)
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Homepage/> }/>
            <Route path="/session" element={ <SessionChoicePage/> }/>
            <Route path="/settings-modal" element={ <SettingsModal/> }/>
            <Route exact path="/loaderpage" element={ <LoaderPage/> }/>
            <Route exact path="/windowsloader" element={<WindowsLoader/> }/>
            <Route exact path="/dashboard" element={ <DashboardPage/> }/>
            <Route exact path="/jeu-pingouins" element={ <JeuPingouins/> }/>
            <Route exact path="/jeu-dechets" element={ <JeuDechets/> }/>
            <Route exact path="/jeu-foret" element={ <JeuFeuForet/> }/>

            <Route path='*' exact={true} element={ <ErrorPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;