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
import {gsap} from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const navCol = '#272727';

export default function Projects(props) {

    const sectionRefs = useRef([])
    const imageRefs = useRef([])
    const titleRefs = useRef([])

    const projects = projectsData.map((data, i) =>
    <div ref={el => {sectionRefs.current[i] = el}} key={'div1 ' + i} className={`${reusable.section} ${reusable.spacedSection}`}>
            <div key={'div2 ' + i} className={reusable.contentSection}>
                <h1 key={'project name ' + i} ref={el => {titleRefs.current[i] = el}} className={styles.projectHeading}>{data.title}</h1>
                <div key={'div3 ' + i} className={styles.contentContainer}>
                    <div key={'div4 ' + i} className={styles.firstCol}>
                        <p key={'project paragraph ' + i}>{data.text}</p>
                        <div key={'div7 ' + i} className={styles.buttonContainer} style={{right: '10%'}}>
                            <CreateProjectButtons buttondata={data.buttons} />
                        </div>
                    </div>
                    <div key={'div6 ' + i} className={styles.secondCol}>
                        <div ref={el => {imageRefs.current[i] = el}} key={'div5 ' + i} className={styles.imageContainer}>
                            <CreateProjectsSwiper i={i} images={data.images}/>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
)


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, CSSPlugin);
        const tl = gsap.timeline()
        for (let i = 0; i < imageRefs.current.length; i++) {
            tl.fromTo(
                imageRefs.current[i], 
                    {x: 100},
                    {x: 0,
                        scrollTrigger: {
                            trigger: sectionRefs.current[i],
                            start: 'top 70%',
                            end: "+=400",
                            scrub: .75,
                          }}
            );
            console.log('scroll trigger set');
            console.log(imageRefs.current);
        };
    }, [])        

    return (
        <>
        <Head>
            <title>Web Developer and UI Designer - Billy Myles-Berkouwer</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <Preloads />
        </Head>
        <div className={`${reusable.globalContainer} ${reusable.lightBg}`}>
            <Navbar col={navCol}/>
                {projects}
        </div>
        </>

    )
}