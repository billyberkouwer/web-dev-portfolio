import styles from '../styles/form.module.css';

export default function Form() {
    return (
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
    )
}