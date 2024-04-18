import "../styles/drum_styles.css";

// Drum Components
import Kick from "../components/drums/kick";
import Snare from "../components/drums/snare";
import Floor from "../components/drums/floor";
import Toms from "../components/drums/toms";
import HiHats from "../components/drums/hihats";
import Cymbals from "../components/drums/cymbals";

const Drums = () => {
    return (
        <section>
            <div className="drums-wrap flex w-full justify-center">
                <div className="drums-container flex w-full justify-center relative">
                    <Kick />
                    <Snare />
                    <Floor />
                    <Toms />
                    <HiHats />
                    <Cymbals />
                </div>
            </div>
        </section>
    )
}

export default Drums;