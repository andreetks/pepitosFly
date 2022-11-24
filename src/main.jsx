import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-qbo8c8gpktmv7nok.us.auth0.com"
    clientId="y00wDHDDqdyPkxpC4DfAV3Iv81HvvTme"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
