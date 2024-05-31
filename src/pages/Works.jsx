import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../constants/constant";
import axios from "axios";
import Aos from "aos";

const Works = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [service, setService] = useState([]);
  const [filter, setFilter] = useState(0);
  useEffect(() => {
    axios
      .get(API_PATH + `main/project?service=${filter > 0 ? filter : ""}`)
      .then((res) => {
        setData(res.data);
      });
  }, [filter]);
  useEffect(() => {
    axios.get(API_PATH + "main/service/").then((res) => {
      setService(res.data);
    });
  }, []);
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <>
      <div className="Works">
        <div className="container">
          <div className="works_header">
            <div data-aos="fade-right" className="works_right">
              <div className="right_h">Featured work</div>
              <div className="right_p">Latest and Greatest</div>
            </div>
            <div data-aos="fade-left" className="works_left">
              Our Works are created easy to understand, aesthetic, interactive
              and functional.
            </div>
          </div>
        </div>

        <div className="works_main_box">
          <div className="container">
            <div className="row filter_box">
              <div
                onClick={() => setFilter(0)}
                className={`col-lg-3 col-md-4 col-sm-6 col-12 filter_item ${
                  filter === 0 ? "active" : ""
                }`}
              >
                All categories
              </div>
              {service?.map((item, index) => (
                <div
                  onClick={() => setFilter(item.id)}
                  key={index}
                  className={`col-lg-3 col-md-4 col-sm-6 col-12 filter_item ${
                    filter === item.id ? "active" : ""
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className="row">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 col-12 mt-5 ${
                    index === 1 || index === 41231 ? "mt-5 " : ""
                  }`}
                >
                  <div className="our_work_box">
                    <div className="filter"></div>
                    {item.image ? (
                      <>
                        <img className="w-100" src={item.image} alt="" />
                      </>
                    ) : (
                      <>
                        <video loop autoPlay muted>
                          <source src={item.file} type="video/mp4" />
                        </video>
                      </>
                    )}
                    <div className="work_category">{item.service.name}</div>
                    <div className="work_name">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            <div onClick={() => nav("/contact")} className="text_box_btn">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
