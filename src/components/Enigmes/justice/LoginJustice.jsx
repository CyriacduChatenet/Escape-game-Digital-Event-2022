import React from 'react';
import './LoginJustice.scss'

const LoginJustice = ({setIsLogin, setCurrentPage}) => {

    const handleClick = () => {
        setCurrentPage("dashboard")
        setIsLogin(true)
    }

    return ( 
        <div className="login_Page">
            <div className="ministere_img"></div>
            <div className="ministere_title_displaying">
                <img src="assets/images/justice/ministere_title.png" alt="" className='ministere_title'/ >
            </div>

            <div className="input_container">

                <input type="text" className="login_input_username" />
                <label className='label_input_username'>Nom d'utilisateur administrateur</label>
                <input type="password" className="login_input_password" />
                <label className='label_input_password'>Mot de passe administrateur</label>
                <button className='login_btn' onClick={handleClick}>Connexion</button>

            </div>
        </div>
     );
}
 
export default LoginJustice;