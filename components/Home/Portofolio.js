import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Navigation
} from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

const Portofolio = () => {
    return (
        <>
            <div className="screenshots-area pb-100" id="portofolio">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Project Teratas</span>
                        <h2>Portfolio</h2>
                    </div>

                    <Swiper 
                        loop={true}
                        effect={'coverflow'} 
                        grabCursor={true} 
                        centeredSlides={true} 
                        parallax={true}
                        slidesPerView={'auto'} 
                        navigation={true}
                        coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": true,
                        }} 
                        pagination={false} 
                        className="mySwiper screenshots-swiper-slides"
                    >
                        <SwiperSlide>
                            <img src="/images/portofolio/website-builder.png" alt="screenshots" />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <img src="/images/portofolio/e-tender.png" alt="screenshots" />
                        </SwiperSlide> */}
                        <SwiperSlide>
                            <img src="/images/portofolio/dashboard-admin.jfif" alt="screenshots" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/screenshots/screen1.png" alt="screenshots" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Portofolio;