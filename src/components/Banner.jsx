import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="flex "
      >
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://c8.alamy.com/comp/GARNXE/soccer-england-soccer-clinic-marvin-lee-stadium-GARNXE.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuoy_4MVDcpB6TF-18ubXAgy2oJHk0ZJru4Wv6w73iuyBlX8y5WyZ65tq6r7qwBf9JGc&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://c8.alamy.com/compit/garnxe/calcio-inghilterra-soccer-clinica-marvin-lee-stadium-garnxe.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://dornsife.usc.edu/news/wp-content/uploads/sites/7/2023/04/story-3499-768x432.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlVa_cBS3j5XQRN4BD4_oDAJ50DeQHt3r-pJNkpQJXcwE0Th4SCdTMkJluHdL6qfpemo&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZeZBnYtTiAL56uMQGh2iRnfdpiPKx4h2yjkR5hiSW9JPrO1S65Q6GtGdqDm9lONQPpg&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
