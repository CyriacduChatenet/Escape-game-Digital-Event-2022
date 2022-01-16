import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../components/Character/Character';
import './CharacterChoicePage.scss';
import {store} from "../../redux/store"
import characteres from "./characters.json"

const initialsToggleState = {
    pecheur: false,
    pollueuse: false,
    campagnard:false,
    depensiere:false
}

export const CharacterChoicePage = () => {
    let navigate = useNavigate();
    const [toggleState, setToggleState] = useState(initialsToggleState)

    const handleSelect = (charactere) => {
        store.dispatch({ type: 'user/update', payload: {
            user : {...charactere}
        }})
        navigate('/dashboard');
    }

    const handleToggle = (e,charactere) => {
        setToggleState({
            ...initialsToggleState,
            [charactere.type]: !toggleState[charactere.type]
        })
    }

    return (
        <div className="character-page">
            <h1>QUI ES-TU</h1>

            <div className="personnages">
                {characteres.map(charactere => (
                    <Character 
                        img={charactere.img}
                        alt={charactere.alt}
                        title={charactere.title}
                        history={charactere.history}
                        c_click={(e) => handleToggle(e,charactere)}
                        open={toggleState[charactere.type]}
                        select={() => handleSelect(charactere)}
                    />
                ))}
            </div>
        </div>
    )
}

/* <form className="character-form">
<input 
    type="text" 
    name="username" 
    placeholder="Enter username" 
    onChange={handleChange}
    />
<NavLink to='/dashboard'><a>Se connecter</a></NavLink>
</form> */
