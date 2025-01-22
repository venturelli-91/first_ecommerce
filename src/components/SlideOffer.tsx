import React from "react";
import { register } from 'swiper/element/bundle';
import 'swiper/css';
register();
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Img1 from '@/assets/promocao/Banana_nanica.webp'
import Img2 from '@/assets/promocao/papaya-01.png'



function SlideOffer () {

    const data = [
        {id: '1', src: Img1, alt:'Banana'},
        {id: '2', src: Img2, alt:'Mamão'},
        
    ]

    return(
        <div className="w-1/4 mx-auto">
        
        <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
        >
            {data.map((item) => (
            <SwiperSlide key={item.id}>
                <Image src={item.src} 
                alt={item.alt} 
                layout="responsive" 
                />
                
            </SwiperSlide>
            ))}
        </Swiper>

        </div>

    )

}

export default SlideOffer;