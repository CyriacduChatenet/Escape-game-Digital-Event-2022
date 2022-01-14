import './Terminal.scss'

export const Terminal = () => {
    const terminalTitle = "Last chance [ version 1.0.0.2000 ]"
    const terminalText = "C:\hacker>"
    return(
        <div className = 'container'>
            <div className = 'terminal-div'>
                <div className="terminal-header">
                    <img src="/assets/images/terminal-bar/bar-top-left.png" alt="" className="terminal-head" />
                    <img src="/assets/images/terminal-bar/Bar-top-right.png" alt="" className="terminal-btn" />
                </div>
                <div className = 'text-div'>  
                    <h4 className="terminal-title">{terminalTitle}</h4>
                    <p className='terminal-text' >{ terminalText} <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorem cupiditate sequi. <br /> Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>
    )
}