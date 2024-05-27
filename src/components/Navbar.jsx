const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="navbar_box">
            <div className="nav_right">LOGO</div>
            <div className="nav_left">
              <div className="nav_links">
                <div className="nav_a">Work</div>
                <div className="nav_a">About Us</div>
                <div className="nav_a">Services</div>
              </div>
              <div className="nav_btn">Contact us</div>
              <div className="nav_lang">
                <select name="" id="">
                  <option value="">Uz</option>
                  <option value="">Ru</option>
                  <option value="">En</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
