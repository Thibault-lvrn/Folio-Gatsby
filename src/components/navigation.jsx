import React from "react";

const Navigation = () => {
    return (
        <>
            <input id="menu_btn" type="checkbox"/>
            <div className="menu">
                <ul className="liste_menu principale">
                    <a href="#develop">
                        <li className="li_com hover_italic">
                            <span>Développement</span>
                        </li>
                    </a>
                    <a href="#graphisme">
                        <li className="li_ex hover_italic">
                            <span>Graphisme</span>
                        </li>
                    </a>
                    <a href="#about">
                        <li className="li_ex hover_italic">
                            <span>À propos</span>
                        </li>
                    </a>
                </ul>
            </div>
        </>
    );
}

export default Navigation;
