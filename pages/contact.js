import reusable from '../styles/reusable.module.css'
import Navbar from '../components/Navbar'
import themeData from './api/themeData.json'
import styles from '../styles/contact.module.css'
import socials from '../components/socialIcons.js'
import Form from '../components/form.js'
import Head from 'next/head'
import Preloads from '../components/preload'
import { motion } from 'framer-motion'

const navCol = themeData.navColLight;

export default function Contact() {
    return (
        <>
        <Head>
            <title>Web Developer and UI Designer - Billy Myles-Berkouwer</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <Preloads />
        </Head>
        <div className={reusable.globalContainer}>
            <Navbar col={navCol} />
            <motion.div 
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}>
            <div className={`${reusable.section} ${reusable.darkBg} ${reusable.spacedSection}`}>
                <div className={`${styles.contentSection} ${reusable.fontColLight}`}>
                    <div className={styles.headingContainer}>
                        <h1>Contact</h1>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.firstCol}>
                            <div>
                                <div className={styles.imageContainer}>

                                </div>
                            </div>
                        </div>
                        <div className={styles.secondCol}>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
        </>
    );
}