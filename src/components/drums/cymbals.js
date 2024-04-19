import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import crash_long from "../../assets/drums_audio/Crash_Long_Rock.ogg";
import crash_short from "../../assets/drums_audio/Crash_Short_Rock.ogg";
import splash from "../../assets/drums_audio/Splash_Rock.ogg";
import ride from "../../assets/drums_audio/Ride_Rock.ogg";
import { useSelector } from "react-redux";

const Cymbals = ({ playSound }) => {

    const {
        crashLongVolume,
        crashLongPanning,
        crashShortVolume,
        crashShortPanning,
        splashVolume,
        splashPanning,
        rideVolume,
        ridePanning,
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
                    playSound(crash_long, crashLongVolume, crashLongPanning);
                    controlsCrashLong.start({ scale: 0.95 });
                    break;
                case 'f':
                    playSound(splash, splashVolume, splashPanning);
                    controlsSplash.start({ scale: 0.95 });
                    break;
                case 'g':
                    playSound(crash_short, crashShortVolume, crashShortPanning);
                    controlsCrashShort.start({ scale: 0.95 });
                    break;
                case 'h':
                    playSound(ride, rideVolume, ridePanning);
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
        controlsCrashLong, 
        controlsCrashShort, 
        controlsSplash, 
        controlsRide,
        crashLongVolume,
        crashLongPanning,
        crashShortVolume,
        crashShortPanning,
        splashVolume,
        splashPanning,
        rideVolume,
        ridePanning,
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

    return (
        <>
            <div className="crash-long-wrap grid absolute">
                <motion.div
                    className="crash-container c-long w-60 h-60 rounded-full cursor-pointer"
                    animate={controlsCrashLong}
                    onClick={() => {playSound(crash_long, crashLongVolume, crashLongPanning); triggerAnim("crash_long")}}
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
                    onClick={() => {playSound(crash_short, crashShortVolume, crashShortPanning); triggerAnim("crash_short")}}
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
                    onClick={() => {playSound(splash, splashVolume, splashPanning); triggerAnim("splash")}}
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
                    onClick={() => {playSound(ride, rideVolume, ridePanning); triggerAnim("ride")}}
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