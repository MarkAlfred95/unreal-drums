import "../styles/mixer_styles.css";
import KickMixer from "../components/mixer/kick_mixer";
import SnareMixer from "../components/mixer/snare_mixer";
import HihatsMixer from "../components/mixer/hihats_mixer";
import TomsMixer from "../components/mixer/toms_mixer";
import CymbalsMixer from "../components/mixer/cymbals_mixer";

const Mixer = () => {

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
            <div className="mixer-wrap w-full flex justify-center items-center select-none">
                <div className="mixer-container w-3/4 rounded-lg p-4 bg-slate-900">
                    <div className="sub-mixer-wrap flex gap-4">
                        <KickMixer playSound={playSound}/>
                        <SnareMixer playSound={playSound}/>
                        <HihatsMixer playSound={playSound}/>
                        <TomsMixer playSound={playSound}/>
                        <CymbalsMixer playSound={playSound}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mixer;