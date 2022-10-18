import React from "react";
import Heading from "../components/Heading";
import SubmitButton from "../components/SubmitButton";

const SignUpPage1 = (props) => {
  const { details, setDetails } = props;

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  let disabled = true;
  if (details.fullName && details.displayName) {
    disabled = false;
  }

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div className="page1-container">
      <Heading
        heading="Welcome! First things first..."
        subHeading="You can always change them later."
      />
      <div className="mb-3 page1-input">
        <label htmlFor="fullName" className="form-label page1-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Steve Jobs"
          value={details.fullName}
          onChange={handleChange}
        />
        <label htmlFor="displayName" className="form-label mt-3 page1-label">
          Display Name
        </label>
        <input
          type="text"
          className="form-control"
          id="displayName"
          placeholder="Steve"
          value={details.displayName}
          onChange={handleChange}
        />
        <SubmitButton
          disabled={disabled}
          handleClick={handleClick}
          btnText="Create Workspace"
          url="/page2"
        />
      </div>
    </div>
  );
};

export default SignUpPage1;
