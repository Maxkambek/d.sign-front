import { Swiper, SwiperSlide } from "swiper/react";
import video3 from "../assets/video_2022.mp4";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeAbout from "../components/HomeAbout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_PATH } from "../constants/constant";

const AboutUs = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "main/our-story/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="AboutUs">
        <div className="container">
          <div className="about_header">
            <div className="row">
              <div className="col-lg-5">
                <div className="about_right">
                  <div className="right_h">Our Story</div>
                  <div className="right_p">
                    is driven by authenticity and understanding.
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about_left">
                  <div className="left_h">
                    We are a passionate team of experts dedicated to creating
                    your digital value.
                  </div>
                  <div className="left_p">
                    We create magical digital ideas, products and experiences.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_swiper">
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 1500,
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
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="swiper_item">
                  <img className="w-100" src={item.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container">
          <div className="aboutus_video_container">
            {" "}
            <video loop autoPlay muted id="header_video">
              <source src={video3} type="video/mp4" />
            </video>
          </div>
          <div className="how-we-do">
            <div className="how-we-do-name">How We Do It</div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="how-we-do-right">
                  <img src="/img/howwe.svg" alt="" />
                  <div className="how-we-do-h">Creativity meets technology</div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="how-we-do-left">
                  <div className="left-item">
                    <img src="/img/Discovery-Move-Digital.svg" alt="" />
                    <div className="left-text-box">
                      <div className="how-we-do-h">Discovery</div>
                      <div className="how-we-do-p">
                        We create digital products using modern design
                        techniques. The works we implement are easy to
                        understand, aesthetic, interactive and functional.
                      </div>
                    </div>
                  </div>
                  <div className="left-item">
                    <img src="/img/Direction-Move-Digital.svg" alt="" />
                    <div className="left-text-box">
                      <div className="how-we-do-h">Discovery</div>
                      <div className="how-we-do-p">
                        We create digital products using modern design
                        techniques. The works we implement are easy to
                        understand, aesthetic, interactive and functional.
                      </div>
                    </div>
                  </div>
                  <div className="left-item">
                    <img src="/img/Design-Move-Digital.svg" alt="" />
                    <div className="left-text-box">
                      <div className="how-we-do-h">Discovery</div>
                      <div className="how-we-do-p">
                        We create digital products using modern design
                        techniques. The works we implement are easy to
                        understand, aesthetic, interactive and functional.
                      </div>
                    </div>
                  </div>
                  <div className="left-item">
                    <img src="/img/Development-Move-Digital.svg" alt="" />
                    <div className="left-text-box">
                      <div className="how-we-do-h">Discovery</div>
                      <div className="how-we-do-p">
                        We create digital products using modern design
                        techniques. The works we implement are easy to
                        understand, aesthetic, interactive and functional.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_us_about">
          <HomeAbout />
        </div>
        <div className="boxx">
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
      </div>
    </>
  );
};

export default AboutUs;
