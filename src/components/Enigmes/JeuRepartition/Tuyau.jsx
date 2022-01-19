const Tuyau = ({tuyau,index, handleSelectTuyau}) => {
    return ( 
        <img src={tuyau.img} className='tuyauType' style={{...tuyau.position, opacity: tuyau.selected === true ? 1 : .3}} alt="" onClick={() => handleSelectTuyau(tuyau, index)} />
     );
}
 
export default Tuyau;