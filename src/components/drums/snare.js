import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import snare from "../../assets/drums_audio/Snare_Rock.ogg";

const Snare = () => {

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

    const controls = useAnimation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 'x':
                    playSound(snare, 1, 0);
                    controls.start({ scale: 0.95 });
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'x':
                    controls.start({ scale: 1 });
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
    }, [controls]);

    const triggerAnim = () => {
        controls.start({ scale: 0.95 });
        setTimeout(() => {
            controls.start({ scale: 1 });
        }, 100);
    }

    return (
        <motion.div
            className="snare-container w-60 h-60 absolute rounded-full cursor-pointer"
            animate={controls}
            onClick={() => {playSound(snare, 1, 0); triggerAnim()}}
        >
            <div className="snare-border w-48 h-48 rounded-full grid place-content-center text-2xl font-bold">
                SNARE
            </div>

            <div className="drum-lock-con snare-drum-lock-1"><div className="drum-lock"></div></div>
            <div className="drum-lock-con snare-drum-lock-2"><div className="drum-lock"></div></div>
            <div className="drum-lock-con snare-drum-lock-3"><div className="drum-lock"></div></div>
            <div className="drum-lock-con snare-drum-lock-4"><div className="drum-lock"></div></div>
            <div className="drum-lock-con snare-drum-lock-5"><div className="drum-lock"></div></div>
            <div className="drum-lock-con snare-drum-lock-6"><div className="drum-lock"></div></div>
            <div className="drum-lock-con snare-drum-lock-7"><div className="drum-lock"></div></div>
            <div className="drum-lock-con snare-drum-lock-8"><div className="drum-lock"></div></div>
        </motion.div>
    )
}

export default Snare;