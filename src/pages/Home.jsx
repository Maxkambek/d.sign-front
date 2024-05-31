import Header from "../components/Header";
import video3 from "../assets/v3.mp4";
import Header2 from "../components/Header2";
import OurWorks from "../components/OurWorks";
import WhatWeDo from "../components/WhatWeDo";
import HomeAbout from "../components/HomeAbout";
import HomeSlider from "../components/HomeSlider";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="Home">
            <div className="main_part">
              <video loop autoPlay muted id="background-video">
                <source src={video3} type="video/mp4" />
              </video>
              <video loop autoPlay muted id="background-video2">
                <source src={video3} type="video/mp4" />
              </video>

              <video loop autoPlay muted id="background-video3">
                <source src={video3} type="video/mp4" />
              </video>
              <video loop autoPlay muted id="background-video4">
                <source src={video3} type="video/mp4" />
              </video>
              <Header />
            </div>
            <Header2 />
            <OurWorks />
            <WhatWeDo />
            <HomeAbout />
            <HomeSlider />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
