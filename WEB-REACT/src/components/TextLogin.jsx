import React from "react";

const TextLogin = ({nameLogin, value, onChange}) => {
  return (
    <div className="login-field" style={{ paddingTop: '6px' }}>
      <label className="login-label">{nameLogin}</label>
      <input className="login-input" placeholder={nameLogin} value={value} onChange={onChange}/>
    </div>
  );
};

export default TextLogin;
