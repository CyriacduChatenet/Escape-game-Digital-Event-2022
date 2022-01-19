import { useSelector } from "react-redux";
import { useState, useEffect } from "react/cjs/react.development";
import { store } from "../../redux/store";
import "./SurconsommationPasswordDecryptor.scss"
import {Victory} from "../Victory/Victory"

export const SurconsommationPasswordDecryptor = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [barValue, setBarValue] = useState(0)  

  const [numbersAnswer, setNumbersAnswer] = useState([
    {name:"number1",response: "63", validated: false},
    {name:"number2",response: "71", validated: false},
    {name:"number3",response: "59", validated: false}
  ])
  const [errors, setErros] = useState(0)
  const [gameIsValidated, setGameIsValidated] = useState(false)
  const [userValues, setUserValues] = useState([])
  const missions = useSelector(state=> state.missionsReducer)

  // const resizeBarChart = () => {
  //   if(codeFirstPart == 63 && codeSecondPart == 71 && codeThirdPart == 59){
  //     setWin(true)
  //   }
  //   if(codeFirstPart != 63 && codeFirstPart != ""){
  //     setBarValue(barValue +10)
  //   }
  // }

  const checkGameIsValidated = () => {
    let numberOfValidated = 0
    numbersAnswer.map(answer => {
      if(answer.validated === true) {
        numberOfValidated++
      }
    })

    if(numberOfValidated >= 3){
      setGameIsValidated(true)

      missions[3].completed = true
      store.dispatch({
        type: "missions/update",
        payload: missions,
      });
    }
  }

  const handleChange = (e) => {
    const {value, name} = e.currentTarget

    numbersAnswer.map(answer => {
      if(answer.name === name){
        if(value === answer.response){
          answer.validated = true
        }
        if(value != answer.response && value.length >= 2){
          setErros(errors + 1)
          setBarValue(barValue+errors)
        }
      }
    })
    setNumbersAnswer(numbersAnswer)
    checkGameIsValidated()
  }

  let intervalTime;

  useEffect(() => {
    intervalTime = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds <= 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (seconds <= 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(intervalTime);
  });

  //const code = 637159

  return (
    <div className="SurconsommationPasswordDecryptor">
      <div className="chrono-password-decryptor">
        <div className="chrono-decryptor">
          <p className="chrono">
            {minutes} : {seconds}
          </p>
        </div>
      </div>
      <div className="surconsommation-chart">
        <div className="bar" style={{height: barValue + "%"}}></div>
      </div>
      <div className="inputs-decryptor">
        {numbersAnswer.map(answer => (
          <input type="text" name={answer.name} className={answer.validated === true ? "validated input-decryptor" : "input-decryptor"} onChange={handleChange} maxLength={2} />
          ))}
      </div>
      <div className="menus-decryptor">
        <div className="row-top">
          <div className="decryptor-part">
            <div className="code-unlock">
              <div className="code-part-fix">12</div>
              <div className="code-part-fix">44</div>
              <div className="code-part-fix">59</div>
            </div>
            <div className="decryptor-desc">
              Un bloc est correct et bien placé
            </div>
          </div>
          <div className="decryptor-part">
            <div className="code-unlock">
              <div className="code-part-fix">12</div>
              <div className="code-part-fix">85</div>
              <div className="code-part-fix">71</div>
            </div>
            <div className="decryptor-desc">
              Un bloc est correct mais mal placé
            </div>
          </div>
        </div>
        <div className="row-mid">
          <div className="decryptor-part">
            <div className="code-unlock">
              <div className="code-part-fix">59</div>
              <div className="code-part-fix">63</div>
              <div className="code-part-fix">12</div>
            </div>
            <div className="decryptor-desc">
              Deux blocs sont correct mais mal placés
            </div>
          </div>
          <div className="decryptor-part">
            <div className="code-unlock">
              <div className="code-part-fix">03</div>
              <div className="code-part-fix">98</div>
              <div className="code-part-fix">44</div>
            </div>
            <div className="decryptor-desc">Aucun bloc n'est correct</div>
          </div>
        </div>
        <div className="row-bottom">
          <div className="decryptor-part">
            <div className="code-unlock">
              <div className="code-part-fix">03</div>
              <div className="code-part-fix">44</div>
              <div className="code-part-fix">63</div>
            </div>
            <div className="decryptor-desc">Un des deux blocs sont correct mais mal placés</div>
          </div>
        </div>
      </div>

          {gameIsValidated && <Victory/>}
    </div>
  );
};