import React from "react";

import logo from "../Assets/logo1.svg";
import Department_logo from "../Assets/Department_logo.svg";

import skipToContent from "../Assets/skip to content 1.svg";
import Accessibility from "../Assets/Accessibility.svg";
import site_map1 from "../Assets/site_map1.svg";
import help from "../Assets/help.svg";
import language from "../Assets/language.svg";
import log_out from "../Assets/log_out.svg";

export default function Topbar() {
  return (
    <header className="app-header d-flex pt-2">
      <div className="header-content-area d-md-flex flex-grow-1">

        {/* LEFT LOGO */}
        <div className="d-flex align-items-center justify-content-center">
          <a href="/" aria-label="eOffice logo">
            <img className="img-fluid" alt="eOffice logo" src={logo} />
          </a>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="profile_details navbar py-0 ms-auto d-flex align-items-center flex-nowrap">
          <div className="py-2 d-flex flex-md-column flex-grow-1">

            {/* GOVERNMENT TEXT */}
            <div className="right-head-content pe-3 text-end justify-content-end d-md-flex d-none text-white">
              National Informatics Center <br />
              Government of India
            </div>

            {/* TOP ICON MENU */}
            <div className="d-flex flex-grow-1 pt-md-2 justify-content-center font-nav text-white pe-2">
              <ul className="d-flex quick-links-nav mb-0 ps-0 align-items-center">

                {/* SKIP TO CONTENT */}
                <li className="p-2">
                  <img src={skipToContent} className="top-icon" alt="Skip to content" />
                </li>

                <li className="fs-5 text-white px-1">|</li>

                {/* ACCESSIBILITY */}
                <li className="p-2">
                  <img src={Accessibility} className="top-icon" alt="Accessibility" />
                </li>

                <li className="fs-5 text-white px-1">|</li>

                {/* SITE MAP */}
                <li className="p-2">
                  <img src={site_map1} className="top-icon" alt="Site Map" />
                </li>

                <li className="fs-5 text-white px-1">|</li>

                {/* HELP */}
                <li className="p-2">
                  <img src={help} className="top-icon" alt="Help" />
                </li>

                <li className="fs-5 text-white px-1">|</li>

                {/* LANGUAGE */}
                <li className="p-2">
                  <img src={language} className="top-icon" alt="Language" />
                </li>

                <li className="fs-5 text-white px-1">|</li>

                {/* LOGOUT */}
                <li className="p-2">
                  <img src={log_out} className="top-icon" alt="Log out" />
                </li>

              </ul>
            </div>

          </div>
        </div>

      </div>
    </header>
  );
}
