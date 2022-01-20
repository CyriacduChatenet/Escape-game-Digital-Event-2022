import DropdownWindow from '../DropdownWindow/DropdownWindow';
import { Mission } from '../Mission/Mission';
import './Missions.scss';
import { useSelector } from 'react-redux'
import { useEffect } from 'react/cjs/react.development';
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from 'firebase/app';
import {getFirestore, collection, onSnapshot, doc} from 'firebase/firestore';
import {store} from "../../redux/store"

export const Missions = () => {
    const missions = useSelector(state=> state.missionsReducer)
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const chatColleftionRef = collection(db, 'missions');
  
    useEffect(()=>{
        getMissions()
    },[])

    const getMissions = async () => {
      onSnapshot(chatColleftionRef, (querySnapshot) => {
          const missionsFirebase = [];
          querySnapshot.forEach((doc) => {
            missionsFirebase.push(doc.data());
          });

          console.log(missionsFirebase)
          missionsFirebase.map((mission,index) => {
            missions[index].completed = mission.completed
          })

        store.dispatch({
            type: "missions/update",
            payload: missions,
        });
          
      })
    }

    return (
        <DropdownWindow position={{top:0,right:0}}>
            <div className="missions">
                <h3 className="subtitle">Missions</h3>
                <div className="mission-container">
                    {missions.map(mission => (
                        <Mission mission={mission} />
                    ))}
                </div>
            </div>
        </DropdownWindow>
    )
}