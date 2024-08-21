import React from "react"

const Footer: React.FC = () => (
    <footer>
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__right">
                    <p>© 2024 Thibault Livran</p>
                </div>
                <div className="footer__content__left">
                    <a href="https://github.com/Thibault-lvrn" target="_blank">
                        <img loading="lazy" src="images/github.png" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/thibault-livran-465178231/" target="_blank">
                        <img loading="lazy" src="images/linkedin.png" alt="Linkedin" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer