import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VideoProvider } from "./contexts/CurrentVideoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <VideoProvider>
            <App />
        </VideoProvider>
    </React.StrictMode>
);
