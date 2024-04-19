import { useSelector, useDispatch } from "react-redux";
import { 
    updateHihatsOpenVolume, updateHihatsOpenPanning, 
    updateHihatsCloseVolume, updateHihatsClosePanning  
} from "../../redux/hihatsSlice";

const HihatsMixer = () => {

    const { hihatsOpenVolume, hihatsOpenPanning, hihatsCloseVolume, hihatsClosePanning } = useSelector((state) => state.hihats);
    const dispatch = useDispatch();

    const handleVolumeChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateHihatsOpenVolume(value));
    };

    const handlePanningChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateHihatsOpenPanning(value));
    };

    const handleVolumeChangeClose = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateHihatsCloseVolume(value));
    };

    const handlePanningChangeClose = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateHihatsClosePanning(value));
    };

    const convertToPercent = (value) => {
        return (value * 100).toFixed(0) + '%';
    }

    return (
        <>
            <div className="h-96 w-24 p-2 rounded bg-slate-800">
                <p className="h-7 text-center text-white font-bold text-sm leading-none">OPEN HIHATS</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={hihatsOpenPanning}
                        onChange={handlePanningChange}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{hihatsOpenPanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={hihatsOpenVolume}
                        onChange={handleVolumeChange}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(hihatsOpenVolume)}</p>
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>
            <div className="h-96 w-24 p-2 rounded bg-slate-800">
                <p className="h-7 text-center text-white font-bold text-sm leading-none">CLOSED HIHATS</p>
                <div className="mt-2 panning-slider-container">
                    <p className="text-white text-xs text-center">Pan</p>
                    <input
                        type="range"
                        min="-1"
                        max="1"
                        step="0.01"
                        value={hihatsClosePanning}
                        onChange={handlePanningChangeClose}
                        className="panning-slider"
                    />
                    <p className="text-white text-xs text-center">{hihatsClosePanning}</p>
                </div>
                <div className="slider-wrap mt-4">
                    <input
                        type="range"
                        className="slider rounded"
                        min="0"
                        max="1"
                        step="0.01"
                        value={hihatsCloseVolume}
                        onChange={handleVolumeChangeClose}
                    />
                </div>
                <p className="text-center text-white mt-2">{convertToPercent(hihatsCloseVolume)}</p>
                <div className="flex p-2 justify-between">
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                    <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
                </div>
            </div>
        </>
    )
}

export default HihatsMixer;