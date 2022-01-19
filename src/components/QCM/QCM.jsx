import { useState } from "react/cjs/react.development";
import { Question } from "../Question/Question";
import { store } from "../../redux/store"
import "./QCM.scss";

// TODO : Gérer l'envoie des réponses

export const QCM = () => {
  const [selectedRadioQ1, setSelectedRadioQ1] = useState('');
  const radiosQ1 = ["3 douches", "5 douches", "1 douche"]

  const [selectedRadioQ2, setSelectedRadioQ2] = useState('');
  const radiosQ2 = ["1 mois", "4 mois", "2 ans"]

  const [selectedRadioQ3, setSelectedRadioQ3] = useState('');
  const radiosQ3 = ["5 ans", "50 ans", "500 ans"]

  const [questionState, setQuestionState] = useState(null)

  const CalculResponse = () => {
    console.log('click')
    if (selectedRadioQ1 === "1 douche" && selectedRadioQ2 === "1 mois" && selectedRadioQ3 === "50 ans") {
      console.log('good')
      setQuestionState(true)
      store.dispatch({
        type: "unlock/ecologie",
        payload: true,
      });
    }
    if (selectedRadioQ1 === "Answer 1" && selectedRadioQ2 === "Answer 1" && selectedRadioQ3 === "Answer 1") {
      setQuestionState(false)
    }
    if (selectedRadioQ1 === "Answer 2" && selectedRadioQ2 === "Answer 2" && selectedRadioQ3 === "Answer 2") {
      setQuestionState(false)
    }
    if (selectedRadioQ1 === "Answer 3" && selectedRadioQ2 === "Answer 3" && selectedRadioQ3 === "Answer 3") {
      setQuestionState(false)
    }
    if (selectedRadioQ1 === "Answer 1" && selectedRadioQ2 === "Answer 2" && selectedRadioQ3 === "Answer 1") {
      setQuestionState(false)
    }
    if (selectedRadioQ1 === "Answer 2" && selectedRadioQ2 === "Answer 3" && selectedRadioQ3 === "Answer 3") {
      setQuestionState(false)
    }
    if (selectedRadioQ1 === " " && selectedRadioQ2 === " " && selectedRadioQ3 === " ") {
      setQuestionState(null)
    }
  }

  return (
    <div className="QCM">
      <Question question="Question 1" questionText="Combien peut-on prendre de douches avec l'eau d'un bain ?">
        {radiosQ1.map((radio, index) => {
          return (
            <div key={radio} >
              <input type="radio" name="q1" value={radio} id={"q1-" + index} checked={radio == selectedRadioQ1} onChange={(e) => setSelectedRadioQ1(e.target.value)} />
              <label htmlFor={"q1-" + index}>
                <span></span>
                {radio}
              </label>
            </div>
          );
        })}
      </Question>
      <Question question="Question 2" questionText="Combien de temps faut-il à un mégot jeté pour se dégrader ?">
        {radiosQ2.map((radio, index) => {
          return (
            <div key={radio}>
              <input name="q2" type="radio" value={radio} id={"q2-" + index} checked={radio == selectedRadioQ2} onChange={(e) => setSelectedRadioQ2(e.target.value)} />
              <label htmlFor={"q2-" + index}>
                <span></span>
                {radio}
              </label>
            </div>
          );
        })}
      </Question>
      <Question question="Question 3" questionText="Combien d'années un sac plastique met-il à se biodégrader ?">
        {radiosQ3.map((radio, index) => {
          return (
            <div key={radio}>
              <input name="q3" type="radio" value={radio} id={"q3-" + index} checked={radio == selectedRadioQ3} onChange={(e) => setSelectedRadioQ3(e.target.value)} />
              <label htmlFor={"q3-" + index}>
                <span></span>
                {radio}
              </label>
            </div>
          );
        })}
      </Question>
      <button className="submit-qcm" onClick={CalculResponse}>Envoyer</button>
      {questionState === null ? <p>Aucune réponses enregistrées </p> : null}
      {questionState === true ? <p>Good job </p> : null}
      {questionState === false ? <p>Loose </p> : null}
    </div>
  );
};