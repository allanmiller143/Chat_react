import {useState} from "react";

import { RiLockPasswordFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import "./PasswordInput.css";
import propTypes from "prop-types";

function PasswordInput({data}) {

  const [showPassword, setShowPassword] = useState(false);
  const {password,setPassword,hint}  = data;
 
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
   };
  

  return (
    <div className="PasswordInput">
      <RiLockPasswordFill className="PasswordInputIcon" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder={hint}
        value={password}
        onChange={handlePasswordInput}
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

PasswordInput.propTypes = {
  data : propTypes.shape({})
}.isRequired;