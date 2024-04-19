import "../styles/drum_styles.css";

// Drum Components
import Kick from "../components/drums/kick";
import Snare from "../components/drums/snare";
import Floor from "../components/drums/floor";
import Toms from "../components/drums/toms";
import HiHats from "../components/drums/hihats";
import Cymbals from "../components/drums/cymbals";


const Drums = () => {
    let audioContext = null;
    let panNode = null;

    const initAudioContext = () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            panNode = audioContext.createStereoPanner();
            panNode.connect(audioContext.destination);
        }
    };

    const playSound = (sound, volume, panning) => {
        initAudioContext();

        const audio = new Audio(sound);
        const source = audioContext.createMediaElementSource(audio);

        // set volume (0 to 1)
        audio.volume = volume;
        // Set pan (left: -1 to right: 1)
        panNode.pan.value = panning;
        source.connect(panNode);
        audio.play();
    };

    return (
        <section>
            <div className="drums-wrap flex w-full justify-center">
                <div className="drums-container flex w-full justify-center relative">
                    <Kick playSound={playSound}/>
                    <Snare playSound={playSound}/>
                    <HiHats playSound={playSound}/>
                    <Toms playSound={playSound}/>
                    <Floor playSound={playSound}/>
                    <Cymbals playSound={playSound}/>
                </div>
            </div>
        </section>
    )
}

export default Drums;