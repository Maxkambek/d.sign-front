const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="footer_main">
            {" "}
            <div className="footer_box">
              <div className="logo">
                <img src="logo.svg" alt="" />
              </div>
              <div className="footer_h">
                We connect with ambitious brands and people.
              </div>
              <div className="footer_links">Instagram ------- Telegram</div>
            </div>
            <div className="footer_contact_box">
              <div className="tel_box">
                <div className="tel_item">
                  <img src="img/footer-phone.png" alt="" />
                  <div className="phone">+998 99 999 99 99</div>
                </div>
                <div className="tel_item">
                  <img src="img/footer-phone.png" alt="" />
                  <div className="phone">+998 99 999 99 99</div>
                </div>
              </div>
              <div className="social_links">
                <img src="/img/footer-facebook.png" alt="" />
                <img src="/img/footer-instagram.png" alt="" />
                <img src="/img/footer-telegram.png" alt="" />
                <img src="/img/linkedin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_box">
        <div className="h6">© D.SIGN 2024 Cookies policy</div>
      </div>
    </>
  );
};

export default Footer;
