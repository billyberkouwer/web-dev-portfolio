import { useRef } from 'react';
import homeData from '../pages/api/homeData.json'
import styles from '../styles/socials.module.css'
import Link from 'next/link';
import Image from 'next/image';

const SocialIcons = () => {
    const socialRefs = useRef([])
    const socialIcons = homeData.socials.map((arr, i) => <Link key={arr[0]} href={arr[1]}><button ref={(element) => {socialRefs.current[i] = element}} className={styles.socialButton}><Image src={arr[2]} quality={25} alt={arr[0]} height='35px' width='35px' objectFit="contain"/></button></Link>)
    return {socialIcons, socialRefs};
}

export default SocialIcons;