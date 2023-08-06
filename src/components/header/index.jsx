import "./style.css";
import Navbar from "../navigationBar/navbar";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ logo }) => {
  return (
    <header className="header">
      <Link to={"/"} href="/" className="logo">
        {logo}
      </Link>
      <input type="checkbox" className="side-menu" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <Navbar />
    </header>
  );
};

export default Header;
