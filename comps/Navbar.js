import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="navbar navbar-light">
                <div className="container-fluid">
                <div className="container">
                    <Link href="/"><a><h2>arzubekm</h2></a></Link>
                </div>
                <a href="https://github.com/arzubekm/" target="_blank">
                    <FontAwesomeIcon icon="github" />
                </a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar
