import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext({
    checked: false,
    setChecked: () => {},
});

export const ToggleProvider = ({ children }) => {
    const [checked, setChecked] = useState(false);

    return (
        <ToggleContext.Provider value={{ checked, setChecked }}>
            {children}
        </ToggleContext.Provider>
    );
};

export const useToggle = () => useContext(ToggleContext);
