import { useState } from 'react/cjs/react.development'
import './Surconsommation.scss'

export const Surconsommation = () => {
    const [isValide, setIsValide] = useState(false)
    return(
        <div className = 'containerSurconsommation'>
            <input type="search" className = 'inputSearch'/>
            <div className = 'productContainer'>
            {isValide == false ? 
                <div className='scrollDiv'>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                    <div className = 'product1'></div>
                </div>
                : null}

            </div>
        </div>
    )
}