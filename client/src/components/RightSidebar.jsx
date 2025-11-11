import React from "react";

const RightSidebar = ({ onCreate }) => {
  return (
    <div className="right-sidebar">
      <button className="create-btn" onClick={onCreate}>
        Create discussion
      </button>

      <div className="trending">
        <h4>Trending</h4>
        <ul>
          <li>#webdev</li>
          <li>#javascript</li>
          <li>#react</li>
          <li>#css</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
