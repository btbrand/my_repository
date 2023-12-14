import React, { useState } from "react";
import "./PasswordEntryStyle.css";

const PasswordEntry = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setValidationMessage("Password must be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      setValidationMessage("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      setValidationMessage("Password must contain at least one lowercase letter.");
    } else if (!/[0-9]/.test(password)) {
      setValidationMessage("Password must contain at least one digit.");
    } else if (!/[\s\S]*[!@#$%^&*()_\-+={[}\]|:;"'<,>.][\s\S]*/.test(password)) {
      setValidationMessage("Password must contain at least one special character.");
    } else if (password !== confirmPassword) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("Password entry successful.");
    }
  };

  return (
    <div className="password-entry-container">
      <h2>Password Entry</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          
          <input
            type="password"
            id="confirmPassword"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {validationMessage && <div className="validation-message">{validationMessage}</div>}
    </div>
  );
};
export default PasswordEntry;