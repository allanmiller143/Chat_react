import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import "./EmailInput.css";
import propTypes from "prop-types";
function EmailInput({data}) {
   const {email,setEmail} = data;

   const handleEmailInput = (e) => {
    setEmail(e.target.value);
   };

    return (
      <div className="EmailInput">
        <MdOutlineEmail  className="EmailInputIcon"/>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailInput}
          className="EmailInputInput"
          >
        </input>

      </div>
      
      
    );
}

export default EmailInput;

EmailInput.propTypes = {
  data : propTypes.shape({})
}.isRequired;