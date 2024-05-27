import Header from "../components/Header";
import video3 from "../assets/v3.mp4";
import Header2 from "../components/Header2";
import OurWorks from "../components/OurWorks";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="main_part">
          <video loop autoPlay muted id="background-video">
            <source src={video3} type="video/mp4" />
          </video>
          <Header />
        </div>
        <Header2 />
        <OurWorks />
        <WhatWeDo />
      </div>
    </>
  );
};

export default Home;
