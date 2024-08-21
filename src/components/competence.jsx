import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function Competence() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const competenceData = [
        { src: "../images/comp/svg/ReactJs.svg", alt: "reactJs", tooltip: "reactJs", description: "A JavaScript library for building user interfaces" },
        { src: "../images/comp/svg/Vue.js.svg", alt: "vue.js", tooltip: "vue.js", description: "Un framework progressif pour créer des interfaces utilisateur" },
        { src: "../images/comp/svg/Alpine.svg", alt: "Alpine", tooltip: "Alpine", description: "Un framework minimaliste pour ajouter du comportement JavaScript à votre HTML" },
        { src: "../images/comp/svg/Hyva.svg", alt: "Hyva", tooltip: "Hyva", description: "Un framework frontend moderne pour Magento 2" },
        { src: "../images/comp/svg/HTML.svg", alt: "HTML", tooltip: "HTML", description: "Le langage de balisage standard pour créer des pages web" },
        { src: "../images/comp/svg/CSS.svg", alt: "CSS", tooltip: "CSS", description: "Un langage de feuille de style utilisé pour décrire la présentation d'un document" },
        { src: "../images/comp/svg/Javascript.svg", alt: "Javascript", tooltip: "Javascript", description: "JavaScript permet de créer des interactions dynamiques sur les pages web" },
        { src: "../images/comp/svg/SCSS.svg", alt: "SASS", tooltip: "SASS", description: "Un langage de script préprocesseur interprété ou compilé en CSS" },
        { src: "../images/comp/svg/LESS.svg", alt: "LESS", tooltip: "LESS", description: "Une extension de langage compatible avec CSS" },
        { src: "../images/comp/svg/Tailwind.svg", alt: "Tailwind", tooltip: "Tailwind", description: "Un framework CSS axé sur les utilitaires pour créer rapidement des designs personnalisés" },
        { src: "../images/comp/svg/Backbone.svg", alt: "Backbone", tooltip: "Backbone", description: "Une bibliothèque JavaScript avec une interface JSON RESTful, basée sur le MVC" },
        { src: "../images/comp/svg/Jquery.svg", alt: "Jquery", tooltip: "Jquery", description: "Une bibliothèque JavaScript rapide, légère et riche en fonctionnalités" }
    ];

    const competenceSecondData = [
        { src: "/images/comp/svg/PHP.svg", alt: "PHP", tooltip: "PHP", description: "Un langage de script populaire, idéal pour le développement Back-end" },
        { src: "/images/comp/svg/GIT.svg", alt: "GIT", tooltip: "GIT", description: "Git est un système de versionnage qui suit les modifications du code et facilite la collaboration" },
        { src: "/images/comp/svg/Symfony.svg", alt: "Symfony", tooltip: "Symfony", description: "Un framework PHP pour les applications web et un ensemble de composants PHP réutilisables" },
        { src: "/images/comp/svg/Mysql.svg", alt: "Mysql", tooltip: "Mysql", description: "Un système de gestion de base de données relationnelle open-source" },
        { src: "/images/comp/svg/Magento.svg", alt: "Magento 2", tooltip: "Magento 2", description: "Une plateforme e-commerce open-source écrite en PHP" },
        { src: "/images/comp/svg/Shopify.svg", alt: "Shopify", tooltip: "Shopify", description: "Un logiciel d'abonnement pour créer des boutiques en ligne et vendre des produits" },
        { src: "/images/comp/svg/Wordpress.svg", alt: "Wordpress", tooltip: "Wordpress", description: "Un CMS gratuit et open-source écrit en PHP avec une base de données MySQL ou MariaDB" },
        { src: "/images/comp/svg/Apache.svg", alt: "Apache", tooltip: "Apache", description: "Un serveur web cross-platform gratuit et open-source" },
        { src: "/images/comp/svg/Photoshop.svg", alt: "Photoshop", tooltip: "Photoshop", description: "Un éditeur de graphiques matriciels d'Adobe Inc" },
        { src: "/images/comp/svg/Illustrator.svg", alt: "Illustrator", tooltip: "Illustrator", description: "Un éditeur de graphiques vectoriels et outil de design d'Adobe Inc" },
        { src: "/images/comp/svg/Figma.svg", alt: "Figma", tooltip: "Figma", description: "Un éditeur de graphiques vectoriels et un outil de prototypage basé sur le web" },
        { src: "/images/comp/svg/After Effect.svg", alt: "After effect", tooltip: "After Effect", description: "Une application d'effets visuels numériques, de graphiques animés et de compositing" }
    ];

    return (
        <div className="competence-section">
            <div className="section-content">
                <div className="competence-container">
                    <Marquee pauseOnHover={true} direction="right">
                        {competenceData.map((item, index) => (
                            <div
                                key={index}
                                className={`competence-title ${hoveredIndex === index ? '' : 'fade-out'}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img loading="lazy" height="30" width="30" src={item.src} alt={item.alt} />
                                <span className="tooltip">{item.tooltip} <span>{item.description}</span></span>
                            </div>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover={true} direction="left">
                        {competenceSecondData.map((item, index) => (
                            <div
                                key={index}
                                className={`competence-title ${hoveredIndex === index ? '' : 'fade-out'}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img loading="lazy" height="30" width="30" src={item.src} alt={item.alt} />
                                <span className="tooltip">{item.tooltip} <span>{item.description}</span></span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
