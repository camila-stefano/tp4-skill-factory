import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./styles.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="navbar__item-logo">
        <img className="navbar__item-logo-img" src={logo} alt="img logo"></img>
      </Link>
      <Link to="./login" className="navBar__link">
        Create account
      </Link>
      <Link to="./registered" className="navBar__link">
        Login
      </Link>
      <Link to="./cart" className="navBar__link__cart">
        <BsCart2 />
      </Link>
    </nav>
  );
};

export default NavBar;
