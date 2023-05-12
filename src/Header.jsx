import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/home">Home</Link> | <Link to="/scraper">Scraper</Link> |{" "}
          <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> |{" "}
          <Link to="/home">
            <LogoutLink />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
