import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";

const Cymbals = ({ playSound }) => {

    const {
        crashLongVolume, crashLongPanning, crashLongAudio, crashLongIsMuted,
        crashShortVolume, crashShortPanning, crashShortAudio, crashShortIsMuted,
        splashVolume, splashPanning, splashAudio, splashIsMuted,
        rideVolume, ridePanning, rideAudio, rideIsMuted,
    } = useSelector((state) => state.cymbals);

    const controlsCrashLong = useAnimation();
    const controlsCrashShort = useAnimation();
    const controlsSplash = useAnimation();
    const controlsRide = useAnimation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.repeat) return

            switch (event.key) {
                case 'd':
                    if (!crashLongIsMuted){
                        playSound(crashLongAudio, crashLongVolume, crashLongPanning);
                    }
                    controlsCrashLong.start({ scale: 0.95 });
                    break;
                case 'f':
                    if (!splashIsMuted){
                        playSound(splashAudio, splashVolume, splashPanning);
                    }
                    controlsSplash.start({ scale: 0.95 });
                    break;
                case 'g':
                    if (!crashShortIsMuted){
                        playSound(crashShortAudio, crashShortVolume, crashShortPanning);
                    }
                    controlsCrashShort.start({ scale: 0.95 });
                    break;
                case 'h':
                    if (!rideIsMuted){
                        playSound(rideAudio, rideVolume, ridePanning);
                    }
                    controlsRide.start({ scale: 0.95 });
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'd':
                    controlsCrashLong.start({ scale: 1 });
                    break;
                case 'f':
                    controlsSplash.start({ scale: 1 });
                    break;
                case 'g':
                    controlsCrashShort.start({ scale: 1 });
                    break;
                case 'h':
                    controlsRide.start({ scale: 1 });
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
        controlsCrashLong, controlsCrashShort, controlsSplash, controlsRide,
        crashLongVolume, crashLongPanning, crashLongAudio, crashLongIsMuted,
        crashShortVolume, crashShortPanning, crashShortAudio, crashShortIsMuted,
        splashVolume, splashPanning, splashAudio, splashIsMuted,
        rideVolume, ridePanning, rideAudio, rideIsMuted,
        playSound
    ]);

    const triggerAnim = (drum) => {
        switch (drum) {
            case "crash_long":
                controlsCrashLong.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsCrashLong.start({ scale: 1 });
                }, 100);
                break;
            case "crash_short":
                controlsCrashShort.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsCrashShort.start({ scale: 1 });
                }, 100);
                break;
            case "splash":
                controlsSplash.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsSplash.start({ scale: 1 });
                }, 100);
                break;
            case "ride":
                controlsRide.start({ scale: 0.95 });
                setTimeout(() => {
                    controlsRide.start({ scale: 1 });
                }, 100);
                break;
            default:
                break;  
        }
    }

    const triggerPlaySoundLong = () => {
        if (!crashLongIsMuted){
            playSound(crashLongAudio, crashLongVolume, crashLongPanning);
            triggerAnim("crash_long");
        }
    }
    const triggerPlaySoundShort = () => {
        if (!crashShortIsMuted){
            playSound(crashShortAudio, crashShortVolume, crashShortPanning);
            triggerAnim("crash_short");
        }
    }
    const triggerPlaySoundSplash = () => {
        if (!splashIsMuted){
            playSound(splashAudio, splashVolume, splashPanning);
            triggerAnim("splash");
        }
    }
    const triggerPlaySoundRide = () => {
        if (!rideIsMuted){
            playSound(rideAudio, rideVolume, ridePanning);
            triggerAnim("ride");
        }
    }

    return (
        <>
            <div className="crash-long-wrap grid absolute">
                <motion.div
                    className="crash-container c-long w-60 h-60 rounded-full cursor-pointer"
                    animate={controlsCrashLong}
                    onClick={triggerPlaySoundLong}
                >
                    <div className="w-60 h-60 grid place-content-center relative">
                        <div className="crash-border w-14 h-14 rounded-full"></div>
                        <div className="crash-shine"></div>
                        <div className="crash-shine-b"></div>
                        <p className="w-full h-full text-2xl font-bold absolute flex items-end justify-center bottom-10 z-10">CRASH</p>
                    </div>
                </motion.div>
            </div>
            <div className="cymbals-short-wrap grid absolute">
                <motion.div
                    className="crash-container c-short w-52 h-52 rounded-full cursor-pointer"
                    animate={controlsCrashShort}
                    onClick={triggerPlaySoundShort}
                >
                    <div className="w-52 h-52 grid place-content-center relative">
                        <div className="crash-border w-14 h-14 rounded-full"></div>
                        <div className="crash-shine c-short-splash"></div>
                        <div className="crash-shine-b"></div>
                        <p className="w-full h-full text-2xl font-bold absolute flex items-end justify-center bottom-8 z-10">CRASH</p>
                    </div>
                </motion.div>
            </div>
            <div className="splash-wrap grid absolute">
                <motion.div
                    className="crash-container c-splash w-48 h-48 rounded-full cursor-pointer"
                    animate={controlsSplash}
                    onClick={triggerPlaySoundSplash}
                >
                    <div className="w-48 h-48 grid place-content-center relative">
                        <div className="crash-border w-14 h-14 rounded-full"></div>
                        <div className="crash-shine splash-shine"></div>
                        <div className="crash-shine-b"></div>
                        <p className="w-full h-full text-2xl font-bold absolute flex items-end justify-center bottom-6 z-10">SPLASH</p>
                    </div>
                </motion.div>
            </div>
            <div className="ride-wrap grid absolute">
                <motion.div
                    className="crash-container c-ride w-60 h-60 rounded-full cursor-pointer"
                    animate={controlsRide}
                    onClick={triggerPlaySoundRide}
                >
                    <div className="w-60 h-60 grid place-content-center relative">
                        <div className="crash-border w-14 h-14 rounded-full"></div>
                        <div className="crash-shine"></div>
                        <div className="crash-shine-b"></div>
                        <p className="w-full h-full text-2xl font-bold absolute flex items-end justify-center bottom-10 z-10">RIDE</p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Cymbals