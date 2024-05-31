import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Works from "./pages/Works";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Works />} path="/works" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
        <Footer />
        <ScrollToTop />
      </HashRouter>
    </>
  );
}

export default App;
