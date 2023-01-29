import './nav.css'
import { Outlet, Link } from "react-router-dom";
function NavBar() {
return (
    <header>
    <div className="logo"></div>
    <div className="navlink">
      <div className="links">
        <Link to="/about">About Us</Link>

        <Link to="/">Services</Link>

        <Link to="/">Ou Ttraining</Link>
      </div>

      <div class="btn">contact us</div>
    </div>
  </header>
)
}
export  default NavBar;