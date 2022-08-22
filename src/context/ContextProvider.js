import { useState, useEffect } from "react";
import Context from "./Context";

export default function ContextProvider({children}) {
    const [checked, setChecked] = useState([]);
    const [user, setUser] = useState({})

    const context = {
        checked,
        setChecked,
        user,
        setUser
    }

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}