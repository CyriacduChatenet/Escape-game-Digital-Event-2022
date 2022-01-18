import { Box } from '@mui/system';
import React, { useState } from 'react';

const Tuyau = ({tuyau, index, setSelected, selected}) => {
    const [show, setShow] = useState(false)

    const handleClick = (tuyau,index) => {
        setShow(!show)
        setSelected([...selected,tuyau])
    }

    let styleTuyau = {opacity: show ? "1" : ".2"}

    return ( 
        <Box className="tuyau" sx={{...styleTuyau, ...tuyau.style}} onClick={() => handleClick(tuyau,index)}></Box>
     );
}
 
export default Tuyau;