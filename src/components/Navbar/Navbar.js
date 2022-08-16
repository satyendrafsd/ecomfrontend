import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const user = false;
  return (
    <div className="header fixed-top">
      <div className="container">
        <div className="row">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/" className="text-decoration-none">
                Ecom
              </Link>
            </div>
            <div className="user-actions">
              <Link to="/cart" className="text-decoration-none">
                Cart
              </Link>
              <div className="user-intro">Guest</div>
              {user ? (
                <div className="logout-btn">Logout</div>
              ) : (
                <div className="login-btn">
                  <Link className="text-decoration-none" to="/login">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
