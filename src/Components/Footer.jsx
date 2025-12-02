import React from "react";
import digitalIndiaLogo from "../Assets/logo-digital-india1.svg";
import nicLogo from "../Assets/logo-NIC 1.svg";

export default function Footer() {
  return (
    <footer className="Footer d-flex align-items-center py-2 px-3 small text-white">
      
      {/* LEFT: Version */}
      <div className="ps-4">
        Version 9.0
      </div>

      {/* CENTER: Text */}
      <div className="d-none d-md-flex flex-grow-1">
        <p className="mb-0 flex-grow-1 text-center">
          eOffice is a Mission Mode Project under the National E-Governance Plan, developed and implemented by National Informatics Centre (NIC) &copy; 2016
        </p>
      </div>

      {/* RIGHT: Logos */}
      <div className="ms-auto d-flex gap-2">
        <img className="footer-logo" src={digitalIndiaLogo} alt="Digital India" />
        <img className="footer-logo" src={nicLogo} alt="NIC bilingual logo" />
      </div>

    </footer>
  );
}
