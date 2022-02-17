import { useState } from "react";
import { Control } from "../components/Control";
import { Tecla2 } from "../components/Tecla2";
import { soundsGroup, soundsName } from "../sonidos/Sonidos";

const App = () => {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(1);
  const [soundName, setSoundName] = useState("");
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);

  const styleActiveKey = (key) => {
    key.parentElement.style.backgroundColor = "#000000"
    key.parentElement.style.color = "#ffffff"
  }

  // const deActivatedKey = (audio) => {
  //   audio.parentElement.style.backgroundColor = "#ffffff"
  //   audio.parentElement.style.color = "#000000"
  // }

  const deactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#ffffff"
      audio.parentElement.style.color = "#000000"
    }, 300)
  }

  const play = (key, sound) => {
    setSoundName(sound)
    const audio = document.getElementById(key);
    styleActiveKey(audio);
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio)
  }

  const stop = () => {
    setPower(!power)
  }

  const changeSoundGroup = () => {
    setSoundName("")
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  }

  const handleVolumeChange = e => {
    setVolume(e.target.value)
  }

  const setKeyVolume = () => {
    const audioes = sounds.map(sound => document.getElementById(sound.key));
    audioes.forEach(audio => {
      if (audio) {
        audio.volume = volume;
      }
    })
  }

  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <div className="wrapper">
        <Tecla2 sounds={sounds} play={play} power={power} deactivateAudio={deactivateAudio} />
        <Control
          stop={stop}
          power={power}
          volume={volume}
          name={soundName || soundsName[soundType]}
          changeSoundGroup={changeSoundGroup}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  )
};

export default App;
