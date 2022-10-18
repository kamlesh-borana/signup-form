import React from "react";

const Heading = (props) => {
  return (
    <>
      <h2 className="page1-heading">{props.heading}</h2>
      <h4 className="page1-sub-heading">{props.subHeading}</h4>
    </>
  );
};

export default Heading;
