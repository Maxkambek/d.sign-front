import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_PATH } from "../constants/constant";

const HomeSlider = () => {
  const nav = useNavigate();
  const [partners, setPartners] = useState([]);
  const [rewiews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "main/partner/").then((res) => {
      setPartners(res.data);
    });
    axios.get(API_PATH + "main/review/").then((res) => {
      setReviews(res.data);
    });
  }, []);

  return (
    <>
      <div className="HomeSlider">
        <div className="container">
          <div className="home_slider_name">
            Since 2021 we’ve been working with amazing organisations to create
            meaningful results.
          </div>
        </div>
        <div className="slider_box">
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              420: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {partners?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="swiper_item">
                  <img src={item.logo} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="commnet_slider_box">
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              420: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {rewiews?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="slider_box">
                  <div className="comment_h">{item.description}</div>
                  <div className="comment_author">{item.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="h_slider_footer">
          <div className="f_top"></div>
          <svg
            className="star"
            width="121"
            height="121"
            viewBox="0 0 121 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.5 0C62.554 32.5246 88.4752 58.4461 121 60.5C88.4752 62.554 62.554 88.4752 60.5 121C58.4461 88.4752 32.5246 62.554 0 60.5C32.5246 58.4461 58.4461 32.5246 60.5 0Z"
              fill="url(#paint0_linear_398_184)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_398_184"
                x1="60.5"
                y1="0"
                x2="60.5"
                y2="121"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DF99F7" />
                <stop offset="1" stopColor="#FFDBB0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="f_bottom"></div>
        </div>
        <div className="h_about_text_box">
          <div className="text_box_h">LET’S BUILD THE FUTURE TOGETHER</div>
          <button className="myBtn" onClick={() => nav("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
