import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import tom_low from "../../assets/drums_audio/Tom_Low_Rock.ogg";
import tom_mid from "../../assets/drums_audio/Tom_Mid_Rock.ogg";
import tom_high from "../../assets/drums_audio/Tom_High_Rock.ogg";

const Toms = () => {

    let audioContext = null;
    let panNode = null;

    const initAudioContext = () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            panNode = audioContext.createStereoPanner();
            panNode.connect(audioContext.destination);
        }
    };

    const playSound = (sound, volume, panning) => {
        let vol = volume;
        let pan = panning;
        if (volume == null){
            vol = 1;
        }
        if (panning == null){
            pan = 0;
        }
        initAudioContext();

        const audio = new Audio(sound);
        const source = audioContext.createMediaElementSource(audio);

        // set volume (0 to 1)
        audio.volume = vol;
        // Set pan (left: -1 to right: 1)
        panNode.pan.value = pan;
        source.connect(panNode);
        audio.play();
    };

    const controlsTomHigh = useAnimation();
    const controlsTomMid = useAnimation();
    const controlsTomLow = useAnimation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 'c':
                    playSound(tom_high, 1, -0.25);
                    controlsTomHigh.start({ scale: 0.95 });
                    break;
                case 'v':
                    playSound(tom_mid, 1, 0);
                    controlsTomMid.start({ scale: 0.95 });
                    break;
                case 'b':
                    playSound(tom_low, 1, -0.25);
                    controlsTomLow.start({ scale: 0.95 });
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'c':
                    controlsTomHigh.start({ scale: 1 });
                    break;
                case 'v':
                    controlsTomMid.start({ scale: 1 });
                    break;
                case 'b':
                    controlsTomLow.start({ scale: 1 });
                    break;
                default:
                    break;
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [controlsTomHigh, controlsTomMid, controlsTomLow]);

    const triggerAnim = (drum) => {
        switch (drum) {
            case "tom_high":
                controlsTomHigh.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsTomHigh.start({ scale: 1 });
                }, 100);
                break;
            case "tom_mid":
                controlsTomMid.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsTomMid.start({ scale: 1 });
                }, 100);
                break;
            case "tom_low":
                controlsTomLow.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsTomLow.start({ scale: 1 });
                }, 100);
                break;
            default:
                break;  
        }
    }

    return (
        <div className="tom-wrap flex absolute">
            <motion.div
                className="tom-container tom-high w-48 h-48 flex rounded-full cursor-pointer"
                animate={controlsTomHigh}
                onClick={() => {playSound(tom_high, 1, -0.25); triggerAnim("tom_high")}}
            >
                <div className="tom-border w-32 h-32 rounded-full grid place-content-center text-2xl font-bold text-center">
                    TOM HIGH
                </div>

                <div className="drum-lock-con tom-drum-lock-1"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-2"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-3"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-4"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-5"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-6"><div className="drum-lock"></div></div>
            </motion.div>
            <motion.div
                className="tom-container tom-mid relative w-52 h-52 flex rounded-full cursor-pointer"
                animate={controlsTomMid}
                onClick={() => {playSound(tom_mid, 1, 0); triggerAnim("tom_mid")}}
            >
                <div className="tom-border w-36 h-36 rounded-full grid place-content-center text-2xl font-bold text-center">
                    TOM MID
                </div>

                <div className="drum-lock-con tom-drum-lock-1"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-2"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-3"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-4"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-5"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-6"><div className="drum-lock"></div></div>
            </motion.div>
            <motion.div
                className="tom-container tom-low w-56 h-56 flex rounded-full cursor-pointer"
                animate={controlsTomLow}
                onClick={() => {playSound(tom_low, 1, 0.25); triggerAnim("tom_low")}}
            >
                <div className="tom-border w-40 h-40 rounded-full grid place-content-center text-2xl font-bold text-center">
                    TOM LOW
                </div>

                <div className="drum-lock-con tom-drum-lock-1"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-2"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-3"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-4"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-5"><div className="drum-lock"></div></div>
                <div className="drum-lock-con tom-drum-lock-6"><div className="drum-lock"></div></div>
            </motion.div>
        </div>
    )
}

export default Toms;