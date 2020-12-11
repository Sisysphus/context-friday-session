import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./friday-session-components/App";

function Root() {
  return (
      <App />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
