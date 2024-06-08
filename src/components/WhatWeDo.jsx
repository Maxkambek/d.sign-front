import { getText } from "../locale";

const WhatWeDo = () => {
  return (
    <>
      <div className="WhatWeDo">
        <div className="container">
          <div className="whatwedo_name">{getText("What We Do")}</div>
          <div className="whatwedo_box">
            <div className="img_box">
              <img src="/img/Discovery-Move-Digital.svg" alt="" />
            </div>
            <div className="what_box_middle">
              {" "}
              <div className="box_name">{getText("Branding & Identity")}</div>
              <div className="box_hidden_p">{getText("what_1")}</div>
            </div>
            <div className="box_p">
              {getText("Graphic design Logo & Branding")}
            </div>
          </div>
          <div className="whatwedo_box">
            <div className="img_box">
              <img src="/img/Direction-Move-Digital.svg" alt="" />
            </div>
            <div className="what_box_middle">
              {" "}
              <div className="box_name">{getText("Graphic Design")}</div>
              <div className="box_hidden_p">{getText("what_2")}</div>
            </div>
            <div className="box_p">{getText("what_3")}</div>
          </div>
          <div className="whatwedo_box">
            <div className="img_box">
              <img src="/img/Design-Move-Digital.svg" alt="" />
            </div>
            <div className="what_box_middle">
              {" "}
              <div className="box_name">
                {getText("Interior & Exterior Design")}
              </div>
              <div className="box_hidden_p">{getText("what_4")}</div>
            </div>
            <div className="box_p">- Interior Design - Exterior Design</div>
          </div>
          <div className="whatwedo_box">
            <div className="img_box">
              <img src="/img/Development-Move-Digital.svg" alt="" />
            </div>
            <div className="what_box_middle">
              {" "}
              <div className="box_name">{getText("Digital Media")}</div>
              <div className="box_hidden_p">{getText("what_5")}</div>
            </div>
            <div className="box_p">
              {getText("Videos - Animations - Presentations")}
            </div>
          </div>
          <div className="whatwedo_box">
            <div className="img_box">
              <img src="/img/Discovery-Move-Digital.svg" alt="" />
            </div>
            <div className="what_box_middle">
              {" "}
              <div className="box_name">{getText("Web & App Development")}</div>
              <div className="box_hidden_p">{getText("what_6")}</div>
            </div>
            <div className="box_p">
              {" "}
              {getText("Website Development - App Development")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
