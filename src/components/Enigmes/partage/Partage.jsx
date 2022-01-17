import { useState } from "react";
import initialsTuyaux from "./tuyaux.json"
import "./partage.scss";
import Tuyau from "./Tuyau";

const Partage = (e) => {
    const [tuyaux, setTuyaux] = useState(initialsTuyaux)
    const [selected, setSelected] = useState([])
    const [isValid,setIsValid] = useState(false)

    const handleClick = () => {
        // console.log(selected)
        let results = []
        selected.map(el => results.push(el.good))
        results.includes(false) ? setIsValid(false) : setIsValid(true)
    }

    return ( 
        <div className='draggable-container'>
            {tuyaux.map((tuyau, index) => (
                <Tuyau tuyau={tuyau} key={index} setSelected={setSelected} selected={selected} />
            ))}

            <button onClick={handleClick}>Valier</button>
            <p id="result">
                {isValid ? "Good job" : "Perdu"}
            </p>
        </div>
     );
}
 
export default Partage;