import { useState } from "react";
import initialsTuyaux from "./tuyaux.json"
import "./partage.scss";
import Tuyau from "./Tuyau";

const Partage = (e) => {
    const [tuyaux, setTuyaux] = useState(initialsTuyaux)
    const [selected, setSelected] = useState([])
    const [isValid,setIsValid] = useState(false)
    const [showResult, setShowResult] =useState(false)

    const handleClick = () => {
        // console.log(selected)
        let results = []
        selected.map(el => results.push(el.good))
        results.includes(false) ? setIsValid(false) : setIsValid(true)

        setShowResult(true)

        setTimeout(() => {
            setShowResult(false)
        }, 4000);
    }

    return ( 
        <div className='draggable-container'>
            {tuyaux.map((tuyau, index) => (
                <Tuyau tuyau={tuyau} key={index} setSelected={setSelected} selected={selected} />
            ))}

            <button onClick={handleClick}>Valier</button>
            {showResult && (
                <p id="result">
                    {isValid ? "Good job" : "Perdu"}
                </p>
            )}
        </div>
     );
}
 
export default Partage;