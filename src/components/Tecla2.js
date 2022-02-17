import React from 'react'
import { Tecla } from './Tecla';

export const Tecla2 = ({ sounds, play, power, deactivateAudio }) => (
    <div className="keyboard">
        {power
            ? sounds.map((sound) => <Tecla sound={sound} play={play} deactivateAudio={deactivateAudio} />)
            : sounds.map((sound) => <Tecla sound={{ ...sound, url: "#" }} play={play} deactivateAudio={deactivateAudio} />)
        }
    </div>
);