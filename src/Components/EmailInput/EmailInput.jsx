import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import "./EmailInput.css";
import {useContext} from "react";
import AppContext from "../../Context/AppContext";
function EmailInput() {

    const {email,setEmail} = useContext(AppContext);

    return (
      <div className="EmailInput">
        <MdOutlineEmail  className="EmailInputIcon"/>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="EmailInputInput"
          >
        </input>

      </div>
      
      
    );
}

export default EmailInput;
