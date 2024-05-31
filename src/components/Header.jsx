// import video3 from "../assets/video_2023.mp4";

import Aos from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2500,
    });
  }, []);
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="header_box">
            <div data-aos="fade-right" className="header_text_box">
              <div className="header_h">
                We create individual design, develop brands & build web apps
                experiences
              </div>
              <div className="header_p">
                for ambitious companies since 2021.
              </div>
            </div>
            <div data-aos="fade-down" className="header_btn_box">
              <div className="js-circle circle-fill"></div>
              <svg
                width="176"
                height="176"
                viewBox="0 0 176 176"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.6" cx="88" cy="88" r="87.5" stroke="white" />
                <path
                  d="M84.156 57.4332L101.283 57.4332L76.9732 81.7432L76.7964 81.92L76.9732 82.0968L77.9032 83.0268L78.08 83.2036L78.2568 83.0268L102.567 58.7168L102.567 75.844L102.567 76.094L102.817 76.094L104.057 76.094L104.307 76.094L104.307 75.844L104.307 55.9432L104.307 55.6932L104.057 55.6932L84.156 55.6932L83.906 55.6932L83.906 55.9432L83.906 57.1832L83.906 57.4332L84.156 57.4332Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
              <div onClick={() => nav("/works")} className="b-title">
                See Our Work
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-delay="1200"
            className="header_video_box"
          >
            <video loop autoPlay muted id="header_video">
              <source
                src="https://move-creative.com/wp-content/uploads/2023/06/move-showreel-preview_4.mp4"
                type="video/mp4"
              />
            </video>
            <div onClick={() => nav("/works")} className="video_font_btn">
              More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
