import { useEffect, useState } from "react/cjs/react.development";
import "./Modal.scss";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    setTimeout(() => {setShowModal(true)}, 6000)
    setTimeout(ControlVideo, 75000);
  }, []);
  const ControlVideo = () => {
    setShowCross(true);
  };

  setTimeout(function() {
    const video = document.querySelector('.modal-video')
    video.setAttribute('Controls', 'true')
  }, 75000);

  return (
    <>
      {showModal === true ?
        <div className="dark-bg">         
		      <div className="modal">
			      {showCross === true ? <img className="cross" onClick={() => setShowModal(false)} src="/assets/images/terminal-bar/Bar-top-right.png" alt=""/>: null}
              <video className="modal-video" autoPlay loop>
                <source src="/assets/video/video_hacker.mp4" type="video/mp4" />
              </video>
    	      </div>
          </div>
		    : null
      }
    </>
  );
};

export default Modal;
