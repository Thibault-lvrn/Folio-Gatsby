import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
const About = () => (
    <div className="about content-wrapper" id="about">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <h2 className="part-title hidden">A propos</h2>
        </ScrollAnimation>
        <div className="about__container">
            <div className="about__content">
                <div className="about__content__image hidden">
                    <ScrollAnimation animateIn='fadeIn' delay={250} animateOnce={true}>
                            <img src="images/moi/TIBO.png" alt="" />
                    </ScrollAnimation>
                </div>
                <div className="about__content__txt hidden">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <p>Depuis tout petit, <span class="violet-text">j’ai toujours été attiré par l’art</span>. Je passais des heures à <span class="violet-text">dessiner</span>, à <span class="violet-text">peaufiner chaque détail</span>, et je n’étais jamais aussi heureux qu’avec <span class="violet-text">un crayon à la main</span>. <span class="violet-text">Au lycée</span>, en plus de mes cours d'<span class="violet-text">art plastique</span>, j’ai découvert <span class="violet-text">l’informatique</span>, un domaine qui m’a captivé tout autant. J’ai rapidement compris que cette discipline offrait un potentiel créatif immense, mais d’une manière différente.</p>
                            {/* <p>Depuis tout petit, <span className="violet-text">j’ai toujours été attiré par l’art</span>. Je passais des heures à <span className="violet-text">dessiner</span>, à <span className="violet-text">peaufiner chaque détail</span>, et je me sentais heureux avec un crayon à la main. Au lycée, en plus de mes cours <span className="violet-text">d'art plastique</span>, j’ai découvert <span className="violet-text">l’informatique</span>, un domaine qui m’a captivé tout autant. J’ai rapidement compris que cette discipline offrait un potentiel créatif immense, mais d’une manière différente.</p> */}
                    </ScrollAnimation>
                </div>
            </div>
            <div className="about__content reverse">
                <div className="about__content__txt hidden">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        {/* <p>
                            À ce moment-là, j’ai commencé à me poser une question : comment pouvais-je lier ces deux passions ? <span class="violet-text">Comment combiner l’art</span>, qui me permettait de créer des formes et des émotions, <span class="violet-text">avec l’informatique</span>, qui offrait un terrain de jeu infini pour l’innovation et la technique ? <span class="violet-text">Le développement web est rapidement apparu comme une évidence</span>, un domaine où je pouvais fusionner ces deux mondes qui me tenaient à cœur.
                        </p> */}
                        <p>
                            À ce moment-là, je me suis demandé comment lier ces deux passions : comment unir la <span class="violet-text">créativité</span> de l’art avec le potentiel de <span class="violet-text">l’informatique</span> ? Le <span class="violet-text">développement web</span> est vite devenu une évidence, me permettant de canaliser ma créativité pour résoudre des problèmes et créer des <span class="violet-text">solutions innovantes</span>. Cela m'a permis de fusionner ces deux aspects de ma personnalité qui me tiennent à cœur.
                        </p>
                    </ScrollAnimation>
                </div>
                <div className="about__content__image hidden">
                    <ScrollAnimation animateIn='fadeIn' delay={250} animateOnce={true}>
                            <img src="images/moi/TIBO_DESSIN.png" alt="" />
                    </ScrollAnimation>
                </div>
            </div>
            <div className="about__content">
                <div className="about__content__image hidden">
                    <ScrollAnimation animateIn='fadeIn' delay={250} animateOnce={true} animateOnce={true}>
                            <img src="images/moi/TIBO_DND.png" alt="" />
                    </ScrollAnimation>
                </div>
                <div className="about__content__txt hidden">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <p>
                            L’immersion chez <span class="violet-text">Dn’D</span> pendant <span class="violet-text">deux ans</span> en alternance a été une <span class="violet-text">opportunité incroyable</span> pour approfondir ma passion pour le <span class="violet-text">développement</span>. Travailler sur des <span class="violet-text">projets concrets</span>, entouré de personnes aussi <span class="violet-text">passionnées</span> que moi, m’a permis de comprendre comment la <span class="violet-text">créativité</span> et la <span class="violet-text">technologie</span> peuvent s’entrelacer pour créer des <span class="violet-text">solutions innovantes</span>. Ces <span class="violet-text">deux années</span> ont été un vrai plaisir, et elles n’ont fait que renforcer mon envie de continuer à explorer ce domaine.
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="about__content reverse">
                <div className="about__content__txt hidden">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <p>
                            Aujourd’hui, je suis <span class="violet-text">plus motivé que jamais</span> à poursuivre dans le <span class="violet-text">développement</span>, à explorer de nouvelles façons de marier <span class="violet-text">l’esthétique</span> et la <span class="violet-text">technologie</span>, et à continuer à créer des <span class="violet-text">projets</span> qui me permettent de m’épanouir pleinement dans ces deux <span class="violet-text">domaines</span> qui me <span class="violet-text">passionnent profondément</span>.
                        </p>
                    </ScrollAnimation>
                </div>
                <div className="about__content__image hidden">
                    <ScrollAnimation animateIn='fadeIn' delay={250} animateOnce={true}>
                        <img src="images/moi/TIBO_ORDI.png" alt="" />
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </div>
);

export default About;
