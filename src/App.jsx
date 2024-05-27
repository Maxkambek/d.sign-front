import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
