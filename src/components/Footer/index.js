import { GoMarkGithub } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer__container wrapper">
      <div className="footer__container__firstColumn">
        <p>
          Made by{" "}
          <a className="footer__link" href="https://github.com/CamiStefano" target="_blank" rel="noopener noreferrer">
            Cami Stefano
          </a>
        </p>
      </div>
      <div className="footer__container__secondColumn">
        <a href="https://www.linkedin.com/in/camila-victoria-stefano/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/CamiStefano" target="_blank" rel="noopener noreferrer">
          <GoMarkGithub />
        </a>
        <a href="https://instagram.com/CamiStefano" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
