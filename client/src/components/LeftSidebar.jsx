import React from "react";

const LeftSidebar = () => {
  return (
    <div className="sidebar left-sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a className="link" href="/">
            Home
          </a>
        </li>
        <li className="sidebar-list-item">
          <a className="link" href="/">
            About LoopIn
          </a>
        </li>
        <li className="sidebar-list-item">
          <a className="link" href="/">
            Contact Us
          </a>
        </li>
        <li className="sidebar-list-item">
          <a className="link" href="/">
            Privacy Policy
          </a>
        </li>
        <li className="sidebar-list-item">
          <a className="link" href="/">
            Terms of Use
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
