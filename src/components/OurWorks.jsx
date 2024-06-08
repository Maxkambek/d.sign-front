import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../constants/constant";
import Aos from "aos";
import { getText } from "../locale";

const OurWorks = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "main/project/").then((res) => {
      setData(res.data);
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
      <div className="OurWorks">
        <div className="container">
          <div data-aos="zoom-in-up" className="ourworks_name">
            {getText("Our Work")}
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="row"
          >
            {data?.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 mt-5 ${index === 1 || index === 4 ? "mt-5" : ""}`}
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

          <div className="our_work_footer">
            <div className="button-row">
              <small>{getText("NEXT")}</small>
              <div onClick={() => nav("/works")} className="title">
                {getText("Explore more")}
                <svg
                  width="31"
                  height="23"
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.53369 6.5H19.4665"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M19.4666 6.5L14.0981 11.8685"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M19.4666 6.50008L14.0981 1.13159"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
