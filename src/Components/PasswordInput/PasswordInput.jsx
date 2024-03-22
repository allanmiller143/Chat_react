import {useContext,useState} from "react";
import AppContext from "../../Context/AppContext";
import { RiLockPasswordFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import "./PasswordInput.css";

function PasswordInput() {

  const [showPassword, setShowPassword] = useState(false);
  const {password,setPassword} = useContext(AppContext);
  

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
