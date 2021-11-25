import styles from '../styles/navbar.module.css'
import reusable from '../styles/reusable.module.css'
import Link from 'next/link'

export default function Navbar() {
    return ( 
        <div className={`${styles.navContainer} ${reusable.fontColLight}`}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Projects</a></Link>
            <Link href="/"><a>Contact</a></Link>
        </div>
     );
}