import { useSelector, useDispatch } from "react-redux";
import { 
    updateTomHighVolume,
    updateTomHighPanning, 
    updateTomMidVolume,
    updateTomMidPanning,
    updateTomLowVolume,
    updateTomLowPanning, 
    updateFloorVolume,
    updateFloorPanning,
} from "../../redux/tomsSlice";

const TomsMixer = () => {

    const { 
        tomHighVolume, tomHighPanning, 
        tomMidVolume, tomMidPanning, 
        tomLowVolume, tomLowPanning,
        floorVolume, floorPanning
    } = useSelector((state) => state.toms);
    const dispatch = useDispatch();

    const handleVolumeChangeHigh = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomHighVolume(value));
    };

    const handlePanningChangeHigh = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomHighPanning(value));
    };

    const handleVolumeChangeMid = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomMidVolume(value));
    };

    const handlePanningChangeMid = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomMidPanning(value));
    };

    const handleVolumeChangeLow = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomLowVolume(value));
    };

    const handlePanningChangeLow = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateTomLowPanning(value));
    };

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

    return (
        <>
            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>

            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>

            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>

            <div className="h-96 w-24 p-2 rounded bg-slate-800">
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
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>
        </>
    )
}

export default TomsMixer;