import 'swiper/css/navigation'
import 'swiper/css';
import '../styles/globals.css';
import { CSSPlugin } from 'gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {

  const [initialLoad, setInitialLoad] = useState(1);

  useEffect(() => {
    setInitialLoad(0)
  }, []);
  
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} 
          initialLoad={initialLoad}
        />
      </AnimatePresence>
    </>
  );
}

export default MyApp
