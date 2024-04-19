import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import kick from "../../assets/drums_audio/Kick_Rock.ogg";

const Kick = ({ playSound }) => {

    const { kickVolume, kickPanning } = useSelector((state) => state.kick);

    const controlsKick = useAnimation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 'z':
                    playSound(kick, kickVolume, kickPanning);
                    controlsKick.start({ scale: 0.95 });
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'z':
                    controlsKick.start({ scale: 1 });
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
    }, [controlsKick, kickVolume, kickPanning, playSound]);

    const triggerAnim = () => {
        controlsKick.start({ scale: 0.95 });
        setTimeout(() => {
            controlsKick.start({ scale: 1 });
        }, 100);
    }

    return (
        <div className="kick-wrap flex gap-4 absolute">
            <motion.div
                className="kick-container w-72 h-72 flex cursor-pointer"
                animate={controlsKick}
                onClick={() => {playSound(kick, kickVolume, kickPanning); triggerAnim()}}
            >
                <div className="kick-border w-72 h-72 rounded-full">
                    <div className="w-24 h-24 bg-slate-50 rounded-full grid place-content-center text-2xl font-bold">
                        KICK
                    </div>
                </div>

                <div className="drum-lock-con drum-lock-1"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-2"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-3"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-4"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-5"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-6"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-7"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-8"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-9"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-10"><div className="drum-lock"></div></div>
            </motion.div>

            <motion.div
                className="kick-container w-72 h-72 flex rounded-full cursor-pointer"
                animate={controlsKick}
                onClick={() => {playSound(kick, kickVolume, kickPanning); triggerAnim()}}
            >
                <div className="kick-border w-72 h-72 rounded-full">
                    <div className="w-24 h-24 bg-slate-50 rounded-full grid place-content-center text-2xl font-bold">
                        KICK
                    </div>
                </div>

                <div className="drum-lock-con drum-lock-1"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-2"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-3"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-4"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-5"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-6"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-7"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-8"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-9"><div className="drum-lock"></div></div>
                <div className="drum-lock-con drum-lock-10"><div className="drum-lock"></div></div>
            </motion.div>
        </div>
    )
}

export default Kick;