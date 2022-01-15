import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CharacterChoicePage.scss';


export const CharacterChoicePage = () => {
    const [credentials, setCredentials] = useState({
        username: "",
    });

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setCredentials({ ...credentials, [name]: value });
    };

    return (
        <div className="character-page">
            <h1>QUI ES-TU</h1>
            <div className="personnages">

                <div className="personnage">
                    <div className="personnage-detail">
                        <img src="/assets/images/personnages/le-pecheur.png" alt="character-img" className="character-img" />
                        <div className="personnage-onclic">
                            <p>“Le pêcheur”, homme âgé de 68 ans, retraité, a pour passion d’aller pêcher tous les après-midis. Il ne pense pas du tout aux conséquences que sa passion pour la pêche pourrait entraîner sur le long terme. En effet, une pêche régulière comme celle qu’exerce Marin peut engendrer une extinction de certaines espèces marines.</p>
                            <button>Choisir</button>
                        </div>
                    </div>
                    <p>Le pêcheur</p>
                </div>

                <div className="personnage">
                    <div className="personnage-detail">
                        <img src="/assets/images/personnages/la-pollueuse.png" alt="character-img" className="character-img" />
                    </div>
                    <p>La pollueuse</p>
                </div>

                <div className="personnage">
                    <div className="personnage-detail">
                        <img src="/assets/images/personnages/le-campagnard.png" alt="character-img" className="character-img" />
                    </div>
                    <p>Le campagnard</p>
                </div>

                <div className="personnage">
                    <div className="personnage-detail">
                        <img src="/assets/images/personnages/la-depensiere.png" alt="character-img" className="character-img" />
                    </div>
                    <p>La dépensière</p>
                </div>

            </div>
        </div>
    )
}

/* <form className="character-form">
<input 
    type="text" 
    name="username" 
    placeholder="Enter username" 
    onChange={handleChange}
    />
<NavLink to='/dashboard'><a>Se connecter</a></NavLink>
</form> */

/*<div className="personnage-details">
    <p>“La dépensière”, femme âgée de 20 ans, qui surconsomme quasiment tous les jours en allant faire du shopping dans les magasins alors que de nombreux sites tel que Vinted sont disponibles pour empêcher ce problème et essayer de sauver la planète. </p>
    <button>Choisir</button>
</div>*/

/* <div className="personnage-details">
<p>“Le campagnard”, agriculteur de 42 ans qui utilise des pesticides pour une culture des sols artificielle et contrôlée entraînant un dérèglement de la biodiversité qui n’est plus naturelle suite à la production qui s’intensifie devenant ainsi une production de masse.</p>
<button>Choisir</button>
</div> */

/* <div className="personnage-details">
<p>“La pollueuse”, femme âgée de 27 ans, qui se déplace tous les jours avec sa voiture alors qu’elle pourrait utiliser son vélo étant donné que son travail est à 5 minutes de son domicile. Elle se fiche complètement des actualités quotidiennes en rapport avec l’écologie.</p>
<button>Choisir</button>
</div> */

