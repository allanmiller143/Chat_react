import React, { useState } from "react";
import { RiLockPasswordFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import "./PasswordInput.css";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="PasswordInput">
      <RiLockPasswordFill className="PasswordInputIcon" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="PasswordInputInput"
      />
      <button
        type="button"
        onClick={handleTogglePasswordVisibility}
        className="PasswordInputVisibilityButton"
      >
        {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
      </button>
    </div>
  );
}

export default PasswordInput;
