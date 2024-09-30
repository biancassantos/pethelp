/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MobileMenu = ({ openMenu, setOpenMenu }) => {
  function closeMenu() {
    setOpenMenu(false)
  }

  return (
    <nav className={`mobile-menu ${openMenu ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/pethelp/about" className="menu-link" onClick={closeMenu}>about</Link>
          </li>
          <li>
            <Link to="/pethelp/contact" className="menu-link" onClick={closeMenu}>contact</Link>
          </li>
          <li>
            <Link to="#" className="menu-link" onClick={closeMenu}>photo gallery</Link>
          </li>
        </ul>
      </nav>
  )
}

export default MobileMenu;