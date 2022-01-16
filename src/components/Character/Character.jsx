import { display } from "@mui/system";
import { useState } from "react";

export const Character = ({img, alt, title, history, open = false, c_click, select = undefined}) => {

    return (
        <>
            {!open ?
                <div className="personnage" onClick={(e) => c_click(e)}>
                    <img src={img} alt={alt} className="character-img" />
                    <p>{title}</p>
                </div>
            :  
                <div className="personnage-onclic">
                    <div className="personnage-details">
                        <img src={img}  alt={alt}  className="character-img" />
                        <p>{history}</p>
                        <button onClick={(e) => select(title, e)}>Choisir</button>
                    </div>
                    <p>{title}</p>
                </div>
            }
        </>
    );
}