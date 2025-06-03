import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcSportsMode } from "react-icons/fc";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-100 p-10">
      <aside>
        <FcSportsMode size={32} />
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
