import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import floor from "../../assets/drums_audio/Floor_Rock.ogg";
import { useSelector } from "react-redux";

const Floor = ({ playSound }) => {

    const { floorVolume, floorPanning } = useSelector((state) => state.toms);

    const controls = useAnimation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 'n':
                    playSound(floor, floorVolume, floorPanning);
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
    }, [controls, floorVolume, floorPanning, playSound]);

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
                onClick={() => {playSound(floor, floorVolume, floorPanning); triggerAnim()}}
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