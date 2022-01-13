import { useEffect, useState } from "react/cjs/react.development";
import "./ShortTerminal.scss";

export const ShortTerminal = () => {

    const [showTerminal , setShowTerminal] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowTerminal(true)
        },2000)

        setTimeout(() => {
            setShowTerminal(false)
        }, 3000)
    },[])

  return (
      <>
        {
            showTerminal === true ? 
            <div className="short-terminal-container">
            <div className="terminal-short">
              <div className="terminal-header"></div>
              <div className="terminal-body">
                <video autoPlay className="modal-video-terminal">
                  <source src="/assets/video/terminal3s.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div> 
          : null
        }
      </>
  );
};
