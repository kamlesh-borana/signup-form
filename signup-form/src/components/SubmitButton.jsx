import React from "react";
import { Link } from "react-router-dom";

const SubmitButton = (props) => {
  const { disabled, handleClick, btnText, url } = props;
  return (
    <Link
      type="submit"
      className={`btn btn-primary mt-4${disabled ? " disabled-button" : ""}`}
      onClick={handleClick}
      to={url}
    >
      {btnText}
    </Link>
  );
};

export default SubmitButton;
