import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css'
import styles from '../styles/swiper.module.css'
import { cloneElement } from 'react';


const CreateProjectsSwiper = (props) => {
    const images = props.images;
    const i = props.i;
    const projectSlides = []
    
    if (i === 0) {
        projectSlides.push(
            images.map(image => <SwiperSlide key={image}><Image alt={image} src={image} priority layout="fill" objectFit="cover" /></SwiperSlide>)
        )
    }   else {
        projectSlides.push(
            images.map(image => <SwiperSlide key={image}><Image alt={image} src={image} layout="fill" objectFit="cover" /></SwiperSlide>)
        )
    }


    return (
        <Swiper
        className={styles.swiperContainer}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {console.log('slide change')}}
        >
            {projectSlides}
        </Swiper>
    )
};

export default CreateProjectsSwiper;