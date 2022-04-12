import styles from '../styles/homestyles.module.css';
import reusable from '../styles/reusable.module.css';
import Navbar from '../components/Navbar';
import homeData from '../pages/api/homeData.json';
import themeData from './api/themeData.json';
import { useRef, useEffect } from 'react';
import { aboutAnimation, skillsAnimation, titleAnimation } from '../components/homeGsapAnimations';
import SocialIcons from '../components/socialIcons';
import Head from 'next/head';
import Preloads from '../components/preload';
import { motion } from 'framer-motion'
import { CSSPlugin } from 'gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

export default function Home(props) {

  const navCol = themeData.navColLight;
  const portfolioName = homeData.title;
  const subtitle = homeData.subtitle;
  const webDevSkills = homeData.skills1;
  const designSkills = homeData.skills2;
  const bio = homeData.bio;
  const bioText = bio.split('\n').map((item, i) => <p key={i} className={`${styles.bioText} ${reusable.fontColLight}`}>{item}</p>);


  const initialOpen = props.initialLoad;

  gsap.registerPlugin(ScrollTrigger, CSSPlugin);

  const tl = gsap.timeline();
  const title = useRef(null);
  const subtitleRef = useRef(null);
  const skillsSection = useRef(null);
  const skill1 = useRef(null);
  const skill2 = useRef(null);
  const list1 = useRef(null);
  const list2 = useRef(null);
  const list3 = useRef(null);
  const list4 = useRef(null);
  const list5 = useRef(null);
  const aboutSection = useRef(null);
  const bioRef = useRef(null);
  const button1 = useRef(null);
  const button2 = useRef(null);

  const {socialIcons, socialRefs} = SocialIcons();

  useEffect(() => {
    titleAnimation(tl, initialOpen, title, subtitleRef);
    skillsAnimation(tl, skill1, list1, list2, list3, list4, list5, skill2, skillsSection);
    aboutAnimation(gsap, aboutSection, bioRef, button1, button2, socialRefs.current);
  }, []);

  return (
      <div>
        <Head>
          <title>Web Developer and UI Designer - Billy Myles-Berkouwer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Billy Myles-Berkouwer is a web developer and visual artist. See his skills and projects and contact him here." />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="portfolio" />
          <meta property="og:title" content="Web Developer and UI Designer - Billy Myles-Berkouwer" />
          <meta property="og:description" content="Billy Myles-Berkouwer is a web developer and visual artist. See his skills and projects and contact him here." />
          <meta property="og:image" content="https://bmbservices.netlify.app/og-image.jpg" />
          <meta property="og:site_name" content="Web Developer and UI Designer - Billy Myles-Berkouwer" />
          <link rel="canonical" href="https://bmbservices.netlify.app" />
          <Preloads />
        </Head>
        <div className={`${reusable.globalContainer} ${styles.darkBg}`}>
          <video muted autoPlay playsInline loop className={styles.bgVideo} style={{pointerEvents: 'none'}}>
            <source src="/video-bg1.mp4" type="video/mp4"></source>
          </video>
          <Navbar col={navCol}/>
          <motion.div 
          exit={{opacity: 0}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}>
          <div className={`${reusable.section} ${reusable.centralised}`}>
            <div className={`${styles.pageTitle} ${reusable.fontColLight}`}>
              <h1 ref={e => title = e}>{portfolioName}</h1>
              <h2 ref={e => subtitleRef = e}>{subtitle}</h2>
            </div>
          </div>
          <div ref={e => skillsSection = e} className={reusable.section} style={{overflow: 'hidden'}}>
              <div className={`${styles.half1} ${styles.rotation}`}>
                <div className={styles.rotTextContainer1}>
                  <h3 ref={e => skill1 = e} className={`${reusable.fontColDark}`}>Web Development Skills</h3>
                  <ul ref={e => list1 = e} className={`${reusable.fontColDark} ${styles.toplist1}`}>
                    {webDevSkills[0].map(skill => <li key={skill}> {skill} </li>)}
                  </ul>
                  <ul ref={e => list2 = e} className={`${reusable.fontColDark} ${styles.toplist2}`}>
                    {webDevSkills[1].map(skill => <li key={skill}> {skill} </li>)}
                  </ul>
                  <ul ref={e => list3 = e} className={`${reusable.fontColDark} ${styles.toplist3}`}>
                    {webDevSkills[2].map(skill => <li key={skill}> {skill} </li>)}
                  </ul>
                </div>
              </div>
              <div className={`${styles.half2} ${reusable.darkBg} ${styles.rotation} ${reusable.fontColLight}`}>
                <div className={styles.rotTextContainer2}>
                <h3 ref={e => skill2 = e}>Visual Design Skills</h3>
                  <ul ref={e => list4 = e} className={`${styles.bottomlist1}`}>
                    {designSkills[0].map(skill => <li key={skill}> {skill} </li>)}
                  </ul>
                  <ul ref={e => list5 = e} className={`${styles.bottomlist2}`}>
                    {designSkills[1].map(skill => <li key={skill}> {skill} </li>)}
                  </ul>
                </div>
              </div>
          </div>
          <div ref={e => aboutSection = e} className={`${reusable.section} ${reusable.darkBg}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div>
              <div ref={e => bioRef = e}>
                {bioText}
              </div>
              <div className={styles.buttonContainer}>
                <Link passHref href="/projects"><button ref={e => button1 = e} className={styles.aboutButton}>See Web Projects</button></Link>
                <Link passHref href="/contact"><button ref={e => button2 = e} className={styles.aboutButton}>Contact Me</button></Link>
              </div>
              <div className={styles.socialsContainer}>
                {socialIcons}
              </div>
              <p className={styles.watermark}>This site was designed in Figma and developed using Next.js. Title font courtesy of Pangram Pangram.</p>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
  )
}
