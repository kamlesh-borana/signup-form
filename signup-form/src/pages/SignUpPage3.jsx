import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import SubmitButton from "../components/SubmitButton";

const SignUpPage3 = (props) => {
  const { details, setDetails } = props;
  const [selected, setSelected] = useState("forMyself");

  useEffect(() => {
    setDetails({
      ...details,
      usageType: selected,
    });
  }, [selected]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  let disabled = true;
  if (details.usageType) {
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
        heading="How are you planning to use Eden?"
        subHeading="We'll streamline your setup experience accordingly."
      />
      <div className="mb-3 page1-input">
        <div className="selection-card">
          <div className="option-card">
            <input
              type="radio"
              className="btn-check"
              name="usageType"
              id="forMyself"
              autoComplete="off"
              value="forMyself"
              checked={selected === "forMyself"}
              onChange={handleChange}
            />
            <label className="btn btn-outline" htmlFor="forMyself">
              <div className="options-card-inner">
                <div className="options-card-logo">
                  <img src="./user.png" />
                </div>
                <h4>For myself</h4>
                <p>Write better. Think more clearly. Stay organized.</p>
              </div>
            </label>
          </div>
          <div className="option-card">
            <input
              type="radio"
              className="btn-check"
              name="usageType"
              id="withTeam"
              autoComplete="off"
              value="withTeam"
              checked={selected === "withTeam"}
              onChange={handleChange}
            />
            <label className="btn btn-outline" htmlFor="withTeam">
              <div className="options-card-inner">
                <div className="options-card-logo">
                  <img src="./group.png" />
                </div>
                <h4>With my team</h4>
                <p>Wikis, docs, tasks & projects, all in one place.</p>
              </div>
            </label>
          </div>
        </div>
        <SubmitButton
          disabled={disabled}
          handleClick={handleClick}
          btnText="Create Workspace"
          url="/page4"
        />
      </div>
    </div>
  );
};

export default SignUpPage3;
