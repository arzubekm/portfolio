import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div>
          <div class="row-2">
            <h1>Objective</h1>
            <p>A page built with <a href="https://nextjs.org/" target="_blank">Next.js</a>.</p>
          </div>
          <div class="row-1">
            <div class="col-3">
              <img src="avatar.jpg" class={styles.imgavatar} alt="Arzu"/>
              <h4>Arzubek Murtazaev</h4>
              <h7>Ulsan, South Korea</h7>
            </div>
            <div class="col-9">
              <h1>Info</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}