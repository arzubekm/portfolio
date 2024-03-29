import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>arzubekm - portfolio</title>
      </Head>
      <div className="container">
        <div id="about" className={styles.identity}>
          <img src="avatar.jpg" class={styles.imgavatar} width={100} height={100} alt="Arzu"/>
          
          <div className={styles.text}>
            <div className={styles.name}>Arzubek Murtazaev</div>
            <div className={styles.description}>Software Engineer, Web Developer/Data Scientist</div>
            <div className={styles.description}>Seoul, South Korea</div>
          </div>
        </div>
        
        
        <div className={styles.resumeButton}>
          <a href="/files/resume.pdf" download><button class="btn btn-outline-dark"><strong>Resume </strong><FontAwesomeIcon icon={faDownload}/></button></a>
        </div>
        {/* <FontAwesomeIcon icon={faDownload}/> */}
        


        <div id="skills" className={styles.skills}>
          <div className={styles.title}>Skills</div>
          <div className={styles.row}>
            <div className={styles.left}>Data Science</div>
            <div className={styles.right}>Machine/Deep Learning, Python, Data Preprocessing/Analysis</div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>Programming Languages</div>
            <div className={styles.right}>Python, Javascript</div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>Frontend</div>
            <div className={styles.right}>ReactJS, NextJS</div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>Backend</div>
            <div className={styles.right}>Django Rest Framework, NodeJS</div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <div className={styles.title}>Projects</div>

          <div class="row">
          <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Portfolio</h5>
                  {/* <span class="badge bg-info text-dark">React</span>&nbsp;&nbsp; */}
                  <span class="badge bg-secondary">ReactJS</span>&nbsp;&nbsp;
                  <span class="badge bg-dark">NextJS</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  {/* <span class="badge bg-secondary">Github</span> */}
                  <div className={styles.spanBottom}></div>
                  <p class="card-text">Portfolio is a simple web app that one can find information about me including the resume. </p>
                  <div class="row">
                    <div class="col-sm-1">
                      <a href ="/" target="_blank"><h4><FontAwesomeIcon icon={faExternalLinkAlt}/></h4></a>
                    </div>
                    <div class="col-sm-10"></div>
                    <div class="col-sm-1">
                      <a href ="https://github.com/arzubekm/portfolio" target="_blank"><h4><FontAwesomeIcon icon={faGithub}/></h4></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Playerec</h5>
                  <span class="badge bg-warning text-dark">Jupyter</span>&nbsp;&nbsp;
                  <span class="badge bg-primary">Python</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  {/* <span class="badge bg-secondary">Github</span> */}
                  <div className={styles.spanBottom}></div>
                  <p class="card-text">Playerec is a Web app that recommends users football players similar to the player of their choice.</p>
                  <div class="row">
                    <div class="col-sm-1">
                      <a href ="https://player-rec.herokuapp.com/" target="_blank"><h4><FontAwesomeIcon icon={faExternalLinkAlt}/></h4></a>
                    </div>
                    <div class="col-sm-10"></div>
                    <div class="col-sm-1">
                      <a href ="https://github.com/arzubekm/playerRec" target="_blank"><h4><FontAwesomeIcon icon={faGithub}/></h4></a>
                    </div>
                  </div>
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
                  <span class="badge bg-primary">Python</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  {/* <span class="badge bg-secondary">Github</span> */}
                  <div className={styles.spanBottom}></div>
                  <p class="card-text">Movierec is a Web app that recommends users similar movies to the movie that they inputted.</p>
                  <div class="row">
                    <div class="col-sm-1">
                      <a href ="https://recmovie-api.herokuapp.com/" target="_blank"><h4><FontAwesomeIcon icon={faExternalLinkAlt}/></h4></a>
                    </div>
                    <div class="col-sm-10"></div>
                    <div class="col-sm-1">
                      <a href ="https://github.com/arzubekm/recmovie" target="_blank"><h4><FontAwesomeIcon icon={faGithub}/></h4></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Popular Movie</h5>
                  <span class="badge bg-danger">Java</span>&nbsp;&nbsp;
                  <span class="badge bg-success">Android</span>&nbsp;&nbsp;
                  <span class="badge bg-primary">Python</span>
                  <div className={styles.spanBottom}></div>
                  <p class="card-text">Popular Movie is an Android app that has been made together with <a href="https://classroom.udacity.com/courses/ud853" target="_blank">Udacity</a> online course.</p>
                  <div class="row">
                    <div class="col-sm-11"></div>
                    <div class="col-sm-1">
                      <a href ="https://github.com/arzubekm/Popular-Movie-App" target="_blank"><h4><FontAwesomeIcon icon={faGithub}/></h4></a>
                    </div>
                  </div>
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
                  <span class="badge bg-primary">Django</span>&nbsp;&nbsp;
                  <span class="badge bg-info text-dark">Bootstrap</span>&nbsp;&nbsp;
                  {/* <span class="badge bg-secondary">Github</span> */}
                  <div className={styles.spanBottom}></div>
                  <p class="card-text">Easy Travel is a Web app that shows users affordable list of travel destinations based on their inputted budget.</p>
                  {/* <a href="https://recmovie-api.herokuapp.com/" target="_blank" class="btn btn-primary">Project link</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.skills}>
          <div className={styles.title}>Contact</div>
        </div> */}
      </div>
    </div>
  )
}