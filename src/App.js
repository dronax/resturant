import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="nav">
            <img src={logo} alt="logo" className="logo"></img>
          </div>
          <div className="text">
            <Link
              className="navhome na"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
            <Link
              className="navmenu na"
              style={{ textDecoration: "none" }}
              to="/Menu"
            >
              Menu
            </Link>
            <Link
              className="navabout na"
              style={{ textDecoration: "none" }}
              to="/about/Resturant"
            >
              About
            </Link>
            <Link
              className="nnavcontact na"
              style={{ textDecoration: "none" }}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about/:name" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="foot">
        <Footer />
        <div className="ftext">2022 Copyright Reserved</div>
      </div>
    </Router>
  );
}

export default App;
