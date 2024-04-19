import { useSelector, useDispatch } from "react-redux";
import { 
    updateCrashLongVolume, updateCrashLongPanning, updateCrashLongIsMuted,
    updateCrashShortVolume, updateCrashShortPanning, updateCrashShortIsMuted,
    updateSplashVolume, updateSplashPanning, updateSplashIsMuted,
    updateRideVolume, updateRidePanning, updateRideIsMuted,
} from "../../redux/cymbalsSlice";

const CymbalsMixer = ({ playSound }) => {

    const { 
        crashLongVolume, crashLongPanning, crashLongAudio, crashLongIsMuted,
        crashShortVolume, crashShortPanning, crashShortAudio, crashShortIsMuted,
        splashVolume, splashPanning, splashAudio, splashIsMuted,
        rideVolume, ridePanning, rideAudio, rideIsMuted,
    } = useSelector((state) => state.cymbals);
    const dispatch = useDispatch();

    // CRASH LONG
    const handleVolumeChangeLong = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashLongVolume(value));
    };
    const handlePanningChangeLong = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashLongPanning(value));
    };
    // CRASH SHORT
    const handleVolumeChangeShort = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashShortVolume(value));
    };
    const handlePanningChangeShort = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashShortPanning(value));
    };
    // SPLASH
    const handleVolumeChangeSplash = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateSplashVolume(value));
    };
    const handlePanningChangeSplash = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateSplashPanning(value));
    };
    // RIDE
    const handleVolumeChangeRide = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateRideVolume(value));
    };
    const handlePanningChangeRide = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateRidePanning(value));
    };

    const convertToPercent = (value) => {
        return (value * 100).toFixed(0) + '%';
    }

    const handleIsMutedLong = () => {
        dispatch(updateCrashLongIsMuted(!crashLongIsMuted));
    };
    const handleIsMutedShort = () => {
        dispatch(updateCrashShortIsMuted(!crashShortIsMuted));
    }
    const handleIsMutedSplash = () => {
        dispatch(updateSplashIsMuted(!splashIsMuted));
    };
    const handleIsMutedRide = () => {
        dispatch(updateRideIsMuted(!rideIsMuted));
    }

    const triggerPlaySoundLong = () => {
        if (!crashLongIsMuted){
            playSound(crashLongAudio, crashLongVolume, crashLongPanning);
        }
    }
    const triggerPlaySoundShort = () => {
        if (!crashShortIsMuted){
            playSound(crashShortAudio, crashShortVolume, crashShortPanning);
        }
    }
    const triggerPlaySoundSplash = () => {
        if (!splashIsMuted){
            playSound(splashAudio, splashVolume, splashPanning);
        }
    }
    const triggerPlaySoundRide = () => {
        if (!rideIsMuted){
            playSound(rideAudio, rideVolume, ridePanning);
        }
    }

    return (
        <>
            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: crashLongIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">CRASH LONG</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={crashLongPanning}
                        onChange={handlePanningChangeLong}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{crashLongPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={crashLongVolume}
                        onChange={handleVolumeChangeLong}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(crashLongVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundLong}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${crashLongIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedLong}
                    >{crashLongIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>

            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: crashShortIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">CRASH SHORT</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={crashShortPanning}
                        onChange={handlePanningChangeShort}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{crashShortPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={crashShortVolume}
                        onChange={handleVolumeChangeShort}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(crashShortVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundShort}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${crashShortIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedShort}
                    >{crashShortIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>

            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: splashIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">SPLASH</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={splashPanning}
                        onChange={handlePanningChangeSplash}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{splashPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={splashVolume}
                        onChange={handleVolumeChangeSplash}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(splashVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundSplash}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${splashIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedSplash}
                    >{splashIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>

            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: rideIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">RIDE</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={ridePanning}
                        onChange={handlePanningChangeRide}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{ridePanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={rideVolume}
                        onChange={handleVolumeChangeRide}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(rideVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundRide}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${rideIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedRide}
                    >{rideIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>
        </>
    )
}

export default CymbalsMixer;