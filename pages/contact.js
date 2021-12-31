import reusable from '../styles/reusable.module.css'
import Navbar from '../components/Navbar'
import themeData from './api/themeData.json'
import styles from '../styles/contact.module.css'

const navCol = themeData.navColLight;

export default function Contact() {
    return (
        <div className={reusable.globalContainer}>
            <Navbar col={navCol} />
            <div className={`${reusable.section} ${reusable.darkBg} ${reusable.spacedSection}`}>
                <div className={`${reusable.contentSection} ${reusable.fontColLight}`}>
                    <h1>Contact</h1>
                    <div className={reusable.contentContainer}>
                        <div className={styles.firstCol}>
                            <div className={styles.imageContainer}>

                            </div>
                        </div>
                        <div className={styles.secondCol}>
                            <div className={styles.formContainer}>
                                <form name="contact" method="POST">
                                    <input type="hidden" name="contact-form" value="contact" />
                                    <p>
                                        <input type="text" name="fullname" id="fullname" placeholder="Your Name"></input>
                                    </p>
                                    <p>
                                        <input type="email" name="email" id="youremail" placeholder="Your Email"/>
                                    </p>
                                    <p>
                                        <textarea name="message" id="yourmessage" placeholder="Your Message"></textarea>
                                    </p>
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}