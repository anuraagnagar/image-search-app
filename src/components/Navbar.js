import React from "react";

function Navbar({ logo }) {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>
          <span>Im</span>ma<span>A</span>ze
        </h1>
      </nav>
    </div>
  );
}

export default Navbar;
