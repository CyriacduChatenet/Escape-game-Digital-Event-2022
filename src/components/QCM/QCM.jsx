import { useState } from "react/cjs/react.development";
import { Question } from "../Question/Question";
import {store} from "../../redux/store"
import "./QCM.scss";

export const QCM = () => {

  const [selectedRadioQ1, setSelectedRadioQ1] = useState('');
  const radiosQ1 = ["Answer 1", "Answer 2", "Answer 3"]

  const [selectedRadioQ2, setSelectedRadioQ2] = useState('');
  const radiosQ2 = ["Answer 1", "Answer 2", "Answer 3"]

  const [selectedRadioQ3, setSelectedRadioQ3] = useState('');
  const radiosQ3 = ["Answer 1", "Answer 2", "Answer 3"]

  const [questionState, setQuestionState] = useState(null)

  const CalculResponse = () => {
    if(selectedRadioQ1 === "Answer 3" && selectedRadioQ2 === "Answer 1" && selectedRadioQ3 === "Answer 2"){
      setQuestionState(true)

      store.dispatch({
        type: "unlock/ecologie",
        payload: true,
      });
      
    }
    if(selectedRadioQ1 === "Answer 1" && selectedRadioQ2 === "Answer 1" && selectedRadioQ3 === "Answer 1"){
      setQuestionState(false)
    }
    if(selectedRadioQ1 === "Answer 2" && selectedRadioQ2 === "Answer 2" && selectedRadioQ3 === "Answer 2"){
      setQuestionState(false)
    }
    if(selectedRadioQ1 === "Answer 3" && selectedRadioQ2 === "Answer 3" && selectedRadioQ3 === "Answer 3"){
      setQuestionState(false)
    }
    if(selectedRadioQ1 === "Answer 1" && selectedRadioQ2 === "Answer 2" && selectedRadioQ3 === "Answer 1"){
      setQuestionState(false)
    }
    if(selectedRadioQ1 === "Answer 2" && selectedRadioQ2 === "Answer 3" && selectedRadioQ3 === "Answer 3"){
      setQuestionState(false)
    }
    if(selectedRadioQ1 === " " && selectedRadioQ2 === " " && selectedRadioQ3 === " "){
      setQuestionState(null)
    }
  }

  return (
    <div className="QCM">
      <Question question="Question 1">
      {radiosQ1.map((radio,index) => {
                        return (
                            <div key={radio}> 
                                <input type="radio" name="q1" value={radio} id={"q1-" + index} checked={radio == selectedRadioQ1} onChange={(e) => setSelectedRadioQ1(e.target.value)}/>
                                <label htmlFor={"q1-" + index}>{radio}</label>
                            </div>
                        );
                    })}
      </Question>
      <Question question="Question 2">
      {radiosQ2.map((radio,index) => {
                        return (
                            <div key={radio}> 
                                <input name="q2" type="radio" value={radio} id={"q2-" + index}  checked={radio == selectedRadioQ2} onChange={(e) => setSelectedRadioQ2(e.target.value)}/>
                                <label htmlFor={"q2-" + index}>{radio}</label>
                            </div>
                        );
                    })}
      </Question>
      <Question question="Question 3">
      {radiosQ3.map((radio,index) => {
                        return (
                            <div key={radio}> 
                                <input name="q3" type="radio" value={radio} id={"q3-" + index} checked={radio == selectedRadioQ3} onChange={(e) => setSelectedRadioQ3(e.target.value)}/>
                                <label htmlFor={"q3-" + index}>{radio}</label>
                            </div>
                        );
                    })}
      </Question>
      <button className="submit-qcm" onClick={CalculResponse}>Submit</button>
      {questionState === null ? <p>Aucune réponses enregistrées </p> : null}
      {questionState === true ? <p>Good job </p> : null}
      {questionState === false ? <p>Loose </p> : null}
    </div>
  );
};