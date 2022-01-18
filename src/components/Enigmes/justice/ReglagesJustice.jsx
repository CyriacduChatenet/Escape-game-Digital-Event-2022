import React from 'react';
import './ReglagesJustice.scss'

const ReglagesJustice = () => {
    return ( 
        <div className='reglageJustice'>
           <select name="" className="inputOnglet">
               <option value="bloque-pour-tout-les-utilisateurs">Bloqué pour tout les utilisateurs</option>
               <option value="acces-only-administrateurs">Accès only administrateurs</option>
           </select>
        </div>
     );
}
 
export default ReglagesJustice;