import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import reusable from '../styles/reusable.module.css'
import Navbar from '../components/Navbar'

const portfolioName = 'Billy Myles-Berkouwer';
const subtitle = 'Front-End Web Developer and Visual Designer';

export default function Home() {
  return (
    <div className={reusable.globalContainer}>
      <Navbar />
      <div className={`${reusable.section} ${reusable.darkBg} ${reusable.centralised}`}>
        <div className={`${styles.pageTitle} ${reusable.fontColLight}`}>
          <h1>{portfolioName}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className={reusable.section} style={{overflow: 'hidden'}}>
          <div className={`${styles.half1} ${styles.rotation}`}>
            <div className={styles.rotTextContainer1}>
              <h3 className={`${reusable.fontColDark}`}>Web Development Skills</h3>
              <ul className={`${reusable.fontColDark} ${styles.toplist1}`}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Three.js</li>
              </ul>
              <ul className={`${reusable.fontColDark} ${styles.toplist2}`}>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>GSAP</li>
                <li>Swiper</li>
                <li>JSON</li>
              </ul>
              <ul className={`${reusable.fontColDark} ${styles.toplist3}`}>
                <li>Trello</li>
                <li>Netlify</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.half2} ${reusable.darkBg} ${styles.rotation} ${reusable.fontColLight}`}>
            <div className={styles.rotTextContainer2}>
            <h3>Visual Design Skills</h3>
              <ul className={`${styles.bottomlist1}`}>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
              </ul>
              <ul className={`${styles.bottomlist2}`}>
                <li>Blender (3D)</li>
                <li>Da Vinci Resolve (Video)</li>
              </ul>
            </div>
          </div>
      </div>
      <div className={`${styles.aboutSection} ${reusable.section} ${reusable.darkBg}`}>
          <div className={`${reusable.fontColLight}`}>
            <p>Phasellus lacinia risus vel lectus congue, quis fringilla diam vestibulum. Integer commodo commodo tortor id sagittis. Fusce lacinia tellus id ex condimentum posuere. Quisque pellentesque diam enim. Nunc ac est ac nisl dapibus semper. Quisque non quam non ligula dapibus egestas. Nunc luctus ultricies nunc, ut porttitor odio feugiat in. Quisque luctus est in diam sagittis aliquet. Nam condimentum sem vitae risus gravida hendrerit. Fusce vitae odio non magna aliquam ultricies a at dui. Pellentesque fringilla blandit ultrices. Etiam scelerisque facilisis lacus, nec porta eros malesuada vitae. Praesent libero ligula, dictum et maximus vel, faucibus et ligula. Curabitur eu purus quis mi porttitor rhoncus sed nec risus. Aliquam a euismod turpis. Aliquam tincidunt massa eros, id interdum nisi pulvinar ut. Nullam venenatis interdum nibh, sed scelerisque magna consequat sit amet.</p>
          </div>
          <div className={``}>
            <button>See My Projects</button>
            <button>Hire Me</button>
          </div>
      </div>
    </div>
  )
}
