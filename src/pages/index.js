import React, { useEffect, useRef } from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import HeroBanner from "../components/heroBanner";
import About from "../components/about";
import Slick from "../components/slick";
import Competence from "../components/competence";
import Footer from "../components/footer";
import { ToggleProvider } from '../context/ToggleContext';

const IndexPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const bouton = document.querySelector('.header_bouton');

    if (bouton) {
      bouton.addEventListener('click', function () {
        bouton.classList.toggle('active');
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    const scrollHandler = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop === 0) {
        hiddenElements.forEach((element) => {
          element.classList.remove('visible');
        });
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <ToggleProvider>
      <div id="conteneur">
        <Header />
        {/* <AnimatedCursor
              innerSize={10}
              outerSize={50}
              color='124, 112, 255'
              outerAlpha={1}
              innerScale={0.7}
              outerScale={1.5}
              outerStyle={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                mixBlendMode: 'exclusion',
              }}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                '.collapsible'
              ]}
            /> */}
        {/* <LocomotiveScrollProvider options={{smooth: true}}> */}
          <main className="main contenu-index transition-fade index-page" data-scroll-container ref={containerRef}>
            <Navigation />
            <HeroBanner />
            <Slick />
            <Competence />
            <About />
          </main>
        {/* </LocomotiveScrollProvider> */}
        <Footer />
      </div> 
    </ToggleProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
