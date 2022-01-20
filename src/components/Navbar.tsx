import * as React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">Shoe.</div>
      </div>
      <div className="right">
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
