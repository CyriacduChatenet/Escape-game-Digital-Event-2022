import './Terminal.scss'

export const Terminal = () => {
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quo!'
    return(
        <div className = 'container'>
            <div className = 'terminal-div'>
                <div className="terminal-header">
                    <img src="/assets/images/terminal-bar/bar-top-left.png" alt="" className="terminal-head" />
                    <img src="/assets/images/terminal-bar/Bar-top-right.png" alt="" className="terminal-btn" />
                </div>
                <div className = 'text-div'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}