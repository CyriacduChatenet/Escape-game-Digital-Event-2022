import React from 'react';
import { useState } from 'react';
import './DashboardJustice.scss'

const DashboardJustice = ({ updatePage }) => {

  const terminalText1 = "C:\hacker>"

  return (
    <div className='tableauDeBordDiv'>
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

export default DashboardJustice;