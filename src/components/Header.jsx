import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="header-content size">
        <span className="logo header-logo"><Link to="/pethelp">pethelp</Link></span>
        <nav className="desktop-menu">
          <ul>
            <li>
              <NavLink to="/pethelp/about" className="menu-link">about</NavLink>
            </li>
            <li>
              <NavLink to="/pethelp/contact" className="menu-link">contact</NavLink>
            </li>
            <li>
              <NavLink to="#" className="menu-link">photo gallery</NavLink>
            </li>
          </ul>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setOpenMenu(!openMenu)}><FaBars /></button>
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </header>
  )
}

export default Header;