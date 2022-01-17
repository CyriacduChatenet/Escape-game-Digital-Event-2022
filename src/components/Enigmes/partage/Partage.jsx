import Draggable from "react-draggable";
import React, { useState, useRef } from "react";
import "./partage.scss";

const Partage = (e) => {
    const nodeRef = useRef(null);
    const [Opacity, setOpacity] = useState(false);
    
    const handleStart = () => {
        setOpacity(true);
    };
    const handleEnd = () => { 
        setOpacity(false);
    };

    return ( 
        <div className='draggable-container'>
            <Draggable
                onStart={handleStart}
                // onDrag={handleDrag}
                onStop={handleEnd}
                >
                    <div 
                        className='tuyau' 
                        ref={nodeRef}
                        style={{ opacity: Opacity ? "0.6" : "1" }}
                        >
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
            </Draggable>

            <div className="place-tuyau"></div>

        </div>
     );
}
 
export default Partage;