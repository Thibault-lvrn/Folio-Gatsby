import { useEffect, useState } from 'react';

function useCustomDarkMode() {
    // Initialisation de l'état basé sur la valeur dans localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('theme');
        // Si la clé 'theme' existe, utilise sa valeur, sinon, utilise le mode clair par défaut
        return savedMode ? savedMode === 'dark' : false;
    });

    // Ajoute ou retire les classes en fonction de l'état
    useEffect(() => {
        const bodyClass = document.body.classList;
        if (isDarkMode) {
            bodyClass.add('dark-mode');
            bodyClass.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            bodyClass.add('light-mode');
            bodyClass.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Fonction pour basculer le mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return { isDarkMode, toggleDarkMode };
}

export default useCustomDarkMode;
