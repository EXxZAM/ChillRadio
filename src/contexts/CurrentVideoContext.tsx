import React, { useContext, useState, useEffect } from "react";
import { Videos } from "../utils/VideosData";

const VideoContext = React.createContext({});
export const useCurrentVideo = () => {
    return useContext(VideoContext);
};

export const VideoProvider = ({ children }: any) => {
    const [url, setUrl] = useState<String>("def");
    const [isPlaying, setIsPlaying] = useState<Boolean>(true);
    const [volume, setVolume] = useState<Number>(1);

    const changeVideo = (id: string) => {
        setUrl(Videos.find((x: any) => x.id === id)?.url);
    };
    const playVideo = () => {
        setIsPlaying(true);
    };
    const changeVolume = (num: Number) => {
        setVolume(num);
    };
    const pauseVideo = () => {
        setIsPlaying(false);
    };

    return (
        <VideoContext.Provider
            value={{
                url,
                volume,
                isPlaying,
                changeVideo,
                playVideo,
                pauseVideo,
                changeVolume,
            }}
        >
            {children}
        </VideoContext.Provider>
    );
};
