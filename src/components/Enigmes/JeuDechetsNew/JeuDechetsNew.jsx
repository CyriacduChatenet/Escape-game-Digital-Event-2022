import "./JeuDechetsNew.scss";
import { useState } from "react";

export const JeuDechetsNew = () => {

    const [trash1, setTrash1] = useState(true)
    const [trash2, setTrash2] = useState(true)
    const [trash3, setTrash3] = useState(true)
    const [trash4, setTrash4] = useState(true)
    const [trash5, setTrash5] = useState(true)
    const [trash6, setTrash6] = useState(true)
    const [trash7, setTrash7] = useState(true)

    return (
        <div className="JeuDechetsNew">
            {
                trash1 === true ? <div className="dechet1" onClick={() => {setTrash1(false)}}></div> : null
            }
            {
                trash2 === true ? <div className="dechet2" onClick={() => {setTrash2(false)}}></div> : null
            }
            {
                trash3 === true ? <div className="dechet3" onClick={() => {setTrash3(false)}}></div> : null
            }
            {
                trash4 === true ? <div className="dechet4" onClick={() => {setTrash4(false)}}></div> : null
            }
            {
                trash5 === true ? <div className="dechet5" onClick={() => {setTrash5(false)}}></div> : null
            }
            {
                trash6 === true ? <div className="dechet6" onClick={() => {setTrash6(false)}}></div> : null
            }
            {
                trash7 === true ? <div className="dechet7" onClick={() => {setTrash7(false)}}></div> : null
            }
            
            {/* <div className="dechet2" onClick={handleClick}></div>
            <div className="dechet3" onClick={handleClick}></div>
            <div className="dechet4" onClick={handleClick}></div>
            <div className="dechet5" onClick={handleClick}></div>
            <div className="dechet6" onClick={handleClick}></div>
            <div className="dechet7" onClick={handleClick}></div> */}
        </div>
    );

};