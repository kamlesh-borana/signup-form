import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  let pageNumber = 1;
  if (location.pathname === "/") {
    pageNumber = 1;
  } else if (location.pathname === "/page2") {
    pageNumber = 2;
  } else if (location.pathname === "/page3") {
    pageNumber = 3;
  } else {
    pageNumber = 4;
  }
  return (
    <>
      <div className="header">
        <img className="logo" src="./brand.png" />
        <span className="brand">Eden</span>
      </div>
      <div className="nav-container">
        <div className="navigation">
          <div className={`circle${pageNumber >= 1 ? " path" : ""}`}>1</div>
          <div className={`divider${pageNumber >= 1 ? " path" : ""}`}></div>
          <div className={`divider${pageNumber >= 2 ? " path" : ""}`}></div>
          <div className={`circle${pageNumber >= 2 ? " path" : ""}`}>2</div>
          <div className={`divider${pageNumber >= 2 ? " path" : ""}`}></div>
          <div className={`divider${pageNumber >= 3 ? " path" : ""}`}></div>
          <div className={`circle${pageNumber >= 3 ? " path" : ""}`}>3</div>
          <div className={`divider${pageNumber >= 3 ? " path" : ""}`}></div>
          <div className={`divider${pageNumber === 4 ? " path" : ""}`}></div>
          <div className={`circle${pageNumber === 4 ? " path" : ""}`}>4</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
