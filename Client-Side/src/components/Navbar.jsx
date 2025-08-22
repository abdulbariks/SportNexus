import React, { use } from "react";
import { FcSportsMode } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut, setDarkMode, darkMode } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch(() => {
        // console.log(error);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogOut Fail!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/events"}>Events</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${
        darkMode ? "bg-black" : "bg-[#98d0ec]"
      }  shadow-sm sticky top-0 z-50`}
    >
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
              {user ? (
                <>
                  <li>
                    <NavLink to={"/create-event"}>Create Event</NavLink>
                  </li>
                  <li>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0}>Profile</div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                      >
                        <li>
                          <NavLink to={"/book-event"}>Book Event</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/my-bookings"}>My Bookings</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/manage-events"}>Manage Events</NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="flex gap-2">
            <NavLink to={"/"}>
              <FcSportsMode size={32} />
            </NavLink>
            <NavLink to={"/"} className="text-xl hidden md:block lg:block">
              SportNexus
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
            {user ? (
              <>
                <li>
                  <NavLink to={"/create-event"}>Create Event</NavLink>
                </li>
                <li>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0}>Profile</div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <NavLink to={"/book-event"}>Book Event</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/my-bookings"}>My Bookings</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/manage-events"}>Manage Events</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <label className="toggle text-base-content">
            <input
              onChange={() => setDarkMode(!darkMode)}
              type="checkbox"
              value="dark"
              className="theme-controller"
            />
            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
          {!user ? (
            <div className="flex gap-5">
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink to={"/register"}>Register</NavLink>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user?.displayName} src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>{user.displayName}</li>
                <li>
                  <button onClick={handleLogOut}> Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
