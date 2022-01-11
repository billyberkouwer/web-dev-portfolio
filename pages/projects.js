import Navbar from '../components/Navbar';
import reusable from '../styles/reusable.module.css';
import styles from '../styles/projects.module.css';
import projectsData from './api/projectsData.json'
import { useRef, useEffect, useState } from 'react';
import { imageAnimation, openAnimation, sectionAnimation } from '../components/projectsGsapAnimations';
import CreateProjectsSwiper from '../components/CreateProjectsSwiper';
import Head from 'next/head';
import Preloads from '../components/preload';
import { motion } from 'framer-motion';
import CreateProjectButtons from '../components/CreateProjectButtons';
import { CSSPlugin } from 'gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const navCol = '#272727';

export default function Projects(props) {

    const sectionRefs = useRef([]);
    const imageRefs = useRef([]);
    const titleRefs = useRef([]);
    const tl = gsap.timeline();
    const links = useRef([])

    gsap.registerPlugin(ScrollTrigger, CSSPlugin);

    useEffect(() => {
        imageAnimation(tl, sectionRefs.current, imageRefs.current);
        sectionAnimation(tl, sectionRefs.current);
        openAnimation(tl, sectionRefs.current[0], imageRefs.current[0], titleRefs.current[0]);

        for (let i = 0; i < links.current.length; i++) {
            links.current[i].addEventListener("click", clickHandler);
          }

        function clickHandler(el) {
            el.preventDefault();
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;
            scroll({
              top: offsetTop,
              behavior: "smooth"
            });
        }
    }, [tl]);

    const textContent = (data, i) => {
        const splitData = [];
        if (data.includes('/n')) {
            splitData.push(data.split('/n').map((data) => <p key={'project paragraph ' + i}>{data}</p>))
        }   else {
            splitData.push(<p>{data}</p>);
        }
        return splitData;
    }

    const projects = projectsData.map((data, i) =>
        <>
                <div id={`section${i}`} ref={el => {sectionRefs.current[i] = el}} key={'div1 ' + i} className={`${reusable.section} ${reusable.spacedSection}`}>
                        <div key={'div2 ' + i} className={reusable.contentSection}>
                            <h1 key={'project name ' + i} ref={el => {titleRefs.current[i] = el}} className={styles.projectHeading}>{data.title}</h1>
                            <div key={'div3 ' + i} className={styles.contentContainer}>
                                <div key={'div4 ' + i} className={styles.firstCol}>
                                    <div className={styles.textContainer}>
                                        {textContent(data.text, i)}
                                    </div>
                                    <div key={'div7 ' + i} className={styles.buttonContainer} style={{right: '10%'}}>
                                        <CreateProjectButtons buttondata={data.buttons} />
                                    </div>
                                </div>
                                <div key={'div6 ' + i} className={styles.secondCol}>
                                    <div ref={el => {imageRefs.current[i] = el}} key={'div5 ' + i} className={styles.imageContainer}>
                                        <CreateProjectsSwiper i={i} titles={data.title} images={data.images}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div> 
        </>
    )
    

    return (
        <>
        <Head>
            <title>Web Developer and UI Designer - Billy Myles-Berkouwer</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <Preloads />
        </Head>
        <div className={`${reusable.globalContainer} ${reusable.lightBg}`}>
            <Navbar col={navCol}/>
            <motion.div 
                exit={{opacity: 0}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
            >
                <div className={styles.linksContainer}>
                    {projectsData.map((data, i) =>
                        <a  className={styles.link} 
                            key={data.title} 
                            ref={el => links.current[i] = el} 
                            href={`#section${i}`}>
                        </a>
                        )
                    }
                </div>
                {projects}
            </motion.div>
        </div>
        </>

    )
}