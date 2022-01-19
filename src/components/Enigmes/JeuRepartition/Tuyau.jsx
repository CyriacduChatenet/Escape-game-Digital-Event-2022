import { useEffect, useState } from "react";

const Tuyau = ({tuyau, resetOpacities}) => {
    const [opacity, setOpacity] = useState(0.4)
    const [selected, setSelected] = useState(false)
    const [drop, setDrop] = useState(false)

    const handleClick = () => {
        resetOpacities()
        setSelected(!selected)
        setOpacity(1)
    }

    return ( 
        <img src={tuyau.img} className='tuyauType' style={{...tuyau.position, opacity}} alt="" onClick={handleClick} />
     );
}
 
export default Tuyau;