import { useSelector, useDispatch } from "react-redux";
import { 
    updateTomHighVolume, updateTomHighPanning, 
    updateTomMidVolume, updateTomMidPanning,
    updateTomLowVolume, updateTomLowPanning, 
    updateFloorVolume, updateFloorPanning,
    updateTomHighIsMuted,
    updateTomMidIsMuted,
    updateTomLowIsMuted,
    updateFloorIsMuted,
} from "../../redux/tomsSlice";

const TomsMixer = ({ playSound }) => {

    const { 
        tomHighVolume, tomHighPanning, tomHighAudio, tomHighIsMuted,
        tomMidVolume, tomMidPanning, tomMidAudio, tomMidIsMuted,
        tomLowVolume, tomLowPanning, tomLowAudio, tomLowIsMuted,
        floorVolume, floorPanning, floorAudio, floorIsMuted
    } = useSelector((state) => state.toms);
    const dispatch = useDispatch();

    // TOM HIGH
    const handleVolumeChangeHigh = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomHighVolume(value));
    };
    const handlePanningChangeHigh = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomHighPanning(value));
    };
    // TOM MID
    const handleVolumeChangeMid = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomMidVolume(value));
    };
    const handlePanningChangeMid = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomMidPanning(value));
    };
    // TOM LOW
    const handleVolumeChangeLow = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomLowVolume(value));
    };
    const handlePanningChangeLow = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomLowPanning(value));
    };
    // FLOOR
    const handleVolumeChangeFloor = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateFloorVolume(value));
    };
    const handlePanningChangeFloor = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateFloorPanning(value));
    };

    const convertToPercent = (value) => {
        return (value * 100).toFixed(0) + '%';
    }

    const handleIsMutedLow = () => {
        dispatch(updateTomLowIsMuted(!tomLowIsMuted));
    };
    const handleIsMutedMid = () => {
        dispatch(updateTomMidIsMuted(!tomMidIsMuted));
    }
    const handleIsMutedHigh = () => {
        dispatch(updateTomHighIsMuted(!tomHighIsMuted));
    };
    const handleIsMutedFloor = () => {
        dispatch(updateFloorIsMuted(!floorIsMuted));
    }

    const triggerPlaySoundHigh = () => {
        if (!tomHighIsMuted){
            playSound(tomHighAudio, tomHighVolume, tomHighPanning);
        }
    }
    const triggerPlaySoundMid = () => {
        if (!tomMidIsMuted){
            playSound(tomMidAudio, tomMidVolume, tomMidPanning);
        }
    }
    const triggerPlaySoundLow = () => {
        if (!tomLowIsMuted){
            playSound(tomLowAudio, tomLowVolume, tomLowPanning);
        }
    }
    const triggerPlaySoundFloor = () => {
        if (!floorIsMuted){
            playSound(floorAudio, floorVolume, floorPanning);
        }
    }

    return (
        <>
            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: tomHighIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">TOM HIGH</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={tomHighPanning}
                        onChange={handlePanningChangeHigh}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{tomHighPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={tomHighVolume}
                        onChange={handleVolumeChangeHigh}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(tomHighVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundHigh}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${tomHighIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedHigh}
                    >{tomHighIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>

            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: tomMidIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">TOM MID</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={tomMidPanning}
                        onChange={handlePanningChangeMid}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{tomMidPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={tomMidVolume}
                        onChange={handleVolumeChangeMid}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(tomMidVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundMid}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${tomMidIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedMid}
                    >{tomMidIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>

            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: tomLowIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">TOM LOW</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={tomLowPanning}
                        onChange={handlePanningChangeLow}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{tomLowPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={tomLowVolume}
                        onChange={handleVolumeChangeLow}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(tomLowVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundLow}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${tomLowIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedLow}
                    >{tomLowIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>

            <div 
                className="h-96 w-24 p-2 rounded bg-slate-800"
                style={{ filter: floorIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
            >
                <p className="h-7 text-center text-white font-bold text-sm leading-none">FLOOR</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={floorPanning}
                        onChange={handlePanningChangeFloor}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{floorPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={floorVolume}
                        onChange={handleVolumeChangeFloor}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(floorVolume)}</p>
                <div className="grid p-2 place-content-center gap-2">
                    <button 
                        className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                        onClick={triggerPlaySoundFloor}
                    >Preview</button>
                    <button 
                        className={
                            `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                            ${floorIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                        }
                        onClick={handleIsMutedFloor}
                    >{floorIsMuted? "Unmute" : "Mute"}</button>
                </div>
            </div>
        </>
    )
}

export default TomsMixer;