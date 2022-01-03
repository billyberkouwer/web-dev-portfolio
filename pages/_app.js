import '../styles/globals.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [initialLoad, setInitialLoad] = useState(1);
  const [fontReady, setFontReady] = useState(0);

  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontReady(1);
    }
    setInitialLoad(0)
  }, [])
  
  return (
    <Component {...pageProps} 
      load={initialLoad} 
      fontReady={fontReady} 
      gsap={gsap}
      ScrollTrigger={ScrollTrigger}
    />
  );
}

export default MyApp
