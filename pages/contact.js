import reusable from '../styles/reusable.module.css'
import Navbar from '../components/Navbar'
import themeData from './api/themeData.json'
import styles from '../styles/contact.module.css'
import socials from '../components/socialIcons.js'
import Form from '../components/form.js'

const navCol = themeData.navColLight;
const socialIcons = socials;

export default function Contact() {
    return (
        <div className={reusable.globalContainer}>
            <Navbar col={navCol} />
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
        </div>
    );
}