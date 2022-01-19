import React, { useState } from 'react';
import './ReglagesJustice.scss'

// TODO:
// onSelect "Accès pour tous les utilisateurs"
//    -> change l'image qui est dans l'onglet Pages par l'image où tout est débloqué
//    + change les messages des terminaux ? supprime les terminaux ?
// écran de victoire ?
// Coche dans le dashboard

const ReglagesJustice = () => {

  const terminalText1 = "C:\hacker>"

  const { unlock, setUnlock } = useState(false)

  const onSelect = () => {
    console.log('select')
  }

  return (
    <div className='reglageJustice'>
      <select name="" className="inputOnglet">
        <option value="bloque-pour-tout-les-utilisateurs">Bloqué pour tous les utilisateurs</option>
        <option value="acces-only-administrateurs">Accès pour les administrateurs</option>
        <option onSelect={onSelect}  value="acces-only-administrateurs">Accès pour tous les utilisateurs</option>
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