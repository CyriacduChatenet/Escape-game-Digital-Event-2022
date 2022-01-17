import './ScrollDrawer.scss'
import { FaChevronRight } from 'react-icons/fa'

export const ScrollDrawer = (props) =>{

    return(
        <div className="scrollDrawerContainer">
            <div className="scrollDrawerText">{props.txt}</div>
            <div className="chevronIcon">
            <FaChevronRight   onClick={props.handleClick} />
            </div>
        </div>
    )
}