import React, { useEffect, useState } from "react";

const DarkMode = () => {
    const storageKey = 'theme-preference';
    const [theme, setTheme] = useState(getColorPreference());

    useEffect(() => {
        reflectPreference(); // Initial reflection based on stored or system theme

        // Event listener for theme toggle button
        const onClick = () => {
            // Toggle theme value
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem(storageKey, newTheme); // Store theme preference
            reflectPreference(); // Reflect changes in UI
        };

        // Event listener for system theme changes
        const systemThemeChange = ({ matches: isDark }) => {
            const newTheme = isDark ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem(storageKey, newTheme); // Store theme preference
            reflectPreference(); // Reflect changes in UI
        };

        // Add click event listener to theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', onClick);
        }

        // Add event listener for system theme change
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQueryList.addEventListener('change', systemThemeChange);

        // Cleanup function for removing event listeners
        return () => {
            if (themeToggle) {
                themeToggle.removeEventListener('click', onClick);
            }
            mediaQueryList.removeEventListener('change', systemThemeChange);
        };
    }, [theme]); // Effect depends on theme state

    // Function to get initial color preference
    const getColorPreference = () => {
        const storedTheme = localStorage.getItem(storageKey);
        return storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };

    // Function to reflect theme preference in UI
    const reflectPreference = () => {
        document.documentElement.setAttribute('data-theme', theme); // Update theme attribute
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', theme === 'dark' ? 'dark' : 'light'); // Update aria-label
        }
    };

    return (
        <button className="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label={theme} aria-live="polite">
            <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <mask className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="24" cy="10" r="6" fill="black" />
                </mask>
                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                <g className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
            </svg>
        </button>
    );
}

export default DarkMode;
