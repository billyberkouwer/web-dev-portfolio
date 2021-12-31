import homeData from '../pages/api/homeData.json'
import styles from '../styles/Home.module.css'

const socialIcons = homeData.socials.map(arr => <button key={arr} className={styles.socialButton}>{arr[1]}</button>)

export default socialIcons;