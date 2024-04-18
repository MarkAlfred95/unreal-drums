import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import floor from "../../assets/drums_audio/Floor_Rock.ogg";

const Floor = () => {

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
                case 'n':
                    playSound(floor, 1, 0.5);
                    controls.start({ scale: 0.95 });
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'n':
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
        <div className="floor-wrap grid absolute">
            <motion.div
                className="floor-container w-60 h-60 rounded-full cursor-pointer"
                animate={controls}
                onClick={() => {playSound(floor, 1, 0.5); triggerAnim()}}
            >
                <div className="floor-border w-44 h-44 rounded-full grid place-content-center text-2xl font-bold">
                    FLOOR
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
        </div>
    )
}

export default Floor;