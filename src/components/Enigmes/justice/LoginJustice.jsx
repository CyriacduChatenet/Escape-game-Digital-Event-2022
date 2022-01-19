import React from 'react';
import { useState } from 'react/cjs/react.development';
import './LoginJustice.scss'

export const LoginJustice = ({ setIsLogin, setCurrentPage }) => {

  const terminalText1 = "C:\hacker>"
  const terminalText2 = "struct group_info init_groups = { .user = ADMIN };"
  const terminalText3 = "struct group_info *groups_alloc(int gidsetsize){"
  const terminalText4 = "  struct group_info *group_info;"
  const terminalText5 = "  nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;"
  const terminalText6 = "}"
  const terminalText7 = "pass_info = kmalloc(sizeof(mo2P@ss) + nblocks*sizeof(gid_t *), GFP_USER);"
  
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleClick = () => {
    if (credentials.username === "ADMIN" && credentials.password === "mo2P@ss") {
      setCurrentPage("dashboard")
      setIsLogin(true)
    }
  }

  return (
    <div className="login_Page">
      <div className="ministere_img"></div>
      <div className="ministere_title_displaying">
        <img src="assets/images/justice/ministere_title.png" alt="" className='ministere_title' />
      </div>

      <div className="input_container">
        <input type="text" className="login_input_username" name="username" onChange={handleChange} />
        <label className='label_input_username'>Nom d'utilisateur administrateur</label>
        <input type="password" className="login_input_password" name='password' onChange={handleChange} />
        <label className='label_input_password'>Mot de passe administrateur</label>
        <button className='login_btn' onClick={handleClick}>Connexion</button>
      </div>

      <div className="terminal">
        <table className="table" border="1">
          <tr><th className="top">Terminal satellite n°Ec567ztBQx154y894</th></tr>
          <tr><td className="middle">
            <span className="middle-text margin-bottom">{terminalText1}</span><br/>
            <span className="middle-text margin-bottom">{terminalText2}</span><br/>
            <span className="middle-text">{terminalText3}</span><br/>
            <span className="middle-text">{terminalText4}</span><br/>
            <span className="middle-text">{terminalText5}</span><br/>
            <span className="middle-text margin-bottom">{terminalText6}</span><br/>
            <span className="middle-text margin-bottom">{terminalText7}</span><br/>           
          </td></tr>
        </table>
      </div>

    </div>
  );
}

export default LoginJustice;