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
              <ul className={reusable.fontColDark}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Three.js</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.half2} ${reusable.darkBg} ${styles.rotation}`}>
            <div className={styles.rotTextContainer2}>
            <ul className={reusable.fontColLight}>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}
