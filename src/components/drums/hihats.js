import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import close_hats from "../../assets/drums_audio/HiHat_Closed_Rock.ogg";
import open_hats from "../../assets/drums_audio/HiHat_Open_Rock.ogg";

const HiHats = () => {
    const controlsHiHatClosed = useAnimation();
    const controlsHiHatOpen = useAnimation();

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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 's':
                    playSound(close_hats, 1, -0.5);
                    controlsHiHatClosed.start({ scale: 0.95 });
                    break;
                case 'a':
                    playSound(open_hats, 1, -0.5);
                    controlsHiHatOpen.start({ scale: 0.95 });
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 's':
                    controlsHiHatClosed.start({ scale: 1 });
                    break;
                case 'a':
                    controlsHiHatOpen.start({ scale: 1 });
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
    }, [controlsHiHatClosed, controlsHiHatOpen]);

    const triggerAnim = (drum) => {
        switch (drum) {
            case "closed_hats":
                controlsHiHatClosed.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsHiHatClosed.start({ scale: 1 });
                }, 100);
                break;
            case "open_hats":
                controlsHiHatOpen.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsHiHatOpen.start({ scale: 1 });
                }, 100);
                break;
            default:
                break;  
        }
    }

    return (
        <div className="hats-wrap grid absolute">
            <motion.div
                className="hats-container hat-closed w-48 h-48 flex rounded-full cursor-pointer"
                animate={controlsHiHatClosed}
                onClick={() => {playSound(close_hats, 1, -0.5); triggerAnim("closed_hats")}}
            >
                <div className="w-48 h-48 grid place-content-center relative">
                    <div className="crash-border w-14 h-14 rounded-full"></div>
                    <div className="crash-shine splash-shine"></div>
                    <div className="crash-shine-b"></div>
                    <p className="w-full h-full text-2xl font-bold absolute flex items-end justify-center bottom-8 z-10">CLOSE HH</p>
                </div>
            </motion.div>
            <motion.div
                className="hats-container hat-open w-48 h-48 flex rounded-full cursor-pointer"
                animate={controlsHiHatOpen}
                onClick={() => {playSound(open_hats, 0.7, -0.5); triggerAnim("open_hats")}}
            >
                <div className="w-48 h-48 grid place-content-center relative">
                    <div className="crash-border w-14 h-14 rounded-full"></div>
                    <div className="crash-shine splash-shine"></div>
                    <div className="crash-shine-b"></div>
                    <p className="w-full h-full text-2xl font-bold absolute flex items-end justify-center bottom-8 z-10">OPEN HH</p>
                </div>
            </motion.div>
        </div>
    )
}

export default HiHats