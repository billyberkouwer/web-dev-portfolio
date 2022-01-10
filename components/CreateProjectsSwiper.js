import Image from 'next/image';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../styles/swiper.module.css';
import { openAnimation } from './projectsGsapAnimations';
import { useRef } from 'react';


const CreateProjectsSwiper = (props) => {
    const images = props.images;
    const i = props.i;
    const projectSlides = [];
    console.log(props.titles)
    
    if (props.titles === "Ocove Studios") {
        projectSlides.push(
            images.map(image => <SwiperSlide key={image}>          
                <video muted autoPlay playsInline loop className={styles.projectVideo} style={{pointerEvents: 'none'}}>
                    <source src={image} type="video/mp4"></source>
                </video>
                </SwiperSlide>)
        )
        console.log(projectSlides)
    }   else {
        projectSlides.push(
            images.map(image => <SwiperSlide key={image}><Image quality={25} alt={image} src={image} layout="fill" objectFit="contain" /></SwiperSlide>)
        )
    };


    return (
        <Swiper
        modules={[Autoplay]}
        className={styles.swiperContainer}
        autoplay={{delay: 5000}}
        spaceBetween={50}
        loop
        speed={1000}
        slidesPerView={1}
        >
            {projectSlides}
        </Swiper>
    )
};

export default CreateProjectsSwiper;