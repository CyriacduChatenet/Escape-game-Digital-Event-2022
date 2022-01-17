import { useEffect, useState } from "react/cjs/react.development";
import { Question } from "../Question/Question";
import "./QCM.scss";

export const QCM = () => {

    const [question1Response1, setQuestion1Response1] = useState(false)
    const [question1Response2, setQuestion1Response2] = useState(false)
    const [question1Response3, setQuestion1Response3] = useState(false)

    const [question2Response1, setQuestion2Response1] = useState(false)
    const [question2Response2, setQuestion2Response2] = useState(false)
    const [question2Response3, setQuestion2Response3] = useState(false)

    const [question3Response1, setQuestion3Response1] = useState(false)
    const [question3Response2, setQuestion3Response2] = useState(false)
    const [question3Response3, setQuestion3Response3] = useState(false)

    const [questionState, setQuestionState] = useState(false)

    const QuestionState = () => {
        if(question1Response3 === true && question2Response1 === true && question3Response2 === true){
            setQuestionState(true)
        }else {
            setQuestionState(false)
        }
    }

    useEffect(() => {
        if(question1Response1 === false && question1Response2 === false && question1Response3 === false && question2Response1 === false && 
            question2Response2 === false && question2Response3 === false && question3Response1 === false && question3Response2 === false && question3Response3 === false){
                setQuestionState(null)
            } 
    })

  return (
    <div className="QCM">
      <Question question="Question 1">
        <div className="answer">
          <div className="checkbox" onClick={() => {setQuestion1Response1(true)}}>
          {question1Response1 === false | null ? null : <p>v</p>}
          </div>
          <p>first answer</p>
        </div>
        <div className="answer">
        <div className="checkbox" onClick={() => {setQuestion1Response2(true)}}>
          {question1Response2 === false | null  ? null : <p>v</p>}
          </div>
          <p>second answer</p>
        </div>
        <div className="answer">
        <div className="checkbox" onClick={() => {setQuestion1Response3(true)}}>
          {question1Response3 === false | null  ? null : <p>v</p>}
          </div>
          <p>third answer</p>
        </div>
      </Question>
      <Question question="Question 2">
      <div className="answer">
          <div className="checkbox" onClick={() => {setQuestion2Response1(true)}}>
          {question2Response1 === false | null  ? null : <p>v</p>}
          </div>
          <p>first answer</p>
        </div>
        <div className="answer">
        <div className="checkbox" onClick={() => {setQuestion2Response2(true)}}>
          {question2Response2 === false | null  ? null : <p>v</p>}
          </div>
          <p>second answer</p>
        </div>
        <div className="answer">
        <div className="checkbox" onClick={() => {setQuestion2Response3(true)}}>
          {question2Response3 === false | null  ? null : <p>v</p>}
          </div>
          <p>third answer</p>
        </div>
      </Question>
      <Question question="Question 3">
      <div className="answer">
          <div className="checkbox" onClick={() => {setQuestion3Response1(true)}}>
          {question3Response1 === false | null  ? null : <p>v</p>}
          </div>
          <p>first answer</p>
        </div>
        <div className="answer">
        <div className="checkbox" onClick={() => {setQuestion3Response2(true)}}>
          {question3Response2 === false | null  ? null : <p>v</p>}
          </div>
          <p>second answer</p>
        </div>
        <div className="answer">
        <div className="checkbox" onClick={() => {setQuestion3Response3(true)}}>
          {question3Response3 === false | null  ? null : <p>v</p>}
          </div>
          <p>third answer</p>
        </div>
      </Question>
      <button className="submit-qcm" onClick={QuestionState}>Submit</button>
      {questionState === true ? <p>Good job</p> : null}
      {questionState === false ? <p>Loose</p> : null}
      {questionState === null ? <p>Pas de réponse, merci de répondre au questionnaire</p> : null}
    </div>
  );
};