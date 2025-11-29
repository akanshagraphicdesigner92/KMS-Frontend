import React from "react";
import logo from "../Assets/logo.svg";
import Department_logo from "../Assets/Department_logo.svg";
import skiptocontent1 from "../Assets/skip to content 1.svg";
import Accessibility from "../Assets/Accessibility.svg";
import site_map1 from "../Assets/site_map1.svg";
import help from "../Assets/help.svg";
import language from "../Assets/language.svg";
import log_out from "../Assets/log_out.svg";

export default function Topbar() {
  return (
    <header className="topbar">
      {/* ROW 1 — Normal Flex Row */}
      <div className="d-flex flex-row ">
        {/* LEFT LOGO */}
        <div className="p-2  d-flex flex-grow-1  ">
          <img src={logo} alt="logo" className="left-logo" />
        </div>

        {/* TITLE MIDDLE */}
        <div className="p-2  d-flex align-items-center">
          <img
            src={Department_logo}
            alt="department_logo"
            className="dept-logo"
          />
          <h5 className="kms-text mb-0 ms-2 text-white">
            Knowledge Management System
          </h5>
        </div>
      </div>

      {/* ROW 2 — NORMAL LEFT-TO-RIGHT ORDER */}
      <div className="d-flex align-items-center d-flex justify-content-end">
        {/* SKIP TO CONTENT */}
        <div className="p-2 ">
          <img src={skiptocontent1} className="top-icon" alt="" />
        </div>

        {/* SEPARATOR */}
        <div className=" text-white fs-5">|</div>

        {/* ACCESSIBILITY */}
        <div className="p-2 ">
          <img src={Accessibility} className="top-icon" alt="" />
        </div>

        {/* SEPARATOR */}
        <div className=" text-white fs-5">|</div>

        {/* SITE MAP */}
        <div className="p-2 ">
          <img src={site_map1} className="top-icon" alt="" />
        </div>

        {/* SEPARATOR */}
        <div className="  text-white fs-5">|</div>

        {/* HELP */}
        <div className="">
          <img src={help} className="top-icon" alt="" />
        </div>

        {/* SEPARATOR */}
        <div className=" text-white fs-5">|</div>

        {/* LANGUAGE */}
        <div className="p-2 ">
          <img src={language} className="top-icon" alt="" />
        </div>

        {/* SEPARATOR */}
        <div className="  text-white fs-5">|</div>

        {/* LOGOUT */}
        <div className="p-2 ">
          <img src={log_out} className="top-icon" alt="" />
        </div>
      </div>
    </header>
  );
}
