"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const FullPageCarousel = ({ images }) => {

  return (
  
      <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {
          images.map((item,i)=>{
            return <SwiperSlide key={i}>
            <img src={item} style={{display:"block",width:"100%"}}/>
          </SwiperSlide>
          })
        }
        
      
      </Swiper>
    
  );
};

export default FullPageCarousel;
