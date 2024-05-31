const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="container">
          <div className="contact_header">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact_header_box">
                  <div className="contact_header_h">Contact Us</div>
                  <div className="contact_header_p">
                    Contact us and start a project!
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact_header_box">
                  <div className="contact_header_h">
                    Let’s create something great together.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_main">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="contact_right">
                  <div className="input_wrap">
                    <div className="label">{"What's your name?"}</div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="input_wrap">
                    <div className="label">Your Email address</div>
                    <input type="text" placeholder="E-mail address" />
                  </div>
                  <div className="input_wrap">
                    <div className="label">Your mobile tel</div>
                    <input type="text" placeholder="Tel" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact_left">
                  <div className="text_area_box">
                    <div className="area_label">Describe your project</div>
                    <textarea
                      className="contact_text_area"
                      name=""
                      id=""
                    ></textarea>
                  </div>
                  <div className="contact_btn">Send Request</div>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
