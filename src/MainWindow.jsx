import React, {useContext, useEffect, useState} from "react";
import AppContext from "./context/AppContext.jsx";
import Register from "./component/Register.jsx";
import Authenticate from "./component/Authenticate.jsx";
import Board from "./component/Board.jsx";

function MainWindow() {
    const {state, updateAppState} = useContext(AppContext);

    async function fetchRegistration() {
        const URL = "https://theboard.net/registered";
        try {
            const response = await fetch(URL)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log("Registration error", error);
        }
    }

    return (
        <div>

        </div>
    )
}

export default MainWindow