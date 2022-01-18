import { useState } from 'react';
import './Canadair.scss'

export const Canadair = () => {
    const [credentials, setCredentials] = useState({
        message: "",
    });

    const [password, setPassword] = useState("Test")

    const [TOF, setTOF] = useState(false)

    const handleChange = ({ currentTarget }) => {
        const {value} = currentTarget;
        setCredentials({ ...credentials,value });
            if(setCredentials(value) == password){
                setTOF(true)
            }else{
                setTOF(false)
            }
    };
    console.log(TOF);
    console.log(credentials);

    
    return(
        <div className ='containerCanadair'>
                <input 
                name='codeCanadair'
                type="text" 
                placeholder='Cliquez pour écrire...' 
                className="codeCanadair" 
                onChange={handleChange}
                />
                <div className='buttonCanadair'></div>
        </div>
    )
}