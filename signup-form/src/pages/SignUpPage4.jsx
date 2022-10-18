import React from "react";
import Heading from "../components/Heading";
import SubmitButton from "../components/SubmitButton";

const SignUpPage4 = (props) => {
  const { details, setDetails } = props;

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
    setDetails({
      fullName: "",
      displayName: "",
      workspaceName: "",
      workspaceUrl: "",
      usageType: "",
    });
  };

  let disabled = true;
  if (details.displayName) {
    disabled = false;
  }

  return (
    <div className="page1-container">
      <div className="complete">
        <img src="./complete.png" />
      </div>
      <Heading
        heading={`Congratulations, ${
          disabled ? "Steve" : details.displayName
        }!`}
        subHeading="You have completed onboarding, you can start using the Eden!"
      />
      <div className="mb-3 page4-input">
        <SubmitButton
          disabled={disabled}
          handleClick={handleClick}
          btnText="Launch Eden"
          url="/"
        />
      </div>
    </div>
  );
};

export default SignUpPage4;
