import { useSelector, useDispatch } from "react-redux";
import { 
    updateCrashLongVolume, updateCrashLongPanning, 
    updateCrashShortVolume, updateCrashShortPanning,
    updateSplashVolume, updateSplashPanning,
    updateRideVolume, updateRidePanning,
} from "../../redux/cymbalsSlice";

const CymbalsMixer = () => {

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
    const dispatch = useDispatch();

    const handleVolumeChangeLong = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashLongVolume(value));
    };

    const handlePanningChangeLong = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashLongPanning(value));
    };

    const handleVolumeChangeShort = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashShortVolume(value));
    };

    const handlePanningChangeShort = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateCrashShortPanning(value));
    };

    const handleVolumeChangeSplash = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateSplashVolume(value));
    };

    const handlePanningChangeSplash = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateSplashPanning(value));
    };

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

    return (
        <>
            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>

            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>

            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>

            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>
        </>
    )
}

export default CymbalsMixer;