import {createContext, useState} from "react";

// Create the context
const AppContext = createContext()

// Create the provider
export const AppProvider = ({ children }) => {
    const [state, setState] = useState({ registered: false, authenticated: false });

    const updateAppState = (key, value) => {
        setState(...state, { [key]: value });
    }

    return (
        <AppContext.Provider value = {{ state, updateAppState }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext