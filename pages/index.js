import styles from '../styles/Home.module.css'
import reusable from '../styles/reusable.module.css'
import Navbar from '../components/Navbar'
import socials from '../components/socialIcons'
import homeData from '../pages/api/homeData.json'
import themeData from './api/themeData.json'

const navCol = themeData.navColLight;
const portfolioName = homeData.title;
const subtitle = homeData.subtitle;
const webDevSkills = homeData.skills1;
const designSkills = homeData.skills2;
const bio = homeData.bio;
const bioText = bio.split('\n').map((item, i) => <p key={i} className={`${styles.bioText} ${reusable.fontColLight}`}>{item}</p>);
const socialIcons = socials;

export default function Home() {
  return (
    <div className={reusable.globalContainer}>
      <Navbar col={navCol}/>
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
                {webDevSkills[0].map(skill => <li key={skill}> {skill} </li>)}
              </ul>
              <ul className={`${reusable.fontColDark} ${styles.toplist2}`}>
                {webDevSkills[1].map(skill => <li key={skill}> {skill} </li>)}
              </ul>
              <ul className={`${reusable.fontColDark} ${styles.toplist3}`}>
                {webDevSkills[2].map(skill => <li key={skill}> {skill} </li>)}
              </ul>
            </div>
          </div>
          <div className={`${styles.half2} ${reusable.darkBg} ${styles.rotation} ${reusable.fontColLight}`}>
            <div className={styles.rotTextContainer2}>
            <h3>Visual Design Skills</h3>
              <ul className={`${styles.bottomlist1}`}>
                {designSkills[0].map(skill => <li key={skill}> {skill} </li>)}
              </ul>
              <ul className={`${styles.bottomlist2}`}>
                {designSkills[1].map(skill => <li key={skill}> {skill} </li>)}
              </ul>
            </div>
          </div>
      </div>
      <div className={`${reusable.section} ${reusable.darkBg}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className={styles.aboutContainer}>
          {bioText}
          <div className={styles.buttonContainer}>
            <button className={styles.aboutButton}>See Web Projects</button>
            <button className={styles.aboutButton}>Contact Me</button>
          </div>
          <div className={styles.socialsContainer}>
            {socialIcons}
          </div>
          <p className={styles.watermark}>This site was designed in Figma and developed using Next.js. Title font courtesy of Pangram Pangram.</p>
        </div>
      </div>
    </div>
  )
}
