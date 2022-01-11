import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../styles/swiper.module.css';

const CreateProjectsSwiper = (props) => {
    const images = props.images;
    const i = props.i;
    const projectSlides = [];

    if (props.titles === "Ocove Studios") {
        projectSlides.push(
            images.map(image => 
                <SwiperSlide key={image}>          
                    <video muted autoPlay playsInline loop className={styles.projectVideo} style={{pointerEvents: 'none'}}>
                        <source src={image} type="video/mp4"></source>
                    </video>
                </SwiperSlide>
            )
        )
    }   else {
        projectSlides.push(
            images.map((image, i) => 
                <SwiperSlide 
                    key={image}
                >
                    <img src="/icons/loading-icon.png" className={styles.loadingImage} alt='loading' height={30} width={30}></img>
                    <div className={styles.swiperImage}>
                        <Image 
                            quality={25} 
                            alt={image} 
                            src={image} 
                            layout="fill" 
                            objectFit="contain"
                        />           
                    </div>
                </SwiperSlide>)
        )
    };

    return (
        <Swiper styles={{swiperNavigationSize: '30px'}}
            modules={[Navigation]}
            className={styles.swiperContainer}
            spaceBetween={50}
            navigation
            loop
            speed={1000}
            slidesPerView={1}
            onSlideChange={() => {
                setTimeout(() => {

                }, 600)
            }}
        >
            {projectSlides}
        </Swiper>
    )
};

export default CreateProjectsSwiper;