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
            <div className={styles.right}>React.js, Next.js, Html, CSS, jQuery</div>
          </div>
          <div className={styles.row}>
            <div className={styles.left}>Backend</div>
            <div className={styles.right}>Django, Node.js</div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <div className={styles.title}>Projects</div>
        </div>
        <div className={styles.contact}></div>
      </div>
    </div>
  )
}