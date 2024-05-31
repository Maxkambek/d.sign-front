import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="HomeAbout">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5">
              <div className="home_about_right">
                <img src="/img/chaq.svg" alt="" />
                <div className="h_about_name">
                  We D.sign Creative and Digital
                </div>
                <div className="h_about_p">
                  We create magical digital ideas, products and experiences.
                  We’re called D.sign because we aim to bring you forward,
                  creative and digital.
                </div>
                <div onClick={() => nav("/about-us")} className="h_about_btn">
                  About Us
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="home_about_left">
                <img className="h_about_img_1" src="/img/h_about.png" alt="" />
                <img className="h_about_img_2" src="/img/about2.webp" alt="" />
                <img className="h_about_img_3" src="/img/about3.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
