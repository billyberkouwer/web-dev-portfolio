import { useRef } from 'react';
import homeData from '../pages/api/homeData.json'
import styles from '../styles/socials.module.css'

const SocialIcons = () => {
    const socialRefs = useRef([])
    const socialIcons = homeData.socials.map((arr, i) => <button key={arr} ref={(element) => {socialRefs.current[i] = element}} className={styles.socialButton}>{arr[1]}</button>)
    return {socialIcons, socialRefs};
}

export default SocialIcons;