import React, { useState } from 'react';
import "./dropdown-window.scss"
import Box from '@mui/material/Box';

const DropdownWindow = ({children,position}) => {
    const [show, setShow] = useState(true)

    const style = {
        position: "fixed",
        width: 300,
        margin:1,
        ...position
    }

    const handleClick = () => {
        setShow(!show)
    }

    const classesWindowContent = show ? "window-content show" : "window-content"

    return ( 
        <Box sx={style}>
            <div className="window-header">
                <img src="/assets/images/terminal-bar/bar-top-left.png" alt="" className="terminal-head" />
                <img src="/assets/images/terminal-bar/Bar-top-right.png" alt="" className="terminal-btn" onClick={handleClick}/>
            </div>
            <div className={classesWindowContent}>
                {children}
            </div>
        </Box>
     );
}
 
export default DropdownWindow;