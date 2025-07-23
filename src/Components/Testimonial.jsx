// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Testimonial.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import vivekImg from "../assets/vivek.jpeg"

export default function Testimonial() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slider'>
            <img src={vivekImg} alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

       <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

       <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

       <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

       <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slider'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            <h2>Sarah Khan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, maxime? Deserunt neque minima sed odit dolores inventore at corporis illo.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
