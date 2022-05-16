import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebaseinit";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rahul's Laptop Inventory
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link" to="home#inventory">
                  Inventory
                </Link>
              </li> */}

              {user && (
                <>
                  <li className=" mx-2 btn btn-secondary nav-item">
                    <Link className="nav-link" to="home#inventory">
                      My Items
                    </Link>
                  </li>

                  <li className="nav-item mx-2 btn btn-secondary ">
                    <Link className="nav-link" to="/manageinventory">
                      Manage Inventory
                    </Link>
                  </li>

                  <li className="nav-item mx-2 btn btn-secondary">
                    <Link className="nav-link" to="/additem">
                      Add Items
                    </Link>
                  </li>
                </>
              )}

              {/* 
              <li className="nav-item">
                <Link className="nav-link" to="/manageinventory">
                  Manage Inventory
                </Link>
              </li> */}

              {/* 
              <li className="nav-item">
                <Link className="nav-link" to="/additem">
                  My Items
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/openinghours">
                  Inventory Opening Hours
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">
                  Customer's Feedback
                </Link>
              </li>
              {user ? (
                <button className="btn btn-secondary" onClick={handleSignOut}>
                  Sign Out
                </button>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
