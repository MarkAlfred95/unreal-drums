import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";

const HiHats = ({ playSound }) => {
    const { 
        hihatsOpenVolume, hihatsOpenPanning, 
        hihatsCloseVolume, hihatsClosePanning,
        hihatsOpenAudio, hihatsCloseAudio,
        hihatsOpenIsMuted, hihatsCloseIsMuted, 
    } = useSelector((state) => state.hihats);

    const controlsHiHatClosed = useAnimation();
    const controlsHiHatOpen = useAnimation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 's':
                    if (!hihatsCloseIsMuted){
                        playSound(hihatsCloseAudio, hihatsCloseVolume, hihatsClosePanning);
                    }
                    controlsHiHatClosed.start({ scale: 0.95 });
                    break;
                case 'a':
                    if (!hihatsOpenIsMuted){
                        playSound(hihatsOpenAudio, hihatsOpenVolume, hihatsOpenPanning);
                    }
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
    }, [
        controlsHiHatClosed, controlsHiHatOpen,
        hihatsCloseVolume, hihatsClosePanning,
        hihatsOpenVolume, hihatsOpenPanning,
        hihatsOpenAudio, hihatsCloseAudio,
        hihatsOpenIsMuted, hihatsCloseIsMuted, playSound
    ]);

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

    const triggerPlaySoundClose = () => {
        if (!hihatsCloseIsMuted){
            playSound(hihatsCloseAudio, hihatsCloseVolume, hihatsClosePanning);
            triggerAnim("closed_hats");
        }
    }
    const triggerPlaySoundOpen = () => {
        if (!hihatsOpenIsMuted){
            playSound(hihatsOpenAudio, hihatsOpenVolume, hihatsOpenPanning);
            triggerAnim("open_hats");
        }
    }

    return (
        <div className="hats-wrap grid absolute">
            <motion.div
                className="hats-container hat-closed w-48 h-48 flex rounded-full cursor-pointer"
                animate={controlsHiHatClosed}
                onClick={triggerPlaySoundClose}
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
                onClick={triggerPlaySoundOpen}
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

export default HiHats;