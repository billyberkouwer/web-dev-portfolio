import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css'
import styles from '../styles/swiper.module.css'


const CreateProjectsSwiper = (props) => {
    const images = props.images;
    const projectSlides = images.map(image => <SwiperSlide key={image}><Image alt={image} src={image} layout="fill" objectFit="cover" /></SwiperSlide>)


    return (
        <Swiper
        className={styles.swiperContainer}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {console.log('slide change')}}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {projectSlides}
        </Swiper>
    )
};

export default CreateProjectsSwiper;