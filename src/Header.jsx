import { NavLink } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="pb-3">
      <nav className="nav nav-tabs justify-content-between bg-primary-subtle border border-primary-subtle">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              to="/home"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/scraper"
              className="nav-link"
              activeClassName="active"
            >
              Scraper
            </NavLink>
          </li>
        </ul>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link" activeClassName="active">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              <LogoutLink />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
