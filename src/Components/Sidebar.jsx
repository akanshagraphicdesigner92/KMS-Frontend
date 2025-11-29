import React from "react";
import User from "../Assets/User.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar-container">

      {/* PROFILE SECTION */}
      <div className="profile-section text-center">
        <img src={User} alt="profile" className="user-img" />
        <h6 className="user-name">Sankalp Agarwal</h6>
        <small className="user-role">Scientist D</small>
      </div>

      {/* MENU GRID */}
      <div className="grid-container menu-box mt-3">
        <div className="menu-item">
          <i className="pi pi-book"></i>
          <span>Home</span>
        </div>

        <div className="menu-item">
          <i className="pi pi-file"></i>
          <span>Collection</span>
        </div>

        <div className="menu-item">
          <i className="pi pi-book"></i>
          <span>My Docs</span>
        </div>

        <div className="menu-item">
          <i className="pi pi-book"></i>
          <span>Contact Group</span>
        </div>
      </div>

      {/* ONLY THIS SECTION WILL SCROLL */}
      <div className="Counts scroll-counts center-align-items">
        <div className="status-card blue">
          <i className="pi pi-clock"></i>
          <div>
            <p className="stat-title">Recent Arrival</p>
            <p className="stat-value">23,792</p>
          </div>
        </div>

        <div className="status-card purple">
          <i className="pi pi-send"></i>
          <div>
            <p className="stat-title">Submitted</p>
            <p className="stat-value">173,795</p>
          </div>
        </div>

        <div className="status-card violet">
          <i className="pi pi-check-circle"></i>
          <div>
            <p className="stat-title">Published</p>
            <p className="stat-value">158,799</p>
          </div>
        </div>

        <div className="status-card yellow">
          <i className="pi pi-clock"></i>
          <div>
            <p className="stat-title">Pending</p>
            <p className="stat-value">278,799</p>
          </div>
        </div>

        <div className="status-card red">
          <i className="pi pi-share-alt"></i>
          <div>
            <p className="stat-title">Shared with me</p>
            <p className="stat-value">158,799</p>
          </div>
        </div>

        <div className="status-card green">
          <i className="pi pi-inbox"></i>
          <div>
            <p className="stat-title">Shared by me</p>
            <p className="stat-value">874,799</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
