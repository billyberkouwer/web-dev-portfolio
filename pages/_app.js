import '../styles/globals.css'
import { CSSPlugin } from 'gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'swiper/css';

function MyApp({ Component, pageProps }) {
  
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} 
      />
    </AnimatePresence>
  );
}

export default MyApp
