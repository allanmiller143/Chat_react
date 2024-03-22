import React from "react";
import {useState} from "react";
import { MdOutlineEmail } from "react-icons/md";
import "./EmailInput.css";
function EmailInput() {

    const [Email, setEmail] = useState("");

    return (
      <div className="EmailInput">
        <MdOutlineEmail  className="EmailInputIcon"/>
        <input 
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="EmailInputInput"
          >
        </input>

      </div>
      
      
    );
}

export default EmailInput;
