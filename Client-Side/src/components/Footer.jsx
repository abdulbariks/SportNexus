import React, { use } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcSportsMode } from "react-icons/fc";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Footer = () => {
  const { darkMode } = use(AuthContext);
  return (
    <footer
      className={`footer footer-horizontal footer-center p-10 ${
        darkMode ? "bg-black" : "bg-[#98d0ec]"
      }`}
    >
      <aside>
        <FcSportsMode size={48} />
        <p className="font-bold">SportNexus</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <NavLink>
            <FaFacebook size={32} />
          </NavLink>
          <NavLink>
            <FaXTwitter size={32} />
          </NavLink>
          <NavLink>
            <FaLinkedin size={32} />
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
