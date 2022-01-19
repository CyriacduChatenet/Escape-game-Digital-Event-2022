import { useState } from 'react';
import './Canadair.scss'

export const Canadair = () => {
    const [credentials, setCredentials] = useState("");


    const [isValide, setIsValide] = useState(false)

    const handleChange = ({ currentTarget }) => {
        const {value} = currentTarget;
            if(value == 'test'){
                setIsValide(true)
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
                />
                <div className='buttonCanadair' onClick={verification}></div>
        </div>
    )
}