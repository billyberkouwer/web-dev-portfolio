import styles from '../styles/navbar.module.css'
import reusable from '../styles/reusable.module.css'
import Link from 'next/link'

const Navbar = (props) => {
    return ( 
        <div className={`${styles.navContainer}`} style={{color: props.col}}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <Link href="/"><a>Contact</a></Link>
        </div>
     );
}

export default Navbar;