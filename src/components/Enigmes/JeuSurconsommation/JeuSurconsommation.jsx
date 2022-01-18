import { useState } from "react/cjs/react.development";
import "./JeuSurconsommation.scss";

export const JeuSurconsommation = () => {

    const [item1, setItem1] = useState(true)
    const [item2, setItem2] = useState(true)
    const [item3, setItem3] = useState(true)
    const [item4, setItem4] = useState(true)
    const [item5, setItem5] = useState(true)
    const [item6, setItem6] = useState(true)

  return (
    <div className="jeuSurconsommationModal">


      <div className="topImgDisplaying">

        {item1 === false ? null : <div className="ImgDisplay1">
          <img
            src="/assets/images/personnages/le-pecheur.png"
            alt=""
            className="img"
          />
          <button className="delete-btn" onClick={() => {setItem1(false)}}>
            Delete
          </button>
        </div>}

        {item2 === false ? null : <div className="ImgDisplay2">
          <img
            src="assets/images/personnages/la-pollueuse.png"
            alt=""
            className="img"
          />
          <button className="delete-btn" onClick={() => {setItem2(false)}}>Delete</button>
        </div>}

        {item3 === false ? null : <div className="ImgDisplay3">
          <img
            src="/assets/images/personnages/le-campagnard.png"
            alt=""
            className="img"
          />
          <button className="delete-btn" onClick={() => {setItem3(false)}}>Delete</button>
        </div>}
      </div>

      <div className="bottomImgDisplaying">

        {item4 === false ? null : <div className="ImgDisplay4">
          <img
            src="/assets/images/personnages/le-pecheur.png"
            alt=""
            className="img"
          />
          <button className="delete-btn" onClick={() => {setItem4(false)}}>Delete</button>
        </div>}

        {item5 === false ? null : <div className="ImgDisplay5">
          <img
            src="/assets/images/personnages/la-pollueuse.png"
            alt=""
            className="img"
          />
          <button className="delete-btn" onClick={() => {setItem5(false)}}>Delete</button>
        </div>}

        {item6 === false ? null : <div className="ImgDisplay6">
          <img
            src="/assets/images/personnages/le-campagnard.png"
            alt=""
            className="img"
          />
          <button className="delete-btn" onClick={() => {setItem6(false)}}>Delete</button>
        </div>}
        
      </div>
    </div>
  );
};
