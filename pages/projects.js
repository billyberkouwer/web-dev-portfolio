import Navbar from '../components/Navbar';
import reusable from '../styles/reusable.module.css';
import styles from '../styles/projects.module.css';
import projectsData from './api/projectsData.json'
import { useRef, useEffect } from 'react';
import { imageAnimation, openAnimation, sectionAnimation } from '../components/projectsGsapAnimations';

const navCol = '#272727';

export default function Projects(props) {
    const gsap = props.gsap;
    const ScrollTrigger = props.ScrollTrigger;

    const sectionRefs = useRef([])
    const imageRefs = useRef([])
    const buttonRefs = useRef([])
    const titleRefs = useRef([])
    const tl = gsap.timeline()

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        imageAnimation(tl, sectionRefs.current, imageRefs.current)
        sectionAnimation(tl, sectionRefs.current)
        openAnimation(tl, sectionRefs.current[0], imageRefs.current[0], titleRefs.current[0])
    }, [])

    const projects = projectsData.map((data, i) => 
            <div ref={el => {sectionRefs.current[i] = el}} key={'div1 ' + i} className={`${reusable.section} ${reusable.spacedSection}`}>
                    <div key={'div2 ' + i} className={reusable.contentSection}>
                        <h1 key={'project name ' + i} ref={el => {titleRefs.current[i] = el}} className={styles.projectHeading}>{data.title}</h1>
                        <div key={'div3 ' + i} className={styles.contentContainer}>
                            <div key={'div4 ' + i} className={styles.firstCol}>
                                <p key={'project paragraph ' + i}>{data.text}</p>
                                <div key={'div7 ' + i} className={styles.buttonContainer} style={{right: '10%'}}>
                                    <button><a key={'project link ' + i} href={data.liveURL}>Live</a></button>
                                    <button><a key={'project repo ' + i} href={data.repoURL}>Site Repo</a></button>
                                </div>
                            </div>
                            <div key={'div6 ' + i} className={styles.secondCol}>
                                <div ref={el => {imageRefs.current[i] = el}} key={'div5 ' + i} className={styles.imageContainer}>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>)

    return (
        <div className={`${reusable.globalContainer} ${reusable.lightBg}`}>
            <Navbar col={navCol}/>
            {projects}
        </div>
    )
}