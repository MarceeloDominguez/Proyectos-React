import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TweetContext from "./context/TweetContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TweetContext>
      <App />
    </TweetContext>
  </React.StrictMode>
);
