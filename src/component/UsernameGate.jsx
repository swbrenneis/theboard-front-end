import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"

function UsernameGate() {
    const [screenName, setScreenName] = useState("");
    const navigate = useNavigate();
    const { updateAppState } = useContext(UsernameGate);

    async function checkRegistration(screenName) {
        const url = `https://theboard.net/registered/${screenName}`
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data;
        } else {
            console.log("Registration error: ", response.status);
            return { registered: false };
        }
    }

    function handleSubmit() {
        updateAppState("username", screenName);
        const data = checkRegistration(screenName);
        if (data.registered) {
            navigate("/authenticate");
        } else {
            navigate("/register");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>The Board</h1>
                <input
                    type="text"
                    placeholder="Enter screen name"
                    value={screenName}
                    onChange={(e) => setScreenName(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default UsernameGate;