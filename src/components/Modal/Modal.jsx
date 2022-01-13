import { useEffect, useState } from "react/cjs/react.development";
import "./Modal.scss";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    setTimeout(() => {setShowModal(true)}, 2000)
    setTimeout(ControlVideo, 5000);
  }, []);
  const ControlVideo = () => {
    setShowCross(true);
  };

  return (
    <>
      {showModal === true ?
        <div className="dark-bg">         
		      <div className="modal">
			      {showCross === true ? <img className="cross" onClick={() => setShowModal(false)} src="/assets/images/terminal-bar/Bar-top-right.png" alt=""/>: null}
              <video autoPlay className="modal-video">
                <source src="/assets/video/ModalVideo.mp4" type="video/mp4" />
              </video>
    	      </div>
          </div>
		    : null
      }
    </>
  );
};

export default Modal;
