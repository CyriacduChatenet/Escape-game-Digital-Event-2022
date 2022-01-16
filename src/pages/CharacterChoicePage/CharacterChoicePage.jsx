import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Character } from '../../components/Character/Character';
import './CharacterChoicePage.scss';


export const CharacterChoicePage = () => {
    const [credentials, setCredentials] = useState({
        username: "",
    });

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setCredentials({ ...credentials, [name]: value });
    };

    const [pecheur, setPecheur] = useState(false);
    const [pollueuse, setPollueuse] = useState(false);
    const [campagnard, setCampagnard] = useState(false);
    const [depensiere, setDepensiere] = useState(false);

    const hideAll = () => {
        setPecheur(false);
        setPollueuse(false);
        setCampagnard(false);
        setDepensiere(false);
    }

    const togglePecheur = (e) => {
        hideAll();
        setPecheur(!pecheur);
    }

    const togglePollueuse = (e) => {
        hideAll();
        setPollueuse(!pollueuse);
    }

    const toggleCampagnard = (e) => {
        hideAll();
        setCampagnard(!campagnard);
    }

    const toggleDepensiere = (e) => {
        hideAll();
        setDepensiere(!depensiere);
    }

    return (
        <div className="character-page">
            <h1>QUI ES-TU</h1>

            <div className="personnages">

                <Character img="/assets/images/personnages/le-pecheur.png"
                 alt="character-img"
                 title="Le pêcheur"
                 history="“Le pêcheur”, homme âgé de 68 ans, retraité, a pour passion d’aller pêcher tous les après-midis. Il ne pense pas du tout aux conséquences que sa passion pour la pêche pourrait entraîner sur le long terme. En effet, une pêche régulière comme celle qu’exerce Marin peut 
                 engendrer une extinction de certaines espèces marines."
                 c_click={(e) => togglePecheur(e)}
                 open={pecheur}
                 />

                <Character img="/assets/images/personnages/la-pollueuse.png"
                 alt="character-img"
                 title="La pollueuse"
                 history="“La pollueuse”, femme âgée de 27 ans, qui se déplace tous les jours avec sa voiture alors qu’elle pourrait utiliser son vélo étant donné que son travail est à 5 minutes de son domicile. Elle se fiche complètement 
                 des actualités quotidiennes en rapport avec l’écologie."
                 c_click={(e) => togglePollueuse(e)}
                 open={pollueuse}
                 />

                <Character img="/assets/images/personnages/le-campagnard.png"
                 alt="character-img"
                 title="Le campagnard"
                 history="“Le campagnard”, agriculteur de 42 ans qui utilise des pesticides pour une culture des sols artificielle et contrôlée entraînant un dérèglement de la biodiversité qui n’est plus naturelle suite à la production qui s’intensifie devenant ainsi une production de masse."
                 c_click={(e) => toggleCampagnard(e)}
                 open={campagnard}
                 />

                <Character img="/assets/images/personnages/la-depensiere.png"
                 alt="character-img"
                 title="La dépensière"
                 history="“La dépensière”, femme âgée de 20 ans, qui surconsomme quasiment tous les jours en allant faire du shopping dans les magasins alors que de nombreux sites tel que Vinted sont disponibles pour empêcher ce problème et essayer de sauver la planète."
                 c_click={(e) => toggleDepensiere(e)}
                 open={depensiere}
                 />

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
