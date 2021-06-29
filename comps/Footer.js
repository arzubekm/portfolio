import { faGithub, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkAlt, faMailBulk, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-center text-white">
                <div class="container p-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="mailto: arzubekm@gmail.com" role="button"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/arzubek-murtazaev-360822142/" target="_blank" role="button"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/arzubekm" target="_blank" role="button"><FontAwesomeIcon icon={faGithub} /></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/arzubekm/" target="_blank" role="button"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className={styles.copyright}>
                    <div class="text-center p-3"><p><strong>© 2021 Arzubek Murtazaev</strong></p></div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer