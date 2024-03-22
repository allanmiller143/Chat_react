import React from "react";
import propTypes from "prop-types";
import "./SignInButton.css";

function SignInButton({data}) {
    const {label,onClick} = data;
    return (
      <button className="sign__in__button" onClick={onClick}>
        {label}
      </button>
    );
}

export default SignInButton;

SignInButton.propTypes = {
    data : propTypes.shape({})
}.isRequired;
