import styles from '../styles/Home.module.css'
import reusable from '../styles/reusable.module.css'
import Navbar from '../components/Navbar'

const navCol = '#e9e9e9';
const portfolioName = 'Billy Myles-Berkouwer';
const subtitle = 'Front-End Web Developer and Visual Designer';
const webDevSkills = [['HTML', 'CSS', 'JavaScript', 'React.js', 'Three.js'], ['SASS', 'GSAP', 'Swiper', 'JSON'], ['Trello', 'Netlify', 'VS Code']];
const designSkills = [['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'], ['Blender (3D)', 'Da Vinci Resolve (Video)']];
const bio = `I combine the latest website development practices with expertise in visual design and asset production. \n Working as a visual artist and designer led me to discover my passion for website development. Since starting my professional practice in 2019, I have worked on a variety of web projects for individuals and businesses as both an engineer and a designer. \n As a front-end developer, I write clean and performant code to develop websites and apps. I also design user interfaces, which has enabled me to take on projects that require both design and development. Whether I am designing and developing, or working from a given UI design, I produce my websites and apps with careful attention to details and with scalability in mind. \n In addition to my web development practice, I have worked on creative and commercial projects as a visual artist, 3D designer, video producer and photographer. My visual art has been exhibited internationally and my commercial photography has been reproduced in print editions by international gallery, Lumas.`
const bioText = bio.split('\n').map((item, i) => <p key={i} className={`${styles.bioText} ${reusable.fontColLight}`}>{item}</p>);

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
            <button className={styles.socialButton}></button>
            <button className={styles.socialButton}></button>
            <button className={styles.socialButton}></button>
            <button className={styles.socialButton}></button>
            <button className={styles.socialButton}></button>
          </div>
          <p className={styles.watermark}>This site was designed in Figma and developed using Next.js. Title font courtesy of Pangram Pangram.</p>
        </div>
      </div>
    </div>
  )
}
