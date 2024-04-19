import { useSelector, useDispatch } from "react-redux";
import { updateKickVolume } from "../../redux/kickSlice";
import { updateKickPanning } from "../../redux/kickSlice";

const KickMixer = () => {

    const { kickVolume, kickPanning } = useSelector((state) => state.kick);
    const dispatch = useDispatch();

    const handleVolumeChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateKickVolume(value));
    };

    const handlePanningChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateKickPanning(value));
    };

    const convertToPercent = (value) => {
        return (value * 100).toFixed(0) + '%';
    }

    return (
        <div className="h-96 w-24 p-2 rounded bg-slate-800">
            <p className="h-7 text-center text-white font-bold text-sm">KICK</p>
            <div className="mt-2 panning-slider-container">
                <p className="text-white text-xs text-center">Pan</p>
                <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={kickPanning}
                    onChange={handlePanningChange}
                    className="panning-slider"
                />
                <p className="text-white text-xs text-center">{kickPanning}</p>
            </div>
            <div className="slider-wrap mt-4">
                <input 
                    type="range" 
                    className="slider rounded"
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={kickVolume} 
                    onChange={handleVolumeChange} 
                />
            </div>
            <p className="text-center text-white mt-2">{convertToPercent(kickVolume)}</p>
            <div className="flex p-2 justify-between">
                <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">P</button>
                <button className="text-xs font-bold w-6 h-6 bg-white grid place-content-center rounded">M</button>
            </div>
        </div>
    )
}

export default KickMixer;