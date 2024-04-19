import "../styles/mixer_styles.css";
import KickMixer from "../components/mixer/kick_mixer";
import SnareMixer from "../components/mixer/snare_mixer";
import HihatsMixer from "../components/mixer/hihats_mixer";
import TomsMixer from "../components/mixer/toms_mixer";
import CymbalsMixer from "../components/mixer/cymbals_mixer";

const Mixer = () => {

    return (
        <section>
            <div className="mixer-wrap w-full flex justify-center items-center select-none">
                <div className="mixer-container w-3/4 rounded-lg p-4 bg-slate-900">
                    <div className="sub-mixer-wrap flex gap-4">
                        <KickMixer />
                        <SnareMixer />
                        <HihatsMixer />
                        <TomsMixer />
                        <CymbalsMixer/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mixer;