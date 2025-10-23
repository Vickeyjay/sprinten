import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from '../Hamburger/hamburger';

const Navbar = () => {
  const location = useLocation();
  const isChatPage = location.pathname === '/chat';

  return (
    <div className="navbar-container">
 
        <div className={`logo-container ${isChatPage && "show-mobile"}`}>
          <Link to="/">
            <div className="logo-image">
              <img src="images/logo.png" alt="logo" />
            </div>
          </Link>
        </div>
   


      <div className="hamburger-wrapper">
        <Hamburger />
      </div>


      <ul className="btn-container">
        {!isChatPage ? (
          <>
            <li>
              <Link to="/login" className="btn-login">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="btn-create">Create an account</Link>
            </li>
          </>
        ) : null}
      </ul>

      {isChatPage ? (

        <div className="profile">
          <img src="/images/profile.png" alt="User" />
          <div>
            <h4>Orimadegun Promise</h4>
            <p>Free</p>
          </div>
        </div>

      ) : null}



    </div>
  );
};

export default Navbar;

