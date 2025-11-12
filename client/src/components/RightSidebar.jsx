import React from "react";

const RightSidebar = ({ onCreate }) => {
  return (
    <div className="sidebar right-sidebar">
      <div className="trending">
        <h4>Trending</h4>
        <ul>
          <li>#webdev</li>
          <li>#javascript</li>
          <li>#react</li>
          <li>#css</li>
        </ul>
      </div>

      <button className="btn" onClick={onCreate}>
        Create discussion
      </button>
    </div>
  );
};

export default RightSidebar;
