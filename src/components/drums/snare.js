import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import snare from "../../assets/drums_audio/Snare_Rock.ogg";

const Snare = ({ playSound }) => {
    const { snareVolume, snarePanning } = useSelector((state) => state.snare);

    const controls = useAnimation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 'x':
                    playSound(snare, snareVolume, snarePanning);
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
    }, [controls, snareVolume, snarePanning, playSound]);

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
            onClick={() => {playSound(snare, snareVolume, snarePanning); triggerAnim()}}
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