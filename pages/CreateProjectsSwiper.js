import Image from 'next/image';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/swiper.module.css';


const CreateProjectsSwiper = (props) => {
    const images = props.images;
    const i = props.i;
    const projectSlides = []
    
    if (i === 0) {
        projectSlides.push(
            images.map(image => <SwiperSlide key={image}><Image quality={25} alt={image} src={image} layout="fill" priority={true} objectFit="cover" /></SwiperSlide>)
        )
    }   else {
        projectSlides.push(
            images.map(image => <SwiperSlide key={image}><Image quality={50} alt={image} src={image} layout="fill" objectFit="cover" /></SwiperSlide>)
        )
    }


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