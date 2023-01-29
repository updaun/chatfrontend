import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {StoreProvider} from "./stateManagement/store";
import SocketService from "./socketService";
import Router from "./router";
import "./style.scss";

ReactDOM.render(
    <StoreProvider>
        <Router />
        <SocketService />
    </StoreProvider>,
    document.getElementById("root")
);
