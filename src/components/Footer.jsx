import { Link } from "react-router-dom";
import {FaInstagram, FaFacebookSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="size">
      <span className="logo footer-logo">pethelp</span>
      <div className="footer-icons">
        <Link>
          <FaInstagram />
        </Link>
        <Link>
          <FaFacebookSquare />
        </Link>
      </div>
    </footer>
  )
}

export default Footer