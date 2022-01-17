import Draggable from "react-draggable";
import React, { useState, useRef } from "react";

const DraggableFolder = ({defaultPosition, children }) => {
    const nodeRef = useRef(null);
    const [Opacity, setOpacity] = useState(false);

    const handleStart = () => {
        setOpacity(true);
    };
    const handleEnd = () => { 
        setOpacity(false);
    };

    return ( 
        <Draggable
            onStart={handleStart}
            onStop={handleEnd}
        >
            <div
                ref={nodeRef}
                className="box"
                style={{...defaultPosition, opacity: Opacity ? "0.6" : "1" }}
            >
                {children}
            </div>
        </Draggable>
     );
}
 
export default DraggableFolder;