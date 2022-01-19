import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useEffect } from 'react/cjs/react.development';
import {store} from "../../redux/store"
import './Canadair.scss'

export const Canadair = () => {
    const [credentials, setCredentials] = useState("");
    const unlock = useSelector(state=> state.climatReducer)
    const missions = useSelector(state=> state.missionsReducer)
    const [isValide, setIsValide] = useState(false)
    const [isCompled, setIsCompled] = useState(false)

    useEffect(() => {
        console.log(missions)
        if(missions[2].completed){
            setIsCompled(true)
        }
    }, [])

    useEffect(() => {
        setCredentials("escape")
    },[isCompled])

    const handleChange = ({ currentTarget }) => {
        const {value} = currentTarget;
            if(value == 'escape'){
                setIsValide(true)
                
                missions[2].completed = true
                store.dispatch({
                    type: "missions/update",
                    payload: missions,
                  });
            }else{
                setIsValide(false)
            }
    };

    const verification = () => {
        if(isValide === true){
            console.log('Mdp Trouvé')
        }else{
            console.log('Wrong Mdp')
        }
    }
    
    return(
        <div className ='containerCanadair'>
                <input 
                name='codeCanadair'
                type="text" 
                placeholder='Cliquez pour écrire...' 
                className="codeCanadair" 
                onChange={handleChange}
                readOnly={!unlock ? true : false}
                defaultValue={credentials}
                />
                <div className='buttonCanadair' onClick={verification}></div>
        </div>
    )
}