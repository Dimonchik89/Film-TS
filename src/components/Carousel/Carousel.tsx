import { memo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AllFilmT } from '../../types/filmType';
import CarouselCard from "./CarouselCard";
import { nanoid } from "nanoid";
import 'swiper/css';

import "./carousel.scss";

type CarouselType = {
    films: AllFilmT[];
    category: string
}

const Carousel: React.FC<CarouselType> = memo(({films, category}) => {

    const content = films?.map(film => {
        return (
            <SwiperSlide  key={nanoid()}>
                <CarouselCard film={film} category={category}/>
            </SwiperSlide>
        )
    })

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={7.5}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
                navigation
            >
                {content}
            </Swiper>
        </>
    )
})
export default Carousel;