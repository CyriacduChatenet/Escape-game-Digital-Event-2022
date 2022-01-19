import React from 'react';
import './ReglagesJustice.scss'

const ReglagesJustice = () => {

  const terminalText1 = "C:\hacker>"

  return (
    <div className='reglageJustice'>
      <select name="" className="inputOnglet">
        <option value="bloque-pour-tout-les-utilisateurs">Bloqué pour tout les utilisateurs</option>
        <option value="acces-only-administrateurs">Accès only administrateurs</option>
      </select>
      <div className="terminal">
        <table className="table" border="1">
          <tr><th className="top">Terminal satellite n°Ec567ztBQx154y894</th></tr>
          <tr><td className="middle">
            <span className="middle-text margin-bottom">{terminalText1}</span><br />
            <span className="middle-text margin-bottom"> Le gouvernement a classé confidentiel l’ensemble des gros problèmes de la société,
retrouvez les et mettez les en ligne pour révéler au monde la vérité.</span>
<span className="middle-text">Après cela, je débloquerai tout le monde.</span>
          </td></tr>
        </table>
      </div>
    </div>
  );
}

export default ReglagesJustice;