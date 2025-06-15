import React, { use } from "react";
import { FcSportsMode } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = use(AuthContext);

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
  return (
    <div className="bg-[#98d0ec] shadow-sm">
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
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/events"}>Events</NavLink>
              </li>
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
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/events"}>Events</NavLink>
            </li>
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
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
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
