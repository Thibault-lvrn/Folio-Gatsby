import React, { useEffect, useRef, useState } from "react";
import projectData from '../data/projectData';
import { useToggle } from '../context/ToggleContext';
import ScrollAnimation from 'react-animate-on-scroll';

const CollapsibleSection = ({ title, categorie, technologies, children, isOpen, onClick, index }) => {
    const contentRef = useRef(null);

    return (
        <div className={`collapsible-list ${title}`}>
            <div className={`collapsible ${isOpen ? 'active' : ''}`} onClick={onClick}>
                <div className="collapsible-title">
                    <span className="compteur">{String(index).padStart(2, '0')}</span>
                    <span className="title">{title}</span>
                </div>
                <div className="collapsible-btn-container">
                    {technologies.map(techno => (
                        <div className="comp-container" key={techno}>
                            <img loading="lazy" height="30" width="30" src={`./assets/images/comp/${techno}.png`} alt={techno} />
                            <span className="tooltip">{techno}</span>
                        </div>
                    ))}
                    <button className="collapsible-btn">{categorie}</button>
                </div>
                <span className="background-title">{title}</span>
            </div>
            <div ref={contentRef} className={`collapsible-content ${isOpen ? 'open' : ''}`}>{children}</div>
            <h2 className={`full-title ${isOpen ? 'active' : ''}`}>{title}</h2>
        </div>
    );
};

const SimpleSlider = () => {
    const { checked, setChecked } = useToggle();
    const [openSection, setOpenSection] = useState(null);
    const [categorie, setCategorie] = useState("graphisme");
    const [otherCategorie, setOtherCategorie] = useState("develop");
    const [allCollapsiblesClosed, setAllCollapsiblesClosed] = useState(false);

    const toggleCategorie = () => {
        setCategorie(categorie === "develop" ? "graphisme" : "develop");
        setOtherCategorie(otherCategorie === "develop" ? "graphisme" : "develop");
        setOpenSection(null);
        setAllCollapsiblesClosed(true);
    };

    const handleClick = (index) => {
        const isOpen = openSection === index;

        if (isOpen) {
            document.body.classList.remove('collapsible-open');
        } else {
            document.body.classList.add('collapsible-open');
        }

        if (allCollapsiblesClosed) {
            setAllCollapsiblesClosed(false);
        }
        setOpenSection(isOpen ? null : index);
    };

    useEffect(() => {
        toggleCategorie();
    }, [checked]);

    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        if (sliderRef.current) {
            // Logic to navigate to a specific slide can be added here if needed
        }
    };

    return (
        <div className="project-section">
            <ScrollAnimation animateIn='fadeIn'>
                <h2 className="part-title hidden">Mes Projects<span className="violet-text">.</span></h2>
            </ScrollAnimation>
            <div id="graphisme"></div>
            <div className="toggle-box hidden" id="develop">
                <input 
                    type="checkbox" 
                    name="billing_toggle" 
                    id="toggle-box__check" 
                    onChange={() => setChecked(!checked)} 
                />
                <label htmlFor="toggle-box__check" className="btn-bill-change-inner">
                    <span className="btn-bill-change-inner__on">{otherCategorie}</span>
                    <span className="btn-bill-change-inner__off">{categorie}</span>
                </label>
            </div>

            <div className="carousel-container hidden">
                <div className="carousel-content">
                    {projectData[categorie].map((project, index) => (
                        <div key={index} className={`img-container ${openSection === index ? 'active' : ''}`}>
                            <img loading="lazy" className="img_liste" src={project.images[0].src} alt="test" />
                        </div>
                    ))}
                </div>
                <div className="collapsible-container hidden">
                    {projectData[categorie].map((project, index) => (
                        <CollapsibleSection
                            key={index}
                            title={project.title}
                            categorie={project.categorie}
                            isOpen={openSection === index}
                            technologies={project.technologies}
                            onClick={() => handleClick(index)}
                            index={index + 1}
                        >
                            <div className="collapsible-elements">
                                <button onClick={() => handleClick(index)}>X</button>
                                {project.content.map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                        </CollapsibleSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimpleSlider;
