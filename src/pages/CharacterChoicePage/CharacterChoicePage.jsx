import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Character } from "../../components/Character/Character";
import "./CharacterChoicePage.scss";
import { store } from "../../redux/store";
import characteres from "./characters.json";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";

const initialsToggleState = {
  pecheur: false,
  pollueuse: false,
  campagnard: false,
  depensiere: false,
};

export const CharacterChoicePage = () => {
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const characteresColleftionRef = collection(db, 'characters');
  const [toggleState, setToggleState] = useState(initialsToggleState)
  const [characteresList, setCharactersList] = useState({})

  useEffect(() => {
    // Reset all characters selected in firestore
    window.addEventListener('keydown', (e) => {
      if (e.key === 'a' && e.ctrlKey) {
        updateDoc(doc(db, "characters", "selected"), initialsToggleState);
      }
    })
    getCharacters()
    // Don't delete : Init default values in firestore
    // setDoc(doc(db, "characters","selected"), initialsToggleState);
  }, [])

  useEffect(() => {
    // Reset all characters selected in firestore
    window.addEventListener("keydown", (e) => {
      if (e.key === "r" && e.ctrlKey) {
        updateDoc(doc(db, "characters", "selected"), initialsToggleState);
      }
    });
    getCharacters();
    // Don't delete : Init default values in firestore
    // setDoc(doc(db, "characters","selected"), initialsToggleState);
  }, []);

  const getCharacters = async () => {
    onSnapshot(characteresColleftionRef, (querySnapshot) => {
      let characters = {};
      querySnapshot.forEach((doc) => {
        characters = doc.data();
      });
      setCharactersList(characters);
    });
  };

  const handleToggle = (e, charactere) => {
    const isSelected = characteresList[charactere.type];

    if (!isSelected) {
      setToggleState({
        ...initialsToggleState,
        [charactere.type]: !toggleState[charactere.type],
      });
    }
  };

  const handleSelect = (charactere) => {
    const isSelected = characteresList[charactere.type];
    // Si le joueur as déja été sélectionné par une autre personnes
    if (!isSelected) {
      store.dispatch({
        type: "user/update",
        payload: {
          user: { ...charactere },
        },
      });

      updateDoc(doc(db, "characters", "selected"), {
        [charactere.type]: true,
      });
      navigate("/dashboard");
    }
  };

  return (
    <div className="character-page">
      <video autoPlay className="loader_video" loop muted>
        <source src="/assets/video/background-loop.mp4" type="video/mp4" />
      </video>
      <h1>QUI ES-TU ?</h1>

      <div className="personnages">
        {characteres.map((charactere) => (
          <Character
            img={charactere.img}
            alt={charactere.alt}
            title={charactere.title}
            history={charactere.history}
            c_click={(e) => handleToggle(e, charactere)}
            open={toggleState[charactere.type]}
            select={() => handleSelect(charactere)}
          />
        ))}
      </div>
    </div>
  );
};
