import { useSelector, useDispatch } from "react-redux";
import { updateSnareVolume, updateSnarePanning, updateSnareIsMuted } from "../../redux/snareSlice";

const SnareMixer = ({ playSound }) => {

    const { snareAudio, snareVolume, snarePanning, snareIsMuted } = useSelector((state) => state.snare);
    const dispatch = useDispatch();

    const handleVolumeChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateSnareVolume(value));
    };

    const handlePanningChange = (event) => {
        const value = parseFloat(event.target.value);
        dispatch(updateSnarePanning(value));
    };

    const handleIsMuted = () => {
        dispatch(updateSnareIsMuted(!snareIsMuted));
    };

    const handlePreviewAudio = () => {
        if(!snareIsMuted){
            playSound(snareAudio, snareVolume, snarePanning);
        }
    }

    const convertToPercent = (value) => {
        return (value * 100).toFixed(0) + '%';
    }

    return (
        <div 
            className="h-96 w-24 p-2 rounded bg-slate-800"
            style={{ filter: snareIsMuted ? 'brightness(80%)' : 'brightness(100%)' }}
        >
            <p className="h-7 text-center text-white font-bold text-sm">SNARE</p>
            <div className="mt-2 panning-slider-container">
                <p className="text-white text-xs text-center">Pan</p>
                <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={snarePanning}
                    onChange={handlePanningChange}
                    className="panning-slider"
                />
                <p className="text-white text-xs text-center">{snarePanning}</p>
            </div>
            <div className="slider-wrap mt-4">
                <input 
                    type="range" 
                    className="slider rounded"
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={snareVolume} 
                    onChange={handleVolumeChange} 
                />
            </div>
            <p className="text-center text-white mt-2">{convertToPercent(snareVolume)}</p>
            <div className="grid p-2 place-content-center gap-2">
                <button 
                    className="text-xs font-bold w-20 h-6 bg-white grid place-content-center rounded"
                    onClick={handlePreviewAudio}
                >Preview</button>
                <button 
                    className={
                        `text-xs font-bold w-20 h-6 grid place-content-center rounded 
                        ${snareIsMuted ? 'bg-red-500' : 'bg-green-500'} transition-all`
                    }
                    onClick={handleIsMuted}
                >{snareIsMuted? "Unmute" : "Mute"}</button>
            </div>
        </div>
    )
}

export default SnareMixer;