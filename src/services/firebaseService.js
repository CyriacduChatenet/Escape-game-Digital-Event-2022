import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc,updateDoc } from 'firebase/firestore';
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const updateMission = (index) => {
    updateDoc(doc(db, "missions",index), {completed:true});
}
const resetMissions = () => {
    updateDoc(doc(db, "missions","0"), {completed:false});
    updateDoc(doc(db, "missions","1"), {completed:false});
    updateDoc(doc(db, "missions","2"), {completed:false});
    updateDoc(doc(db, "missions","3"), {completed:false});
    updateDoc(doc(db, "missions","4"), {completed:false});
    updateDoc(doc(db, "missions","5"), {completed:false});
}

export {
    updateMission,
    resetMissions
}