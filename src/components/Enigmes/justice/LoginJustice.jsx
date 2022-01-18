import React from 'react';

const LoginJustice = ({setIsLogin, setCurrentPage}) => {

    const handleClick = () => {
        setCurrentPage("dashboard")
        setIsLogin(true)
    }

    return ( 
        <div>
            Login Page

            <button onClick={handleClick}>login</button>
        </div>
     );
}
 
export default LoginJustice;