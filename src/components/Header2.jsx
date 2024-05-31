import Aos from "aos";
import { useEffect } from "react";

const Header2 = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2500,
    });
  }, []);
  return (
    <>
      <div className="Header2">
        <div className="container">
          <div data-aos="zoom-in-up" className="header_2_box_name">
            We love to _____
          </div>
          <div className="header2_box">
            <div data-aos="zoom-in-right" className="header2_right">
              <img src="/img/yulduz.svg" alt="" />
              <div className="right_h">
                Proud of the work. Excited about the results.
              </div>
            </div>
            <div data-aos="zoom-in-left" className="header2_left">
              <div className="left_h">
                Our works are easy to understand and aesthetic, interactive and
                functional.
              </div>
              <div className="left_h">
                The result will target audiences and boost engagement, drive
                sales and increase the brand value of your business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
