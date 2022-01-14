import './JeuPingouins.scss';
import SpeechRecognition from 'react-speech-recognition/lib/SpeechRecognition';
import { useSpeechRecognition } from 'react-speech-recognition';

export const JeuPingouins = () => {

    const commands = [
        {
          command: "change background colour to *",
          callback: (color) => {
            document.body.style.background = color;
          },
        }
      ];

    return (
        <div className="JeuPingouins">
            <h1>Jeu Pingouins</h1>
        </div>
    )
}