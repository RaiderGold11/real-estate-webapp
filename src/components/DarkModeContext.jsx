import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    // Initialize state with localStorage or system preference (if no localStorage setting exists)
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage first
        if (localStorage.theme === 'dark') return true;
        if (localStorage.theme === 'light') return false;
        
        // Fall back to system preference if no localStorage setting
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Apply dark mode class and save preference
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark'; // Explicitly set dark mode
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light'; // Explicitly set light mode
        }
    }, [darkMode]);

    // Toggle function (overrides system preference)
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode); // Toggle state
    };

    // Listen for system preference changes (optional)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Only update if user hasn't set a preference
            if (!('theme' in localStorage)) {
                setDarkMode(e.matches);
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export { DarkModeProvider, useDarkMode };