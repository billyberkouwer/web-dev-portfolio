import styles from '../styles/form.module.css';

export default function Form() {
    return (
    <div className={styles.formContainer}>
        <form data-netlify="true" netlify data-netlify-honeypot="bot-field" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
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