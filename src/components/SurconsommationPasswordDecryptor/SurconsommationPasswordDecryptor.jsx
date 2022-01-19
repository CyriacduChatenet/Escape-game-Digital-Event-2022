import { useState, useEffect } from "react/cjs/react.development";
import { store } from "../../redux/store";
import "./SurconsommationPasswordDecryptor.scss";

export const SurconsommationPasswordDecryptor = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  const [barValue, setBarValue] = useState(0)
  const [win, setWin] = useState(false)

  const [codeFirstPart, setCodeFirstPart] = useState("")
  const [codeSecondPart, setCodeSecondPart] = useState("")
  const [codeThirdPart, setCodeThirdPart] = useState("")

  const resizeBarChart = () => {
    if(codeFirstPart == 63 && codeSecondPart == 71 && codeThirdPart == 59){
      setWin(true)
    }
    if(codeFirstPart != 63 && codeFirstPart != ""){
      setBarValue(barValue +10)
    }
  }

  resizeBarChart();

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
        <input type="text" name="" id="" className="input-decryptor" onChange={(e) => {setCodeFirstPart(e.target.value)}} />
        <input type="text" name="" id="" className="input-decryptor" />
        <input type="text" name="" id="" className="input-decryptor" />
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
    </div>
  );
};