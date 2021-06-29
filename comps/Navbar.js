import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className={styles.navigation}>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar
