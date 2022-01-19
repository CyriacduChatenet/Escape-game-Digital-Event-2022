import DropdownWindow from '../DropdownWindow/DropdownWindow'
import './Terminal.scss'
import { useState } from "react";
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import ScrollToBottom from 'react-scroll-to-bottom';

export const Terminal = () => {
    const terminalTitle = "Last chance [ version 1.0.0.2000 ]"
    const terminalText = "C:\hacker>"

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe laborum consequatur adipisci? In dicta architecto, id minima vero ea fugit, eum, placeat sequi blanditiis laboriosam provident odit minus magni.'
    
    return(
        <DropdownWindow position={{top:0,left:0}}>
            <h4 className="terminal-title">{terminalTitle}</h4>
            <ScrollToBottom>
            <p className='terminal-text' >{ terminalText} 
                <AutoTyping // <boolean>
                    active={true}
                    textRef={text} // <string>
                    writeSpeed={-2500} // <number>
                    deleteSpeed={10000} // <number>
                    delayToWrite={1000} // <number>
                    delayToDelete={0} // <number>
                ></AutoTyping>
                <BlinkCursor
                active // <boolean>
                blinkSpeed={500} // <number>
                />
            </p>
            </ScrollToBottom>
        </DropdownWindow>
    )
}