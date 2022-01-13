import './Terminal.scss'

export const Terminal = () => {
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quo!'
    return(
        <div className = 'container'>
            <div className = 'terminal-div'>
                <div className = 'text-div'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}