import React from "react";
import { Videos } from "../utils/VideosData";
import { useCurrentVideo } from "../contexts/CurrentVideoContext";
const RadioList = () => {
    interface VideoType {
        url: string;
        id: string;
        name: string;
    }
    const { url, changeVideo, playVideo }: any = useCurrentVideo();

    return (
        <>
            <div className="relative h-[100vh] w-auto text-white font-poppins p-10 text-justify flex flex-col gap-10 z-20">
                <h1 className="text-[50px] text-opacity-60 p-[10px]">
                    🍧ChillRadio
                </h1>

                <ul className="flex h-full flex-col gap-4  pr-2 border-r-2 border-opacity-30 border-r-slate-50">
                    {Videos.map((video: VideoType) => {
                        if (url == video.url && video.id != "0") {
                            return (
                                <li
                                    className="flex  cursor-pointer font-bold text-[20px]"
                                    onClick={() => {
                                        changeVideo(video.id);
                                        playVideo(true);
                                    }}
                                    key={video.id}
                                >
                                    <svg
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8,5.14V19.14L19,12.14L8,5.14Z"
                                        ></path>
                                    </svg>
                                    {video.name}
                                </li>
                            );
                        }
                        if (video.id != "0")
                            return (
                                <li
                                    className="flex text-[15px] cursor-pointer hover:font-bold "
                                    onClick={() => {
                                        changeVideo(video.id);
                                        playVideo(true);
                                    }}
                                    key={video.id}
                                >
                                    <svg
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                        }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8,5.14V19.14L19,12.14L8,5.14Z"
                                        ></path>
                                    </svg>
                                    {video.name}
                                </li>
                            );
                    })}
                </ul>
                <h3>
                    made by{" "}
                    <a href="https://github.com/exxzam" className=" mb-[10px]">
                        Mahdi Olamaei
                    </a>
                </h3>
            </div>
        </>
    );
};

export default RadioList;
