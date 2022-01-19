import "./JeuDechetsNew.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Si le quizz n'a pas été fait, rien n'est débloqué ***
// Si le quizz a été fait : ***
// Le contenu du terminal change : "Quels type de déchets sont sur la plage ? Encore 5 restants..." ****
// On peut entrer des mots dans l'input :
// Si le bon mot clé est entré (ex : cigarette), l'image de la cigarette apparait sur la place à la place du point d'interrogation ET apparait dans l'espace déchet à l'écrit en bas à droite
// Il est alors possible de rammasser le déchet en cliquant dessus
// Quand le déchet a été rammassé, le mot en bas à droite se barre et le nombre d'objet restant décrémente dans le terminal
// Quand ils ont tous été ramassés, le mini jeu est gagné : écran de win avec petite transition

export const JeuDechetsNew = () => {
  const unlock = useSelector((state) => state.ecologieReducer);
  // const [dechetsList, setDechetsList] = useState([ "clope","canette"])
  const [dechetsList, setDechetsList] = useState([
    {
      name: "clope",
      trouve: false,
      img: "/assets/images/jeu-dechets/megot-cigarette.png",
      className: "dechet2",
      collect: false,
    },
    {
      name: "canette",
      trouve: false,
      img: "/assets/images/jeu-dechets/canette.png",
      className: "dechet4",
      collect: false,
    },
  ]);
  const [unlockDechetsList, setUnlockDechetsList] = useState([]);
  const [userValue, setUservalue] = useState("");
  const [displayLoader, setDisplayLoader] = useState(true);

  const terminalText = "C:hacker>";

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setUservalue(value);

    dechetsList.map((dechet, index) => {
      const isInclude = dechet.name === userValue ? true : false;
      console.log(isInclude);
      if (isInclude) {
        dechetsList[index].trouve = true;
      }
    });

    setDechetsList(dechetsList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dechetsList.map((dechet, index) => {
      const isInclude = dechet.name === userValue ? true : false;
      console.log(isInclude);
      if (isInclude) {
        dechetsList[index].trouve = true;
      }
    });
    setDechetsList(dechetsList);
  };

  const handleClick = (index) => {
    dechetsList[index].collect = true;
    setDechetsList(dechetsList);
    console.log("click dechet");
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="JeuDechetsNew">
      {displayLoader ? (
        <video autoPlay className="loader-canad-air">
          <source
            src="assets/video/loader/loader-dechet.mp4"
            type="video/mp4"
          />
        </video>
      ) : null}

      <div className="terminal">
        <table className="table" border="1">
          <tr>
            <th className="top">Terminal satellite n°Ec567ztBQx154y894</th>
          </tr>
          <tr>
            <td className="middle">
              <span className="middle-text1">{terminalText}</span>
              <br />
              {unlock ? (
                <p>
                  "Quels type de déchets sont sur la plage ? Encore 5
                  restants..."
                </p>
              ) : (
                <p>
                  Débloquez la compétence “Tri des déchets“ avant de pouvoir
                  commencer ce mini-jeu...
                </p>
              )}
            </td>
          </tr>
          <tr>
            {unlock && (
              <td className="bottom">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Tapez votre réponse..."
                    onChange={handleChange}
                  />
                </form>
              </td>
            )}
          </tr>
        </table>
      </div>

      <div className="inventaire">
        <div className="section-img-sac-inventaire">
          <img
            src="/assets/images/jeu-dechets/sac-inventaire.png"
            className="img-sac-inventaire"
          />
        </div>
        <div className="section-dechet-inventaire">
          {dechetsList.map((dechet) => (
            <p
              className="dechet-inventaire"
              style={{ color: dechet.collect ? "green" : "red" }}
            >
              {dechet.trouve ? dechet.name : "?"}
            </p>
          ))}
        </div>
      </div>

      <div className="dechets">
        {/* <img src="/assets/images/jeu-dechets/bouteille-plastique.png" className="dechet dechet1"/>
        <img src="/assets/images/jeu-dechets/megot-cigarette.png" className="dechet dechet2"/>
        <img src="/assets/images/jeu-dechets/sac-plastique.png" className="dechet dechet3"/>
        <img src="/assets/images/jeu-dechets/canette.png" className="dechet dechet4"/> */}

        {dechetsList.map((dechet, index) => (
          <>
            {dechet.trouve ? (
              <img
                src={dechet.img}
                className={"dechet " + dechet.className}
                onClick={() => handleClick(index)}
              />
            ) : (
              <img
                src="/assets/images/jeu-dechets/dechet-a-decouvrir.png"
                className={"dechet " + dechet.className}
              />
            )}
          </>
        ))}
        <img
          src="/assets/images/jeu-dechets/dechet-a-decouvrir.png"
          className="dechet dechet1"
        />
        {/* <img src="/assets/images/jeu-dechets/dechet-a-decouvrir.png" className="dechet dechet2"/> */}
        <img
          src="/assets/images/jeu-dechets/dechet-a-decouvrir.png"
          className="dechet dechet3"
        />
        {/* <img src="/assets/images/jeu-dechets/dechet-a-decouvrir.png" className="dechet dechet4"/> */}
        <img
          src="/assets/images/jeu-dechets/dechet-a-decouvrir.png"
          className="dechet dechet5"
        />
      </div>
    </div>
  );
};

// const [trash1, setTrash1] = useState(true)
// const [trash2, setTrash2] = useState(true)
// const [trash3, setTrash3] = useState(true)
// const [trash4, setTrash4] = useState(true)
// const [trash5, setTrash5] = useState(true)

// {
//   trash1 === true ? <img src="/assets/images/jeu-dechets/bouteille-plastique.png" className="dechet dechet1" onClick={() => { setTrash1(false) }}></img> : null
// }
// {
//   trash2 === true ? <img src="/assets/images/jeu-dechets/megot-cigarette.png" className="dechet dechet2" onClick={() => { setTrash2(false) }}></img> : null
// }
// {
//   trash3 === true ? <img src="/assets/images/jeu-dechets/sac-plastique.png" className="dechet dechet3" onClick={() => { setTrash3(false) }}></img> : null
// }
// {
//   trash4 === true ? <img src="/assets/images/jeu-dechets/canette.png" className="dechet dechet4" onClick={() => { setTrash4(false) }}></img> : null
// }
// {
//   trash5 === true ? <img src="/assets/images/jeu-dechets/dechet-a-decouvrir.png" className="dechet dechet5" onClick={() => { setTrash5(false) }}></img> : null
// }
