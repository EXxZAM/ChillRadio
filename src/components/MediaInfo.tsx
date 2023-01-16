import { useEffect } from "react";
import { Videos } from "../utils/VideosData";
import { useCurrentVideo } from "../contexts/CurrentVideoContext";

const RadioList = () => {
    const {
        url,
        playVideo,
        pauseVideo,
        volume,
        changeVolume,
        isPlaying,
        changeVideo,
    }: any = useCurrentVideo();

    useEffect(() => {
        url === "def" && pauseVideo();
    }, [url]);
    interface VideoType {
        url: string;
        id: string;
        name: string;
    }

    return (
        <>
            <div className="relative w-auto  text-white font-poppins p-10 pb-0 mb-10 text-justify flex flex-col justify-end gap-5">
                <h1 className="text-[50px] self-end   border-b-2 tracking-[20px]  shadow-lg ">
                    {Videos.find((x: VideoType) => x.url === url)?.name}
                </h1>
                <div className="flex items-center self-center gap-10 p-5">
                    <button
                        onClick={() => {
                            if (url !== "def") {
                                isPlaying ? pauseVideo() : playVideo();
                            } else {
                                changeVideo(
                                    Math.floor(
                                        Math.random() * (Videos.length - 1) + 1
                                    ).toString()
                                );
                                playVideo(true);
                            }
                        }}
                    >
                        <div className={`arrow-${isPlaying}`}></div>
                    </button>
                    <div className="range">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) => {
                                changeVolume(e.target.valueAsNumber);
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RadioList;
