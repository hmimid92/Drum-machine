import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import "./styles.scss"; 


const DrumMachine = () => {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(true);
  const [range, setRange] = useState("50");
  const [displayVolume, setDisplayVolume] = useState(false);
  const [displayBank, setDisplayBank] = useState(false);
  const [displayPad, setDisplayPad] = useState(false);
  const [padName, setPadName] = useState("");
  const [bankName, setBankName] = useState("");
  const playAudioQ = useRef(null);
  const playAudioW = useRef(null);
  const playAudioE = useRef(null);
  const playAudioA = useRef(null);
  const playAudioS = useRef(null);
  const playAudioD = useRef(null);
  const playAudioZ = useRef(null);
  const playAudioX = useRef(null);
  const playAudioC = useRef(null);

  const playAudioQH = useRef(null);
  const playAudioWH = useRef(null);
  const playAudioEH = useRef(null);
  const playAudioAH = useRef(null);
  const playAudioSH = useRef(null);
  const playAudioDH = useRef(null);
  const playAudioZH = useRef(null);
  const playAudioXH = useRef(null);
  const playAudioCH = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (displayVolume) {
        setDisplayVolume(false);
      }
    }, 1500);
  }, [displayVolume]);

  useEffect(() => {
    playAudioQ.current.volume = Number(range) / 100;
    playAudioW.current.volume = Number(range) / 100;
    playAudioE.current.volume = Number(range) / 100;
    playAudioA.current.volume = Number(range) / 100;
    playAudioS.current.volume = Number(range) / 100;
    playAudioD.current.volume = Number(range) / 100;
    playAudioZ.current.volume = Number(range) / 100;
    playAudioX.current.volume = Number(range) / 100;
    playAudioC.current.volume = Number(range) / 100;

    playAudioQH.current.volume = Number(range) / 100;
    playAudioWH.current.volume = Number(range) / 100;
    playAudioEH.current.volume = Number(range) / 100;
    playAudioAH.current.volume = Number(range) / 100;
    playAudioSH.current.volume = Number(range) / 100;
    playAudioDH.current.volume = Number(range) / 100;
    playAudioZH.current.volume = Number(range) / 100;
    playAudioXH.current.volume = Number(range) / 100;
    playAudioCH.current.volume = Number(range) / 100;
  }, [range]);

  const hundleClick = (e) => {
    setDisplayVolume(false);
    setDisplayBank(false);
    setDisplayPad(true);
    setPadName(e.target.name);
    if (bankName === "Smooth Piano Kit") {
      switch (e.target.id) {
        case "Chord1":
          playAudioQ.current.play();
          break;
        case "Chord2":
          playAudioW.current.play();
          break;
        case "Chord3":
          playAudioE.current.play();
          break;
        case "Shaker":
          playAudioA.current.play();
          break;
        case "OpenHH":
          playAudioS.current.play();
          break;
        case "ClosedHH":
          playAudioD.current.play();
          break;
        case "PunchyKick":
          playAudioZ.current.play();
          break;
        case "SideStick":
          playAudioX.current.play();
          break;
        case "Snare":
          playAudioC.current.play();
          break;
        default:
          alert("pad undefined!");
      }
    } else {
      switch (e.target.id) {
        case "Chord1":
          playAudioQH.current.play();
          break;
        case "Chord2":
          playAudioWH.current.play();
          break;
        case "Chord3":
          playAudioEH.current.play();
          break;
        case "Shaker":
          playAudioAH.current.play();
          break;
        case "OpenHH":
          playAudioSH.current.play();
          break;
        case "ClosedHH":
          playAudioDH.current.play();
          break;
        case "PunchyKick":
          playAudioZH.current.play();
          break;
        case "SideStick":
          playAudioXH.current.play();
          break;
        case "Snare":
          playAudioCH.current.play();
          break;
        default:
          alert("pad undefined!");
      }
    }
  };

  const handleChangePower = () => {
    setDisplayBank(false);
    setDisplayPad(false);
    setPower(!power);
  };

  const handleChangeBank = (e) => {
    setDisplayPad(false);
    setDisplayVolume(false);
    setDisplayBank(true);
    setBank(!bank);
    if (bank) {
      setBankName("Smooth Piano Kit");
    } else {
      setBankName("Heater Kit");
    }
  };

  const hundleChangeRange = (e) => {
    setDisplayPad(false);
    setDisplayBank(false);
    setDisplayVolume(true);
    setRange(e.target.value);
  };

  return (
    <div
      id="drum-machine"
      className="container d-flex flex-column pb-2 bg-success mt-4 border border-danger border-3"
    >
      <div className="title text-end mb-2 fw-bolder">
        FCC
        <FontAwesomeIcon id="freecodecamp" icon={faFreeCodeCamp} />
      </div>
      <div className="main-content d-flex">
        <div className="pad-elements container text-center mb-2">
          <div className="row">
            <button
              className="drum-pad col"
              id="Chord1"
              name={bankName === "Smooth Piano Kit" ? "Chord 1" : "Heater 1"}
              onClick={hundleClick}
              disabled={!power}
            >
              Q
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                className="clip d-none"
                id="Q"
                ref={playAudioQ}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
                className="clip d-none"
                id="Q"
                ref={playAudioQH}
              ></audio>
            </button>
            <button
              className="drum-pad col"
              id="Chord2"
              name={bankName === "Smooth Piano Kit" ? "Chord 2" : "Heater 2"}
              disabled={!power}
              onClick={hundleClick}
            >
              W
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
                className="clip d-none"
                id="W"
                ref={playAudioW}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
                className="clip d-none"
                id="W"
                ref={playAudioWH}
              ></audio>
            </button>
            <button
              className="drum-pad col"
              id="Chord3"
              name={bankName === "Smooth Piano Kit" ? "Chord 3" : "Heater 3"}
              disabled={!power}
              onClick={hundleClick}
            >
              E
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                className="clip d-none"
                id="E"
                ref={playAudioE}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
                className="clip d-none"
                id="E"
                ref={playAudioEH}
              ></audio>
            </button>
          </div>
          <div className="row">
            <button
              className="drum-pad col"
              id="Shaker"
              name={bankName === "Smooth Piano Kit" ? "Shaker" : "Heater 4"}
              disabled={!power}
              onClick={hundleClick}
            >
              A
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                className="clip d-none"
                id="A"
                ref={playAudioA}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
                className="clip d-none"
                id="A"
                ref={playAudioAH}
              ></audio>
            </button>
            <button
              className="drum-pad col"
              id="OpenHH"
              name={bankName === "Smooth Piano Kit" ? "Open HH" : "Clap"}
              disabled={!power}
              onClick={hundleClick}
            >
              S
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                className="clip d-none"
                id="S"
                ref={playAudioS}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
                className="clip d-none"
                id="S"
                ref={playAudioSH}
              ></audio>
            </button>
            <button
              className="drum-pad col"
              id="ClosedHH"
              name={bankName === "Smooth Piano Kit" ? "Closed HH" : "Opend HH"}
              disabled={!power}
              onClick={hundleClick}
            >
              D
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                className="clip d-none"
                id="D"
                ref={playAudioD}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
                className="clip d-none"
                id="D"
                ref={playAudioDH}
              ></audio>
            </button>
          </div>
          <div className="row">
            <button
              className="drum-pad col"
              id="PunchyKick"
              name={
                bankName === "Smooth Piano Kit" ? "Punchy Kick" : "Kick n' Hat"
              }
              disabled={!power}
              onClick={hundleClick}
            >
              Z
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                className="clip d-none"
                id="Z"
                ref={playAudioZ}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
                className="clip d-none"
                id="Z"
                ref={playAudioZH}
              ></audio>
            </button>
            <button
              className="drum-pad col"
              id="SideStick"
              name={bankName === "Smooth Piano Kit" ? "Side stick" : "Kick"}
              disabled={!power}
              onClick={hundleClick}
            >
              X
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                className="clip d-none"
                id="X"
                ref={playAudioX}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
                className="clip d-none"
                id="X"
                ref={playAudioXH}
              ></audio>
            </button>
            <button
              className="drum-pad col"
              id="Snare"
              name={bankName === "Smooth Piano Kit" ? "Snare" : "Closed HH"}
              disabled={!power}
              onClick={hundleClick}
            >
              C
              <audio
                controls
                src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                className="clip d-none"
                id="C"
                ref={playAudioC}
              ></audio>
              <audio
                controls
                src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
                className="clip d-none"
                id="C"
                ref={playAudioCH}
              ></audio>
            </button>
          </div>
        </div>
        <div className="control-elements d-flex flex-column align-items-center">
          <div className="control1 form-check form-switch mt-1">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={power}
              onChange={handleChangePower}
            />
            <label
              className="form-check-label fw-bolder"
              for="flexSwitchCheckChecked"
            >
              Power
            </label>
          </div>
          <div id="display" className="control1 fw-bold font-monospace">
            {displayVolume && <span>Volume: {range}</span>}
            {displayBank && <span>{bankName}</span>}
            {displayPad && <span>{padName}</span>}
          </div>
          <div className="control1 position-relative mt-3">
            <label
              for="customRange2"
              className="form-label position-absolute top-25 end-0 fw-bolder"
            >
              Volume
            </label>
            <input
              type="range"
              className="form-range w-50 ms-5"
              min="0"
              max="100"
              id="customRange2"
              value={range}
              onChange={hundleChangeRange}
              disabled={!power}
            />
          </div>
          <div className="control1 form-check form-switch my-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={bank}
              onChange={handleChangeBank}
              disabled={!power}
            />
            <label
              className="form-check-label fw-bolder"
              for="flexSwitchCheckChecked"
            >
              Bank
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>
);
