// eslint-disable-next-line react-refresh/only-export-components
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('theme-default');

    useEffect(() => {
        // Remove all theme classes
        document.documentElement.classList.remove('theme-sunset', 'theme-minimal', 'theme-neon');

        // Add new theme class if not default
        if (currentTheme !== 'theme-default') {
            document.documentElement.classList.add(currentTheme);
        }
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
