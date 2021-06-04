import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className={styles.navbar}>
                    <nav class="nav">
                        <div class="col-3">
                            <a href="/" class="nav-link active" aria-current="page"><h3>arzubekm</h3></a>
                        </div>
                        <div class="col-4"></div>
                        <div class="col-1">
                            <Link href="/"><a class="nav-link"><h5>Home</h5></a></Link>    
                        </div>
                        <div class="col-1">
                            <Link href="/projects"><a class="nav-link"><h5>Projects</h5></a></Link>
                        </div>
                        <div class="col-1">
                            <a class="nav-link"><h5>Git</h5></a>
                        </div>
                        <div class="col-1">
                            <a class="nav-link"><h5>LinkedIn</h5></a>
                        </div>
                        <div class="col-1">
                            <a class="nav-link"><h5>Instagram</h5></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar
