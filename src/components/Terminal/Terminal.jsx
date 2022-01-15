import DropdownWindow from '../DropdownWindow/DropdownWindow'
import './Terminal.scss'

export const Terminal = () => {
    const terminalTitle = "Last chance [ version 1.0.0.2000 ]"
    const terminalText = "C:\hacker>"
    
    return(
        <DropdownWindow position={{top:0,left:0}}>
            <h4 className="terminal-title">{terminalTitle}</h4>
            <p className='terminal-text' >{ terminalText} <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorem cupiditate sequi. <br /> Lorem, ipsum dolor.</p>
        </DropdownWindow>
    )
}