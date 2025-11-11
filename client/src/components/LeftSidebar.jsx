import React from "react";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms">Terms of Use</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
