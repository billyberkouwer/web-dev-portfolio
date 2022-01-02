import styles from '../styles/Home.module.css'
import reusable from '../styles/reusable.module.css'
import Navbar from '../components/Navbar'
import socials from '../components/socialIcons'
import homeData from '../pages/api/homeData.json'
import themeData from './api/themeData.json'
import GSAP from 'gsap';
import { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';

const navCol = themeData.navColLight;
const portfolioName = homeData.title;
const subtitle = homeData.subtitle;
const webDevSkills = homeData.skills1;
const designSkills = homeData.skills2;
const bio = homeData.bio;
const bioText = bio.split('\n').map((item, i) => <p key={i} className={`${styles.bioText} ${reusable.fontColLight}`}>{item}</p>);
const socialIcons = socials;

export default function Home(props) {

  GSAP.registerPlugin(ScrollTrigger);

  const initialOpen = props.load;
  let tl = GSAP.timeline();
  const title = useRef(null);
  const subtitleRef = useRef(null);
  const skillsTop = useRef(null)
  const skillsSection = useRef(null);
  const skillsBottom = useRef(null);
  const skill1 = useRef(null)
  const skill2 = useRef(null)
  const list1 = useRef(null)
  const list2 = useRef(null)
  const list3 = useRef(null)
  const list4 = useRef(null)
  const list5 = useRef(null)

  useEffect(() => {
    const titles = [title, subtitleRef];
    if (initialOpen) {
      tl.from(
        titles,
        {
          duration: 1,
          opacity: 0,
          x: 100,
          ease: Power3.easeIn,
          stagger: .5,
        }
      );
    }
    tl.from(
      [skill1, list3, list2, list1], {
        y: -100*1.25,
          scrollTrigger: {
            trigger: skillsSection,
            start: 'top 80%',
            end: 800,
            scrub: .75,
            markers: {startColor: "green", endColor: "red", fontSize: "12px"},
          },
      },
    );
    tl.from(
      [list1, list2, list3], {
        opacity: 0,
        stagger: -.15,
        scrollTrigger: {
          trigger: skillsSection,
          start: 'top 80%',
          end: 800,
          scrub: .75,
        },
      }
    );
    tl.from(
      [list4, list5], {
        opacity: 0,
        stagger: .15,
        scrollTrigger: {
          trigger: skillsSection,
          start: 'top 80%',
          scrub: .75,
          end: 800,
        },
      },
    );
    tl.from(
      [skill1, skill2], {
        opacity: 0,
        scrollTrigger: {
          trigger: skillsSection,
          start: 'top 80%',
          scrub: .75,
          end: 800,
        },
      }
    );
    tl.from(
        [skill2, list4, list5], {
          y: 60*1.25,
            scrollTrigger: {
              trigger: skillsSection,
              start: 'top 80%',
              end: 800,
              scrub: .75,
            },
        },
      );
  }, [])

  return (props.fontReady === 0 &&
    <div className={reusable.globalContainer}>
      <Navbar col={navCol}/>
      <div className={`${reusable.section} ${reusable.darkBg} ${reusable.centralised}`}>
        <div className={`${styles.pageTitle} ${reusable.fontColLight}`}>
          <h1 ref={e => title = e}>{portfolioName}</h1>
          <h2 ref={e => subtitleRef = e}>{subtitle}</h2>
        </div>
      </div>
      <div ref={e => skillsSection = e} className={reusable.section} style={{overflow: 'hidden'}}>
          <div ref={e => skillsTop = e} className={`${styles.half1} ${styles.rotation}`}>
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
          <div ref={e => skillsBottom = e} className={`${styles.half2} ${reusable.darkBg} ${styles.rotation} ${reusable.fontColLight}`}>
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
