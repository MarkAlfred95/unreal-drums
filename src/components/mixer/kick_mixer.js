import { useSelector, useDispatch } from "react-redux";
import { updateKickVolume, updateKickPanning, updateKickIsMuted } from "../../redux/kickSlice";

const KickMixer = ({ playSound }) => {

    const { kickAudio, kickVolume, kickPanning, kickIsMuted } = useSelector((state) => state.kick);
    const dispatch = useDispatch();

    const handleVolumeChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateKickVolume(value));
    };

    const handlePanningChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateKickPanning(value));
    };

    const handleIsMuted = () => {
        dispatch(updateKickIsMuted(!kickIsMuted));
    };

    const handlePreviewAudio = () => {
        if(!kickIsMuted){
            playSound(kickAudio, kickVolume, kickPanning);
        }
    }

    const convertToPercent = (value) => {
        return (value * 100).toFixed(0) + '%';
    }

    return (
        <div 
            className="h-96 w-24 p-2 rounded bg-slate-800 transition-all"
            style={{ filter: kickIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
        >
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
            <div className="grid p-2 place-content-center gap-2">
                <button 
                    className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                    onClick={handlePreviewAudio}
                >Preview</button>
                <button 
                    className={
                        `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                        ${kickIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                    }
                    onClick={handleIsMuted}
                >{kickIsMuted? "Unmute" : "Mute"}</button>
            </div>
        </div>
    )
}

export default KickMixer;