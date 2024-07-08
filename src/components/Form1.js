import React, { useState } from "react";

const Form1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[^A-Za-z0-9].*[^A-Za-z0-9]).{8,}$/;

    if (!formData.emailId || !emailRegex.test(formData.emailId)) {
      errors.emailId = "Invalid email ID";
    }

    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password =
        "Password must contain minimum 2 capital letters, 2 small letters, 2 numbers, and 2 special characters.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form 1</h2>
      <div>
        <label>Email ID:</label>
        <input
          type="email"
          value={formData.emailId}
          onChange={(e) =>
            setFormData({ ...formData, emailId: e.target.value })
          }
          required
        />
        {errors.emailId && <span>{errors.emailId}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="button" disabled>
        Back
      </button>
      <button type="submit">Save and Next</button>
    </form>
  );
};

export default Form1;
