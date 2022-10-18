import React from "react";
import Heading from "../components/Heading";
import SubmitButton from "../components/SubmitButton";

const SignUpPage2 = (props) => {
  const { details, setDetails } = props;

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  let disabled = true;
  if (details.workspaceName && details.workspaceUrl) {
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
        heading="Let's set up a home for all your work"
        subHeading="You can always create another workspace later."
      />
      <div className="mb-3 page1-input">
        <label htmlFor="workspaceName" className="form-label page1-label">
          Workspace Name
        </label>
        <input
          type="text"
          className="form-control"
          id="workspaceName"
          placeholder="Eden"
          value={details.workspaceName}
          onChange={handleChange}
        />
        <label htmlFor="workspaceUrl" className="form-label mt-3 page1-label">
          Workspace URL <span className="optional">(optional)</span>
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            www.eden.com/
          </span>
          <input
            type="text"
            className="form-control"
            id="workspaceUrl"
            aria-describedby="basic-addon3"
            placeholder="Example"
            value={details.workspaceUrl}
            onChange={handleChange}
          />
        </div>
        <SubmitButton
          disabled={disabled}
          handleClick={handleClick}
          btnText="Create Workspace"
          url="/page3"
        />
      </div>
    </div>
  );
};

export default SignUpPage2;
