import React, { useEffect, useRef, useState } from "react";
import projectData from '../data/projectData';
import { useToggle } from '../context/ToggleContext';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import ReactModal from "../components/modal";
import HighlightText from '../components/HighlightText';

const CollapsibleSection = ({ title, categorie, technologies, children, isOpen, onClick, index }) => {
    const contentRef = useRef(null);

    return (
        <>
            <div className={`collapsible-list ${title}`}>
                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <div className={`collapsible ${isOpen ? 'active' : ''}`} onClick={onClick}>
                        <div className="collapsible-title">
                            <span className="compteur">{String(index).padStart(2, '0')}</span>
                            <span className="title">{title}</span>
                        </div>
                        <div className="collapsible-btn-container">
                            {technologies.map(techno => (
                                <div className="comp-container" key={techno}>
                                    <div className="comp-img"><img loading="lazy" height="30" width="30" src={`./images/comp/svg/${techno}.svg`} alt={techno} /></div>
                                    <span className="tooltip">{techno}</span>
                                </div>
                            ))}
                            <button className="collapsible-btn">{categorie}</button>
                        </div>
                        <span className="background-title">{title}</span>
                    </div>
                    <div ref={contentRef} className={`collapsible-content ${isOpen ? 'open' : ''}`}>{children}</div>
                </ScrollAnimation>
            </div>
            <h2 className={`full-title ${isOpen ? 'active' : ''}`}>{title}</h2>
        </>
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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1160) {
                setOpenSection(null);
                setAllCollapsiblesClosed(true);
            } else {
                setAllCollapsiblesClosed(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        if (sliderRef.current) {
        }
    };

    // Array to manage the open state of each modal
    const [modalIsOpen, setModalIsOpen] = useState(Array(projectData[categorie].length).fill(false));

    const openModal = (index) => {
        const newModalState = [...modalIsOpen];
        newModalState[index] = true;
        setModalIsOpen(newModalState);
    };

    const closeModal = (index) => {
        const newModalState = [...modalIsOpen];
        newModalState[index] = false;
        setModalIsOpen(newModalState);
    };

    return (
        <div className="project-section">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
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
                        <React.Fragment>
                            <div key={index} onClick={() => openModal(index)} className="collapsible-button">
                                <CollapsibleSection
                                    title={project.title}
                                    categorie={project.categorie}
                                    isOpen={openSection === index}
                                    technologies={project.technologies}
                                    onClick={() => handleClick(index)}
                                    index={index + 1}
                                >
                                    <div className="collapsible-elements">
                                        {/* {project.content.map((paragraph, pIndex) => (
                                            <p key={pIndex}>{paragraph}</p>
                                        ))} */}
                                        <HighlightText content={project.content} />
                                    </div>
                                </CollapsibleSection>
                            </div>
                            {/* {console.log('content', JSON.stringify(project.content))} */}
                            <ReactModal 
                                title={project.title}
                                categorie={project.categorie}
                                technologies={project.technologies}
                                content={project.content}
                                images={project.images}
                                isOpen={modalIsOpen[index]}
                                onRequestClose={() => closeModal(index)}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimpleSlider;
