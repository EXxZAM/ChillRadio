import { useState, useRef } from "react";
import { useCurrentVideo } from "../contexts/CurrentVideoContext";
import ReactPlayer from "react-player";

const MediaPlayer = () => {
    const { url, isPlaying, volume }: any = useCurrentVideo();
    const [loaded, setIsLoaded] = useState(false);

    return (
        <>
            {loaded === false && url !== "def" && (
                <div className="loading">
                    <div className="loader">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
            )}

            <div className="iframe-control">
                {url !== "def" && (
                    <ReactPlayer
                        id="youtube-player"
                        playing={isPlaying}
                        url={`https://www.youtube.com/embed/${url}?controls=0&amp;modestbranding=1&amp;disablekb=1&amp;iv_load_policy=3&amp;playsinline=1&amp;origin=https%3A%2F%2Flofimusic.app&amp;autoplay=1&amp;enablejsapi=1&amp;widgetid=1`}
                        onBuffer={() => {
                            setIsLoaded(false);
                        }}
                        onBufferEnd={() => {
                            setIsLoaded(true);
                        }}
                        volume={volume}
                    />
                )}
            </div>
        </>
    );
};

export default MediaPlayer;
