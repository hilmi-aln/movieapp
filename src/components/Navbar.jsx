import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const registerClicked = () => {
    navigate("/register");
  };
  const loginClicked = () => {
    navigate("/login");
  };
  const logoutClicked = ()=> {
    logOut();
    navigate("/login");
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            React Movie App
          </Link>
          {currentUser ? (
            <div>
              <button type="button" className="btn btn-outline-light m-1" onClick={logoutClicked}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                className="btn btn-outline-light m-1"
                onClick={loginClicked}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-light m-1"
                onClick={registerClicked}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
