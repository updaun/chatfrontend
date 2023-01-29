import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {StoreProvider} from "./stateManagement/store";
import SocketService from "./socketService";

ReactDOM.render(
    <StoreProvider>
        <App />
        <SocketService />
    </StoreProvider>,
    document.getElementById("root")
);
