import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div id="about" className={styles.identity}>
          <img src="avatar.jpg" class={styles.imgavatar} width={100} height={100} alt="Arzu"/>
          <div className={styles.text}>
            <div className={styles.name}>Arzubek Murtazaev</div>
            <div className={styles.description}>Data Scientist, Web Developer</div>
            <div className={styles.description}>Ulsan, South Korea</div>
          </div>
        </div>
        <div id="skills" className={styles.skills}>
          <div className={styles.title}>Skills</div>
          <div className={styles.row}>
            <div className={styles.left}>Data Science</div>
            <div className={styles.right}>Machine/Deep Learning, Jupyter, Python</div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>Programming Languages</div>
            <div className={styles.right}>Python, Java, Javascript</div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>Frontend</div>
            <div className={styles.right}>React.js, Next.js, Html, CSS/Bootstrap, jQuery</div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>Backend</div>
            <div className={styles.right}>Django, Node.js</div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <div className={styles.title}>Projects</div>

          <div class="row">
          <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Portfolio</h5>
                  <span class="badge bg-info text-dark">React</span>&nbsp;&nbsp;
                  <span class="badge bg-dark">NextJS</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Javascript</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Github</span>
                  <p class="card-text">Movierec is a Web app that recommends users similar movies to the movie that they inputted.</p>
                  <a href="/" target="_blank" class="btn btn-primary">Link</a>
                  <i class="fab fa-github"></i>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Playerec</h5>
                  <span class="badge bg-warning text-dark">Jupyter</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Python</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Github</span>
                  <p class="card-text">Playerec is a Web app that recommends users football players similar to the player of their choice.</p>
                  <a href="https://player-rec.herokuapp.com/" target="_blank" class="btn btn-primary">Link</a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Movierec</h5>
                  <span class="badge bg-warning text-dark">Jupyter</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Python</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Github</span>
                  <p class="card-text">Movierec is a Web app that recommends users similar movies to the movie that they inputted.</p>
                  <a href="https://recmovie-api.herokuapp.com/" target="_blank" class="btn btn-primary">Link</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Popular Movie</h5>
                  <span class="badge bg-secondary">Java</span>&nbsp;&nbsp;
                  <span class="badge bg-success">Android</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Github</span>
                  <p class="card-text">Popular Movie is an Android app that has been made together with Udacity online course.</p>
                  {/* <a href="https://player-rec.herokuapp.com/" target="_blank" class="btn btn-primary">Project link</a> */}
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Easy travel</h5>
                  <span class="badge bg-warning text-dark">Jupyter</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Django</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  <span class="badge bg-secondary">Github</span>
                  <p class="card-text">Easy Travel is a Web app that shows users affordable list of travel destinations based on their inputted budget.</p>
                  {/* <a href="https://recmovie-api.herokuapp.com/" target="_blank" class="btn btn-primary">Project link</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.title}>Contact</div>
        </div>
      </div>
    </div>
  )
}