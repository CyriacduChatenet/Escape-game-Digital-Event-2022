import React from 'react';
import './PagesJustice.scss'

const PagesJustice = () => {

  const terminalText1 = "C:\hacker>"

  return (
    <div className='pageBloque'>
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
      {/* Button a afficher seulement si le select a bien été cliqué */}
      <div className='btn-publier'>
        <button>Publier les données</button>
      </div>
      
      {/* OnClick : le mini jeu est validé, retour au dashboard, coche du mini jeu, écran final WIN */}
    </div>
  );
}

export default PagesJustice;