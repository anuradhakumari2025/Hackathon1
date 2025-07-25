// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Testimonial.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Testimonial() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
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
          <div className="slider">
            <img
              src="https://media.istockphoto.com/id/1161433609/photo/weight-loss-and-right-nutrition-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=5BWf0ayTFOdkDxhMd8mhw7PoE5BdR0QThfMf0Dk8BXU="
              alt=""
            />
            <h2>Dr. Priya Gupta</h2>
            <p>
              The recipes are healthy yet tasty! I never thought I’d enjoy such
              nutritious food without compromising on flavor.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://media.istockphoto.com/id/1221041044/photo/teenage-girl-at-white-background-stock-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=vzbLXgg1SOYducAwaK8cWgUNKqMMJtTu5xYWbZE-TNA="
              alt=""
            />
            <h2>Neha Mehta</h2>
            <p>
              Finally, a platform that blends traditional Indian wisdom with
              modern science. It’s informative and truly eye-opening.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://media.istockphoto.com/id/1396477546/photo/just-one-a-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=aIuTrruvp8sk7FOzx6yOjD3ltqDVRQIgBApH5_dzJbM="
              alt=""
            />
            <h2>Rohit Mehta</h2>
            <p>
              The content was very insightful and practical. I’ve started
              implementing the tips and already feel a difference in my energy
              levels.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <h2>Anjali Verma</h2>
            <p>
              I love how simple and easy-to-follow the advice is. It’s perfect
              for someone like me who’s just starting their wellness journey.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww"
              alt=""
            />

            <h2>Karan Patel</h2>
            <p>
              I followed the morning routine video and it changed my life. I
              feel more productive and peaceful throughout the day.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <h2>Neha Joshi</h2>
            <p>
              Finally, a platform that blends traditional Indian wisdom with
              modern science. It’s informative and truly eye-opening.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <h2>Priya Sharma</h2>
            <p>
              The recipes are healthy yet tasty! I never thought I’d enjoy such
              nutritious food without compromising on flavor.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://media.istockphoto.com/id/1332167714/photo/portrait-of-a-smiling-university-student-standing-at-the-entrance-of-a-university-college.webp?a=1&b=1&s=612x612&w=0&k=20&c=6USio_EqE-LROnAvqRFcPzXBH6lgI5CBBeUE0mR8SPg="
              alt=""
            />
            <h2>Mohammed Asif</h2>
            <p>
              Authentic and honest—exactly what the wellness space needs today.
              I trust this platform more than any influencer out there.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider">
            <img
              src="https://media.istockphoto.com/id/1308938793/photo/nutritionist-uses-a-digital-tablet-to-conduct-an-online-consultation-with-his-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nwo8BjSDA73ulznfuTfUK2gMk_PQo19lm2qiy_1SXRU="
              alt=""
            />
            <h2>Ravi Narayan</h2>
            <p>
              I appreciate the honesty in product reviews. Helped me eliminate
              so many harmful items from my daily routine.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
