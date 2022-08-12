import { useState } from "react";
import Context from "./Context";

export default function ContextProvider({children}) {
    const [checked, setChecked] = useState([]);

    const context = {
        checked,
        setChecked
    }

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}