import MediaPlayer from "./components/MediaPlayer";
import RadioList from "./components/RadioList";
import MediaInfo from "./components/MediaInfo";

function App() {
    return (
        <div className="container fill">
            <MediaPlayer />
            <div className="flex flex-co justify-between">
                <RadioList />
                <MediaInfo />
            </div>
        </div>
    );
}

export default App;
