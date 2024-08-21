import React from "react";
import useCustomDarkMode from '../hook/useCustomDarkMode';
import { useToggle } from '../context/ToggleContext';

const Header = () => {
    const { isDarkMode, toggleDarkMode } = useCustomDarkMode();
    const { setChecked } = useToggle();

    const handleGraphismeClick = () => {
        const checkbox = document.getElementById('toggle-box__check');
        if (checkbox) {
            checkbox.checked = true;
            setChecked(true);
        }
    };
    
    const handleDevelopClick = () => {
        const checkbox = document.getElementById('toggle-box__check');
        if (checkbox) {
            checkbox.checked = false;
            setChecked(false);
        }
    };

    return (
        <header>
            <div className="header_text">
                <div className="header_logo__container">
                    <a href="/" className="header_logo">
                        Thibault Livran
                        <br />
                        Développeur Full Stack
                    </a>
                </div>
                <div className="header_nav">
                    <div>
                        <label className="switch">
                            <input 
                                className="switch__input" 
                                type="checkbox" 
                                role="switch" 
                                checked={isDarkMode} 
                                onChange={toggleDarkMode}
                            />
                            <svg className="switch__icon switch__icon--light" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
                                <g fill="none" stroke="#7c70ff" strokeWidth="1" strokeLinecap="round">
                                    <circle cx="6" cy="6" r="2" />
                                    <g strokeDasharray="1.5 1.5">
                                        <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
                                        <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
                                        <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
                                        <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
                                        <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
                                        <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
                                        <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
                                        <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
                                    </g>
                                </g>
                            </svg>
                            <svg className="switch__icon switch__icon--dark" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
                                <g fill="none" stroke="#fff" strokeWidth="1" strokeLinejoin="round" transform="rotate(-45,6,6)">
                                    <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"/>
                                </g>	
                            </svg>
                            <span className="switch__sr">Dark Mode</span>
                        </label>
                    </div>
                    <div className="nav_desktop hover_italic">
                        <a href="#develop" onClick={handleDevelopClick}>Développement</a>
                        <a href="#graphisme" onClick={handleGraphismeClick}>Graphisme</a>
                        <a href="#about">A propos</a>
                    </div>
                </div>
            </div>
            <div className="header_bouton">
                <label htmlFor="menu_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
        </header>
    );
}

export default Header;
